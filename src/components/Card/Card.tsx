import "./Card.css";
import { Link } from "react-router-dom";
import { Box, Typography, Button } from '@mui/material';
import * as s from '../../styles/CardSX';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCity } from '../../actions';
//import countries from '../../styles/Countries.JSON';

interface cardI {
  min: number,
  max: number,
  name: string,
  img: string,
  /* onClose: any, */
  id: number,
  country: string,
}

const Card = ({ min, max, name, img, /* onClose, */ id, country }: cardI) => {

  const dispatch = useDispatch()

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

  //console.log("A VER", countries.AF.toString())

  // interface enEsI {
  //   en: string,
  //   es: string,
  // }

  // interface countryCodeI {
  //   [key: string]: enEsI
  // }

    // function onClose(id:any) {
    //     setCities((oldCities:any) => oldCities.filter((c:any) => c.id !== id));
    // }

    //arr.map(e => e.id).indexOf(13)

    function cityDeleter(id:number) {
      /* setCities((oldCities:any) => oldCities.filter((c:any) => c.id !== id)); */
      //cities.length
      //cities.map(e => e.id).indexOf(id)
      dispatch(deleteCity(id))

    }


    

  return (
    <Box sx={s.background}>
      {/* <Button sx={s.button} onClick={onClose(id)} >X</Button> */}
      {/* <Button sx={s.button} onClick={() => console.log(id)} >X</Button> */}
      <Button sx={s.button} onClick={() => cityDeleter(id)} >X</Button>
      <div className="card-body">
          <Link to={`/weather-app/city/${id}`}>
              <h3 className="card-title">{name}</h3>
          </Link>
          <p className="card-country">{country}</p>
          <div className="row">
              <div
                  id="minAlign"
                  className="col-sm-4 col-md-4 col-lg-4"
              >
                  <h5>Min</h5>
                  <h5>{Math.round(min * 10) / 10} °C</h5>
              </div>
              <div
                  id="minAlign"
                  className="col-sm-4 col-md-4 col-lg-4"
              >
                  <h5>Max</h5>
                  <h5>{Math.round(max * 10) / 10} °C</h5>
              </div>
              <div id="iconAlign" className="col-sm-4 col-md-4 col-lg-4">
                  <img
                      className="iconoClima"
                      src={
                          "https://openweathermap.org/img/wn/" +
                          img +
                          "@2x.png"
                      }
                      width="80"
                      height="80"
                      alt=""
                  />
              </div>
          </div>
      </div>
    </Box>
  );
    
}

export default Card
