import { useState } from "react";
import "./Searcher.css";
import { Box, FormControl, Input, Button, TextField } from '@mui/material';
import * as s from '../../styles/SearcherSX';
import { useDispatch, useSelector } from 'react-redux';
import {
  addCity
} from '../../actions';

export default function SearchBar() {

  const dispatch = useDispatch()

  const apiKey = "996c7f0e4e0b0953dddafed0a123ef9c&units=metric";

  //const [cities, setCities] = useState<arrayI[]>([]);
  const [city, setCity] = useState("");

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

  const cities = useSelector((state: {cities:citiesI[]}) => state.cities)
  const darkMode = useSelector((state: {darkMode:boolean}) => state.darkMode)
  const english = useSelector((state: {english:boolean}) => state.english)
  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const medPort = useSelector((state: {medPort:boolean}) => state.medPort)
  const medLand = useSelector((state: {medLand:boolean}) => state.medLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  const larLand = useSelector((state: {larLand:boolean}) => state.larLand)

  interface arrayI {
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


  function onSearch(ciudad:string) {
    fetch( `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}` )
    .then((r) => r.json())
    .then((res) => {
      if (res.main !== undefined) {
        const newCity = {
          id: res.id,
          name: res.name,
          country: res.sys.country,
          min: Math.round(res.main.temp_min),
          max: Math.round(res.main.temp_max),
          wind: res.wind.speed,
          temp: res.main.temp,
          weather: res.weather[0].main,
          img: res.weather[0].icon,
          clouds: res.clouds.all,
          latitud: res.coord.lat,
          longitud: res.coord.lon,
        };
        //setCities(() => [...cities, ciudad]);
        //dispatch(addCity([...cities, ciudad]))
        dispatch(addCity([...cities, newCity]))
      } else alert("City not found!");
    });
  }

  console.log(cities)

  return (
    <Box
      component="form"
      onSubmit={(e: any) => { e.preventDefault(); onSearch(city) }}
    >
      <TextField
        type="text"
        placeholder={ english ? `Search city...` : `Buscar ciudad...`}
        onFocus={() => setCity("")}
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <Button sx={s.button} type="submit">{ english ? `ADD CITY!` : `AGREGAR CIUDAD!` }</Button>
    </Box>
  );
}