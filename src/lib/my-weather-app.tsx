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
    <div className="weather min-h-[calc(100vh-60px)] h-full m-auto p-10 max-w-[850px]">
      <div className="w-full justify-center text-center">
        <h3>{userCity}, {userState}</h3>
      </div>
      <div className="w-full justify-center text-center">
        {userLatitude}, {userLongitude}
      </div>
      <div className="w-full justify-center text-center">Elevation: {userElevation?.value} {userElevation?.unitCode.replace("wmoUnit:", "")}</div>
      
      <div className="grid-cols-2 w-full border">
        {forecast.map(period => (
          <div className="border">
          <div className="flex w-full border" key={`${period.number}div`}>
            <div>
              <img className="max-h-[100px] max-w-[100px]" key={`${period.number}icon`} src={period.icon} />
            </div>
            <div className="w-full border">
              <ul key={`${period.number}list`}>
                <li key={`${period.number}temp`}>{period.temperature}&deg;{period.temperatureUnit}</li>
                <li key={`${period.number}dew`}>{period.dewpoint.value?.toFixed(2)}&deg;{period.dewpoint.unitCode.replace('wmoUnit:deg', '')}</li>
                <li key={`${period.number}hum`}>Hum: {period.relativeHumidity.value}%</li>
                <li key={`${period.number}wind`}>Wind: {period.windSpeed} {period.windDirection}</li>
              </ul>
            </div>
          </div>
            <div>
              <p key={`${period.number}detail`}>{period.detailedForecast}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWeatherApp;