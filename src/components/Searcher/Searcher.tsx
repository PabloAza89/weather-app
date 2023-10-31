import { useEffect, useState } from "react";
import { Box, Button, TextField } from '@mui/material';
import * as s from '../../styles/SearcherSX';
import '../../styles/SearcherSX.css';
import { useDispatch, useSelector } from 'react-redux';
import Tooltip from '@mui/joy/Tooltip';
import Swal from 'sweetalert2';
import { addCity } from '../../actions';
import '../../styles/SearcherSX.css';

export default function SearchBar() {

  const dispatch = useDispatch()

  const currentWidth = useSelector((state: {currentWidth: number}) => state.currentWidth)

  const [city, setCity] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(false); // ENABLES SEARCH BOX

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
  const english = useSelector((state: {english:boolean}) => state.english)
  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const medPort = useSelector((state: {medPort:boolean}) => state.medPort)
  const medLand = useSelector((state: {medLand:boolean}) => state.medLand)

  const cityExists = () => {
    Swal.fire({
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      icon: 'info',
      title: english ? 'City already exists !' : 'La ciudad ya existe !',
      customClass: {
        popup:
          minPort || minLand ? 'minPort-minLand' :
          medPort || medLand ? 'medPort-medLand' :
          'larPort-larLand',
      }
    })
  }

  const cityNotFound = () => {
    Swal.fire({
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      icon: 'info',
      title: english ? 'City not found !' : 'Ciudad no encontrada !',
      customClass: {
        popup:
          minPort || minLand ? 'minPort-minLand' :
          medPort || medLand ? 'medPort-medLand' :
          'larPort-larLand',
      }
    })
  }

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
        else cityExists();
      } else cityNotFound();
    });
  }

  useEffect(() => { // available slots checker
    if (cities.length >= 15) setDisabled(true) // number of searches
    else setDisabled(false)
  },[cities])

  return (
    <Tooltip
      disableHoverListener={!disabled}
      disableFocusListener={!disabled}
      disableTouchListener={!disabled}
      enterDelay={500}
      leaveDelay={200}
      enterTouchDelay={0}
      placement="bottom-end"
      sx={s.tooltip}
      title={ english ?
        <Box>
          <Box sx={s.innerTooltipOne}>You're able to make <em>15 searches</em> at the same time..</Box>
          <Box sx={s.innerTooltipTwo}>Please delete some search, then you will have some available slots.</Box>
        </Box> :
        <Box>
          <Box sx={s.innerTooltipOne}>Estás habilitado a realizar <em>15 búsquedas</em> al mismo tiempo..</Box>
          <Box sx={s.innerTooltipTwo}>Por favor eliminá algunas búsquedas, así tenés espacio disponible.</Box>
        </Box>
      }
    >
      <Box
        component="form"
        onSubmit={(e: any) => { e.preventDefault(); onSearch(city) }}
        sx={s.background({ currentWidth })}
      >
        <TextField
          className={`inputPos`}
          disabled={disabled}
          type="text"
          autoComplete='off'
          placeholder={ english ? `Search city...` : `Buscar ciudad...`}
          onFocus={() => setCity("")}
          value={city}
          InputLabelProps={{ style: s.labelStyle() }}
          InputProps={{ style: s.inputStyleProps() }}
          sx={s.input()}
          onChange={(e) => setCity(e.target.value)}
        />
        <Button
          className={`buttonPos`}
          disabled={disabled}
          sx={s.button()}
          type="submit"
        >{ english ? `ADD CITY!` : `AGREGAR CIUDAD!` }
        </Button>
      </Box>
    </Tooltip>
  );
}