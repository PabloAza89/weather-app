import React from "react";
import { useParams } from "react-router-dom";
import "./City.css";



export default function Ciudad({onFilter, lang}) {
    var params = useParams()
    //console.log(params, 'DEBUGG');
    var city = onFilter(params.ciudadId)
    //console.log(city, 'debug');
    let clima = ""
    let pais = ""
    console.log("AA", lang)

    
       
    

    if (lang === 1) {
        if (city) {

            if (city.weather === "Clouds") clima = "Nublado"
            if (city.weather === "Clear") clima = "Despejado"
            if (city.weather === "Rain") clima = "Lluvioso"
            if (city.weather === "Mist") clima = "Neblina"
            if (city.weather === "Fog") clima = "Niebla" 

            if (city.country === "AF" ) pais = "(AFGANISTAN)"
    
    if (city.country === "AR") pais = "(ARGENTINA)"
    if (city.country === "AX" ) pais = "(ISLAS ALAND)"
    if (city.country === "AU" ) pais = "(AUSTRALIA)"
    if (city.country === "BO") pais = "(BOLIVIA)"
    if (city.country === "BR" ) pais = "(BRASIL)"
    if (city.country === "CA") pais = "(CANADA)"
    if (city.country === "CL") pais = "(CHILE)"
    if (city.country === "CO") pais = "(COLOMBIA)"
    if (city.country === "CR") pais = "(COSTA RICA)"
    if (city.country === "CU") pais = "(CUBA)"
    if (city.country === "DO" ) pais = "(REPUBLICA DOMINICANA)"
    if (city.country === "EC") pais = "(ECUADOR)"
    if (city.country === "ES") pais = "(ESPAÑA)"
    if (city.country === "FK" ) pais = "(ISLAS MALVINAS)"
    if (city.country === "GB" ) pais = "(REINO UNIDO)"
    if (city.country === "GN") pais = "(GUINEA)"
    if (city.country === "IT" ) pais = "(ITALIA)"
    if (city.country === "PE") pais = "(PERU)"
    if (city.country === "PH" ) pais = "(FILIPINAS)"
    if (city.country === "PY") pais = "(PARAGUAY)"
    if (city.country === "RO"  ) pais = "(RUMANIA)"
    if (city.country === "US" ) pais = "(ESTADOS UNIDOS)"
    if (city.country === "UY") pais = "(URUGUAY)"
    if (city.country === "VE") pais = "(VENEZUELA)"

            return (
                <div className="ciudad">
                        <div className="container">
                            <h2>{city.name}</h2>
                            <p className="card-country">{pais}</p>
                            <div className="info">
                                <div>Temperatura: {Math.round(city.temp * 10) / 10} ºC</div>
                                <div>Clima: {clima}</div>
                                <div>Viento: {Math.round(city.wind * 10) / 10} Km/h</div>
                                <div>Cantidad de nubes: {city.clouds} %</div>
                                
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
    
        if (city) {

            if (city.country === "AU" ) pais = "(AUSTRALIA)"
            if (city.country === "ES") pais = "(SPAIN)"
            if (city.country === "AF") pais = "(AFGHANISTAN)"
            if (city.country === "AX" ) pais = "(ALAND ISLANDS)"
            if (city.country === "BR") pais = "(BRAZIL)"
            if (city.country === "DO") pais = "(DOMINICAN REPUBLIC)"
            if (city.country === "FK") pais = "(FALKLAND ISLANDS)"
            if (city.country === "GB") pais = "(UNITED KINGDOM)"
            if (city.country === "IT" ) pais = "(ITALY)"
            if (city.country === "PH") pais = "(PHILIPPINES)"
            if (city.country === "RO") pais = "(ROMANIA)"
            if (city.country === "US") pais = "(USA)"
            if (city.country === "UY") pais = "(URUGUAY)"
            if (city.country === "VE") pais = "(VENEZUELA)"



            return (
                <div>
                    <div className="ciudad">
                            <div className="container">
                                <h2>{city.name}</h2>
                                <p className="card-country">{pais}</p>
                                <div className="info">
                                    <div>Temperature: {Math.round(((city.temp * (9/5)) + 32) * 10) / 10} ºF</div>
                                    <div>Weather: {city.weather}</div>
                                    <div>Wind: {Math.round((city.wind * 0.621371) * 10) / 10} MPH</div>
                                    <div>Clouds amount: {city.clouds} %</div>
                                   
                                </div>
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