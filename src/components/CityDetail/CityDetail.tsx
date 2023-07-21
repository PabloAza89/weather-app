import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import * as s from '../../styles/CityDetailSX';
import countriesJSON from '../../json/Countries.json';
import weathersJSON from '../../json/Weathers.json';
import Map from "../Map/Map"
import CityNotFound from "../CityNotFound/CityNotFound"

function CityDetail() {

  interface EnEsI {
    en: string,
    es: string
  }

  interface countriesCodeI {
    [key: string]: EnEsI
  }

  const countryCode = countriesJSON as countriesCodeI

  interface weathersEnEsI {
    en: string,
    es: string
  }

  interface weathersI {
    [key: string]: weathersEnEsI
  }

  const weathers = weathersJSON as weathersI

  interface citiesI {
    id: number,
    name: string,
    country: string,
    min: number,
    max: number,
    wind: number,
    temp: number,
    weather: string,
    img: string,
    clouds: number,
    latitude: number,
    longitude: number,
  }

  const width = useSelector((state: {width:number}) => state.width)
  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const medPort = useSelector((state: {medPort:boolean}) => state.medPort)
  const medLand = useSelector((state: {medLand:boolean}) => state.medLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  const larLand = useSelector((state: {larLand:boolean}) => state.larLand)
  const english = useSelector((state: {english:boolean}) => state.english)
  const darkMode = useSelector((state: {darkMode:boolean}) => state.darkMode)
  const cities = useSelector((state: {cities:citiesI[]}) => state.cities)
  const params = useParams()
  const city = cities.filter((c) => c.id === parseInt(`${params.cityId}`))[0]

  if (!city) return (
    <CityNotFound />)
  else return (
    <Box sx={s.background}>
      <Typography sx={s.cityName({ darkMode })}>{city.name}</Typography>
      <Typography sx={s.countryName}>{ english ?
        countryCode[city.country].en : countryCode[city.country].es
      }</Typography>
      <Typography sx={s.tempWeatherWindClouds}>{ english ?
        `Temperature: ${Math.round(((city.temp * (9/5)) + 32) * 10) / 10} ºF` :
        `Temperatura: ${Math.round(city.temp * 10) / 10} ºF`
      }</Typography>
      <Typography sx={s.tempWeatherWindClouds}>{ english ?
        `Weather: ${weathers[city.weather].en}` :
        `Clima: ${weathers[city.weather].es}`
      }</Typography>
      <Typography sx={s.tempWeatherWindClouds}>{ english ?
        `Wind: ${Math.round((city.wind * 0.621371) * 10) / 10} MPH` :
        `Viento: ${Math.round(city.wind * 10) / 10} MPH`
      }</Typography>
      <Typography sx={s.tempWeatherWindClouds}>{ english ?
        `Clouds amount: ${city.clouds} %` :
        `Cantidad de nubes: ${city.clouds} %`
      }</Typography>
      <Map latitude={city.latitude} longitude={city.longitude}/>
    </Box>
  )
}

export default CityDetail