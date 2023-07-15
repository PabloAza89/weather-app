import { Box, Typography } from '@mui/material';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import * as s from '../../styles/CityDetailSX';
import countriesJSON from '../../json/Countries.json';
import weathersJSON from '../../json/Weathers.json';
import Map from "../Map/Map"

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

  const english = useSelector((state: {english:boolean}) => state.english)
  const cities = useSelector((state: {cities:citiesI[]}) => state.cities)
  const params = useParams()
  const city = cities.filter((c) => c.id === parseInt(`${params.cityId}`))[0]

  if (!city) return (
    <Box>
      { english ?
        `Sorry, this city does not exist ! Or maybe you have reloading the page.. Anyway, please, go back and find your city in the search box !` :
        `Lo siento, esta ciudad no existe ! O quizás recargaste la página.. De todas maneras, por favor, ve atras y buscá tu ciudad en el cuadro de busqueda !`
      }
    </Box>)
  else return (
    <Box sx={s.background}>
      <Typography sx={s.cityName}>{city.name}</Typography>
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
      { Map({latitude: city.latitude, longitude:city.longitude}) }
      <Box id="map" sx={s.map}></Box>
    </Box>
  )
}

export default CityDetail