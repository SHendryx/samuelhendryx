"use client";

import React, { useState, useEffect, useMemo, ReactNode, FC } from "react";
import { Points, Measurement } from '@/lib/noaa-points';
import { WeeklyForecast, Period } from "./noaa-weekly-forecast";
import { error } from "console";

export interface Coordinates{
  latitude: number,
  longitude: number,
};

const MyWeatherApp: React.FC = () => {
  const [userLatitude, setUserLatitude] = useState<number | null>(null);
  const [userLongitude, setUserLongitude] = useState<number | null>(null);
  const [userCity, setUserCity] = useState<string>();
  const [userState, setUserState] = useState<string>();
  const [weeklyForecastURL, setWeeklyForecastURL] = useState<string | null>(null);
  const [userElevation, setUserElevation] = useState<Measurement>();
  const [forecast, setForecast] = useState<Period[]>([]);

  // Get GeoLocation by GPS, or IP Address.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      setUserLatitude(Number(position.coords.latitude.toFixed(4)));
      setUserLongitude(Number(position.coords.longitude.toFixed(4)));
    },
  (error) => {
    console.log("There was an error obtaining the user's geolocation.");
  })
  } else {
    console.log("Geolocation is not currently available.");
    console.log("Note: Geolocation is available only in secure contexts.");
  }

  useEffect(() => {
    const fetchData = async () => {
      // Print GPS Latitude and Longitude.
      console.log(`Geolocation position: ${userLatitude}, ${userLongitude}`);
      // Fetch data from NOAA Points API
      // Retrieve City and State
      // Retrieve Forecast URL
      await fetchPointsData();
      console.log(`City/State: ${userCity}, ${userState}`)
      console.log(`Forecast URL: ${weeklyForecastURL}`)
      let now = new Date();
      console.log(`The current date/time is: ${now}`)
    }
    fetchData();
  }, [userLatitude, userLongitude]);

  useEffect(() => {
    const fetchForecast = async () => {
      // Fetch data from NOAA Forecast API
      await fetchWeeklyForecast();
    }
    fetchForecast();
  }, [weeklyForecastURL]);

  async function fetchPointsData() {
    if (!userLatitude || !userLongitude){
      return
    }
    let pointsURL = `https://api.weather.gov/points/${userLatitude},${userLongitude}`;
    return callAPI(pointsURL).then(data =>
      storePointsData(data));
  }

  async function fetchWeeklyForecast() {
    if (!weeklyForecastURL) {
      console.log("NO WEEKLY FORECAST URL...")
      return
    }
    console.log("WE HAVE A WEEKLY FORECAST URL!!!")
    return callAPI(weeklyForecastURL).then(data =>
      storeWeeklyForecastData(data));
  }

  function storePointsData(pointsData: Points) {
    setUserCity(pointsData.properties.relativeLocation.properties.city);
    setUserState(pointsData.properties.relativeLocation.properties.state);
    setWeeklyForecastURL(pointsData.properties.forecast);
    console.log(`Weekly Forecast URL: ${pointsData.properties.forecast}`);
    console.log(`Stored Weekly Forecast URL: ${weeklyForecastURL}`)
    console.log(pointsData);
  }

  function storeWeeklyForecastData(weeklyForecastData: WeeklyForecast) {
    setUserElevation(weeklyForecastData.properties.elevation);
    let forecast = weeklyForecastData.properties.periods;
    setForecast(forecast);
    console.log(weeklyForecastData);
  }

  async function callAPI(url: string, options={}) {
    return fetch(url, options).then(res => {
      return res.json();
    });
  }

  return (
    <div className="weather">
      <p>{userCity}, {userState}</p>
      <p>Latitude: {userLatitude}</p>
      <p>Longitude: {userLongitude}</p>
      <p>Elevation: {userElevation?.value}{userElevation?.unitCode.replace("wmoUnit:", "")}</p>
      <div className="flex flex-row justify">
        {forecast.map(period => (
          <div>
            <img key={period.number} src={period.icon} />
            <ul>
              <li>{period.temperature}&deg;{period.temperatureUnit}</li>
              <li>{period.dewpoint.value?.toFixed(2)}&deg;{period.dewpoint.unitCode.replace('wmoUnit:deg', '')}</li>
              <li>Hum: {period.relativeHumidity.value}%</li>
              <li>Wind: {period.windSpeed}{period.windDirection}</li>
              <li>{period.detailedForecast}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWeatherApp;