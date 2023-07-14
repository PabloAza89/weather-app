import { Box, Typography, Button } from '@mui/material';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import * as s from '../../styles/CityDetailSX';
import countriesJSON from '../../styles/Countries.json';
import weathersJSON from '../../styles/Weathers.json';

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
    latitud: number,
    longitud: number,
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
      <Typography>{city.name}</Typography>
      <Typography>{ english ?
        countryCode[city.country].en : countryCode[city.country].es
      }</Typography>
      <Typography>{ english ?
        `Temperature: ${Math.round(((city.temp * (9/5)) + 32) * 10) / 10} ºF` :
        `Temperatura: ${Math.round(city.temp * 10) / 10} ºF`
      }</Typography>
      <Typography>{ english ?
        `Weather: ${weathers[city.weather].en}` :
        `Clima: ${weathers[city.weather].es}`
      }</Typography>
      <Typography>{ english ?
        `Wind: ${Math.round((city.wind * 0.621371) * 10) / 10} MPH` :
        `Viento: ${Math.round(city.wind * 10) / 10} MPH`
      }</Typography>
      <Typography>{ english ?
        `Clouds amount: ${city.clouds} %` :
        `Cantidad de nubes: ${city.clouds} %`
      }</Typography>
    </Box>
  )
}

export default CityDetail