/*
  Interface for NOAA Hourly Forecast API Response
  Hourly Forecast API: https://api.weather.gov/gridpoints/STO/{gridx},{gridy}/forecast/hourly
*/
import { Measurement } from "./noaa-points"

/* Hourly Forecast API Interfaces */

export interface HourlyForecast {
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
  elevation: Measurement
  periods: Period[]
}

export interface Period {
  number: number
  name: string
  startTime: string
  endTime: string
  isDaytime: boolean
  temperature: number
  temperatureUnit: string
  temperatureTrend: string | null
  probabilityOfPrecipitation: Measurement
  dewpoint: Measurement
  relativeHumidity: Measurement
  windSpeed: string
  windDirection: string
  icon: string
  shortForecast: string
  detailedForecast: string
}

/* End Hourly Forecast API Interfaces */