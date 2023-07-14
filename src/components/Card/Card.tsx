import "./Card.css";
import { Link } from "react-router-dom";
import { Box, Typography, Button } from '@mui/material';
import * as s from '../../styles/CardSX';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCity } from '../../actions';
import countriesJSON from '../../styles/Countries.json';

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
  const dispatch = useDispatch()

  function cityDeleter(id:number) {
    dispatch(deleteCity(id))
  }

  //console.log("country", country)

  return (
    <Box sx={s.background}>
      <Button sx={s.button} onClick={() => cityDeleter(id)}>X</Button>
      <Link to={`/cityDetail/${id}`}>
        <Typography>{name}</Typography>
      </Link>
      <Typography>{ english ? countryCode[country].en : countryCode[country].es }</Typography>
      <Box>
        <Typography>
          Min
          { english ? `${Math.round((min * (9 / 5) + 32) * 10) / 10} °F` : `${Math.round(min * 10) / 10} °C` }
        </Typography>
        <Typography>
          Max
          { english ? `${Math.round((max * (9 / 5) + 32) * 10) / 10} °F` : `${Math.round(max * 10) / 10} °C` }
        </Typography>
        <Box
          component="img"
          src={`https://openweathermap.org/img/wn/${img}@2x.png`}
        />
      </Box>
    </Box>
  );
}

export default Card
