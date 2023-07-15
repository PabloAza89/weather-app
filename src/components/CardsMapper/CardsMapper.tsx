import { useSelector } from 'react-redux';
import * as s from '../../styles/CardsMapperSX';
import { Box, Typography, Button } from '@mui/material';
import Card from '../Card/Card';

export default function Cards() {

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

  const cities = useSelector((state: {cities: citiesI[]}) => state.cities)

  return (
    <Box sx={s.background}>
      {cities.map((c) => 
        <Card
          key={c.id}
          id={c.id}
          max={c.max}
          min={c.min}
          name={c.name}
          img={c.img}
          country={c.country}
        />
      )}
    </Box>
  );
}