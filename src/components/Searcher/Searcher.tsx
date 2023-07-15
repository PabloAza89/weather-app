import { useEffect, useState } from "react";
import { Box, Button, TextField/* , Tooltip */ } from '@mui/material';
import * as s from '../../styles/SearcherSX';
import { useDispatch, useSelector } from 'react-redux';
//import { makeStyles } from '@material-ui/styles';
//import { makeStyles } from '@mui/material/styles';
//import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import Tooltip from '@mui/joy/Tooltip';
import { addCity } from '../../actions';

export default function SearchBar() {

  const dispatch = useDispatch()

  const [city, setCity] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(false); // 3 to test..

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

  const cities = useSelector((state: {cities:citiesI[]}) => state.cities)
  const darkMode = useSelector((state: {darkMode:boolean}) => state.darkMode)
  const english = useSelector((state: {english:boolean}) => state.english)
  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const medPort = useSelector((state: {medPort:boolean}) => state.medPort)
  const medLand = useSelector((state: {medLand:boolean}) => state.medLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  const larLand = useSelector((state: {larLand:boolean}) => state.larLand)

  function onSearch(city:string) {
    fetch( `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER}` )
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
          latitude: res.coord.lat,
          longitude: res.coord.lon,
        };
        if (cities.filter(e => e.id === newCity.id).length === 0) dispatch(addCity([...cities, newCity]))
        else alert("City already exists!");
      } else alert("City not found!");
    });
  }

  useEffect(() => {
    if (cities.length >= 3) setDisabled(true)
    else setDisabled(false)
  },[cities])

  console.log("ABC", cities.length)

  return (
    <Box
      component="form"
      onSubmit={(e: any) => { e.preventDefault(); onSearch(city) }}
      sx={s.background}
    >
      <Tooltip
        
        disableHoverListener={false}
        disableFocusListener={false}

       /*  title={
          <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'red',
            maxWidth: 320,
            justifyContent: 'center',
            p: 1,
          }}
        >123123123</Box>
        } */

        /* title={"123123123"} */
        //placement="top-end"
        //variant="outlined"
        //arrow

        /*  title={
          <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: 320,
            background: 'red',
            justifyContent: 'center',
            p: 1,
            gap: 1,
          }}
        >123123123</Box>
        } */
        //component="div"
        title="ASDASD123123"
        /* sx={{ background: 'yellow', backgroundColor: 'red' }} */
        sx={{ background: 'yellow' }}
        

        /* sx={{ backgroundColor: 'yellow' }} */

      >
        <TextField
          disabled={disabled}
          type="text"
          autoComplete='off'
          placeholder={ english ? `Search city...` : `Buscar ciudad...`}
          onFocus={() => setCity("")}
          value={city}
          sx={s.input}
          InputProps={{ style: s.inputStyleProps() }}
          onChange={(e) => setCity(e.target.value)}
        />
      </Tooltip>
      <Button
        disabled={disabled}
        sx={s.button}
        type="submit"
      >{ english ? `ADD CITY!` : `AGREGAR CIUDAD!` }</Button>
    </Box>
  );
}