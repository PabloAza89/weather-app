import React from "react";
import { useParams } from "react-router-dom";
import "./City.css";

export default function Ciudad({onFilter}) {
    var params = useParams()
    //console.log(params, 'DEBUGG');
    var city = onFilter(params.ciudadId)
    //console.log(city, 'debug');
    
    if (city) {
        return (
            <div className="ciudad">
                    <div className="container">
                        <h2>{city.name}</h2>
                        <div className="info">
                            <div>Temperature: {city.temp} ºC</div>
                            <div>Weather: {city.weather}</div>
                            <div>Wind: {city.wind} Km/h</div>
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
                <h2>No hay ciudades..</h2>
            </div>
        )
    }
}