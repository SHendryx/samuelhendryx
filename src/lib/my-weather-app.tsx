"use client";

import React, { useState, useEffect } from "react";
import { Points, Measurement } from '@/lib/noaa-points';
import { WeeklyForecast, Period } from "./noaa-weekly-forecast";
import Image from "next/image";

export interface Coordinates{
  latitude: number,
  longitude: number,
};

const MyWeatherApp: React.FC = () => {
  const [userLatitude, setUserLatitude] = useState<number | null>(null);
  const [userLongitude, setUserLongitude] = useState<number | null>(null);
  const [userCity, setUserCity] = useState<string>();
  const [userState, setUserState] = useState<string>();
  const [userElevation, setUserElevation] = useState<Measurement>();
  const [forecast, setForecast] = useState<Period[]>([]);
  
  useEffect(() => {
    const fetchData = async () => {
      if (!userLatitude || !userLongitude){
        await fetchGeoLocation();
      }
      await fetchForecast();

      async function fetchForecast() {
        if (!userLatitude || !userLongitude){
          return
        }
        console.log(`GeoLocation: ${userLatitude}, ${userLongitude}`)
        let pointsURL = `https://api.weather.gov/points/${userLatitude},${userLongitude}`;
        const pointsDataReq = fetch(pointsURL).then(res => res.json())
    
        pointsDataReq.then(pointsData => {
          setUserCity(pointsData.properties.relativeLocation.properties.city);
          setUserState(pointsData.properties.relativeLocation.properties.state);
          console.log(`Weekly Forecast URL: ${pointsData.properties.forecast}`);
          console.log(pointsData);
    
          return fetch(pointsData.properties.forecast);
        })
        .then(res => res.json())
        .then(weeklyForecastData => {
          setUserElevation(weeklyForecastData.properties.elevation);
          let forecast = weeklyForecastData.properties.periods;
          setForecast(forecast);
          console.log(weeklyForecastData);
        })
        .catch(reqErr => console.error(reqErr));
      }
    }
    fetchData();
  }, [userLatitude, userLongitude]);
  
  async function fetchGeoLocation() {
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
      
      <div className="grid-cols-2 w-full">
        {forecast.map(period => (
          <div className="" key={`${period.number}-outer-div`}>
          <div className="flex w-full" key={`${period.number}-inner-div`}>
            <div>
              <Image className="max-h-[100px] max-w-[100px]" src={period.icon} key={`${period.number}-icon`} width={100} height={100} alt="Forecast Icon" />
            </div>
            <div className="w-full">
              <ul key={`${period.number}-list`}>
                <li key={`${period.number}-temp`}>{period.temperature}&deg;{period.temperatureUnit}</li>
                <li key={`${period.number}-dew`}>{period.dewpoint.value?.toFixed(2)}&deg;{period.dewpoint.unitCode.replace('wmoUnit:deg', '')}</li>
                <li key={`${period.number}-hum`}>Hum: {period.relativeHumidity.value}%</li>
                <li key={`${period.number}-wind`}>Wind: {period.windSpeed} {period.windDirection}</li>
              </ul>
            </div>
          </div>
            <div>
              <p key={`${period.number}-detail`}>{period.detailedForecast}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWeatherApp;