import React from 'react';
import './CardsMapper.css';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../Card/Card';
import countries from '../../styles/Countries.json';
//console.log("A VER", countries)

interface cardsI {
  /* cities: any, */
  onClose: any,
}

export default function Cards(/* {cities, onClose}: cardsI */) {

  //console.log("A VER", countries)

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
 
  // let filterRepeat = cities.filter((value:any, index:any, self:any) =>
  // index === self.findIndex((e:any) => (
  //   e.id === value.id
  // )))
      
  return (
    <div className='cards'>
  
      {/* {filterRepeat.map((c:any) => <Card */}
      {cities.map((c:any) => <Card
          key={c.id}
          id={c.id}
          max={c.max}
          min={c.min}
          name={c.name}
          img={c.img}
          country={c.country}
          /* onClose={() => onClose(c.id)} */
        /> )}
    </div>
  );
  
}
