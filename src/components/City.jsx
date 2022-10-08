import React from "react";
import { useParams } from "react-router-dom";
import "./City.css";

export default function Ciudad({onFilter, lang}) {
    var params = useParams()
    //console.log(params, 'DEBUGG');
    var city = onFilter(params.ciudadId)
    //console.log(city, 'debug');
    let clima = ""
    

    if (lang === 1) {
        if (city) {

            if (city.weather === "Clouds") clima = "Nublado"
            if (city.weather === "Clear") clima = "Despejado"
            if (city.weather === "Rain") clima = "Lluvioso"
            if (city.weather === "Mist") clima = "Neblina"
            if (city.weather === "Fog") clima = "Niebla"

            return (
                <div className="ciudad">
                        <div className="container">
                            <h2>{city.name}</h2>
                            <div className="info">
                                <div>Temperatura: {Math.round(city.temp * 10) / 10} ºC</div>
                                <div>Clima: {clima}</div>
                                <div>Viento: {Math.round(city.wind * 10) / 10} Km/h</div>
                                <div>Cantidad de nubes: {city.clouds} %</div>
                                <div>Latitud: {city.latitud}º</div>
                                <div>Longitud: {city.longitud}º</div>
                            </div>
                        </div>
                </div>
            )
        } else {
            return (
                <div>
                    <h2>No hay ciudades..</h2>
                </div>
            )
        }

    } else {
       /*  if (lang === 0) min = (min * 0.621371)
        if (lang === 0) min = (min * 0.621371) */
        if (city) {
            return (
                <div className="ciudad">
                        <div className="container">
                            <h2>{city.name}</h2>
                            <div className="info">
                                <div>Temperature: {Math.round(((city.temp * (9/5)) + 32) * 10) / 10} ºF</div>
                                <div>Weather: {city.weather}</div>
                                <div>Wind: {Math.round((city.wind * 0.621371) * 10) / 10} MPH</div>
                                <div>Clouds amount: {city.clouds} %</div>
                                <div>Latitude: {city.latitud}º</div>
                                <div>Longitude: {city.longitud}º</div>
                            </div>
                        </div>
                </div>
            )
        } else {
            return (
                <div>
                    <h2>No cities..</h2>
                </div>
            )
        }

    }
    
    
}