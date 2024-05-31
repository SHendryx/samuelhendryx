/*
  Interface for NOAA Weekly Forecast API Response
  Hourly Forecast API: https://api.weather.gov/gridpoints/STO/{gridx},{gridy}/forecast
*/

import { Measurement } from "./noaa-points"

/* Hourly Forecast API Interfaces */

export interface WeeklyForecast {
  type: string
  geometry: Geometry
  properties: Properties
}

export interface Geometry {
  type: string
  coordinates: number[][][]
}

export interface Properties {
  updated: string
  units: string
  forecastGenerator: string
  generatedAt: string
  updateTime: string
  validTimes: string
  elevation: Elevation
  periods: Period[]
}

export interface Elevation {
  unitCode: string
  value: number
}

export interface Period {
  number: number
  name: string
  startTime: string
  endTime: string
  isDaytime: boolean
  temperature: number
  temperatureUnit: string
  temperatureTrend: any
  probabilityOfPrecipitation: Measurement
  dewpoint: Measurement
  relativeHumidity: Measurement
  windSpeed: string
  windDirection: string
  icon: string
  shortForecast: string
  detailedForecast: string
}

/* End Weekly Forecast API Interfaces */