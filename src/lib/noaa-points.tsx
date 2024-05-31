/*
  Interface for NOAA Points API Response
  Points API: https://api.weather.gov/points/{latitude},{longitude}
*/

/* Points API interfaces. */

export interface Points {
  id: string;
  type: string;
  geometry: Geometry;
  properties: Properties;
};

export interface Geometry {
  type: string;
  coordinates: number[];
};

export interface Properties {
  "@id": string;
  "@type": string;
  cwa: string;
  forecastOffice: string;
  gridId: string;
  gridX: number;
  gridY: number;
  forecast: string;
  forecastHourly: string;
  forecastGridData: string;
  observationStations: string;
  relativeLocation: RelativeLocation;
  forecastZone: string;
  county: string;
  fireWeatherZone: string;
  timeZone: string;
  radarStation: string;
};

export interface RelativeLocation {
  type: string;
  geometry: Geometry;
  properties: GeneralLocation;
};

export interface GeneralLocation {
  city: string;
  state: string;
  distance: Measurement;
  bearing: Measurement;
};

export interface Measurement {
  unitCode: string;
  value: number | null;
};

/* End Points API Interfaces */