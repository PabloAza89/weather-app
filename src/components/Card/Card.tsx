import { Link } from "react-router-dom";
import { Box, Typography, Button } from '@mui/material';
import * as s from '../../styles/CardSX';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCity } from '../../actions';
import countriesJSON from '../../json/Countries.json';

interface cardI {
  min: number,
  max: number,
  name: string,
  img: string,
  id: number,
  country: string,
}

const Card = ({ min, max, name, img, id, country }: cardI) => {

  interface EnEsI {
    en: string,
    es: string
  }

  interface countriesCodeI {
    [key: string]: EnEsI
  }

  const countryCode = countriesJSON as countriesCodeI
  const english = useSelector((state: {english:boolean}) => state.english)
  const darkMode = useSelector((state: {darkMode:boolean}) => state.darkMode)
  const dispatch = useDispatch()

  function cityDeleter(id:number) {
    dispatch(deleteCity(id))
  }

  return (
    <Box sx={s.background({ darkMode })}>
      <Button sx={s.button} onClick={() => cityDeleter(id)}>X</Button>
      <Link style={s.cityNameLink()} to={`/cityDetail/${id}`}>
        <Typography sx={s.cityName({ darkMode })}>{name}</Typography>
      </Link>
      <Typography sx={s.countryName}>{ english ? countryCode[country].en : countryCode[country].es }</Typography>
      <Box sx={s.minMaxIcon}>
        <Box sx={s.minMax}>
          <Box>Min</Box>
          { english ? `${Math.round((min * (9 / 5) + 32) * 10) / 10} °F` : `${Math.round(min * 10) / 10} °C` }
        </Box>
        <Box sx={s.minMax}>
          <Box>Max</Box>
          { english ? `${Math.round((max * (9 / 5) + 32) * 10) / 10} °F` : `${Math.round(max * 10) / 10} °C` }
        </Box>
        <Box
          sx={s.minMax}
          component="img"
          src={`https://openweathermap.org/img/wn/${img}@2x.png`}
        />
      </Box>
    </Box>
  );
}

export default Card
