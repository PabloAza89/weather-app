import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom'

export default function Card ({min, max, name, img, onClose, id, country, lang}) {
    console.log("LANG", lang)
    
    if (country === "AF" & lang === 1) country = "(AFGANISTAN)"
    if (country === "AF") country = "(AFGHANISTAN)"
    if (country === "AR") country = "(ARGENTINA)"
    if (country === "BO") country = "(BOLIVIA)"
    if (country === "BR" & lang === 1) country = "(BRASIL)"
    if (country === "BR") country = "(BRAZIL)"
    if (country === "CA") country = "(CANADA)"
    if (country === "CL") country = "(CHILE)"
    if (country === "CO") country = "(COLOMBIA)"
    if (country === "CR") country = "(COSTA RICA)"
    if (country === "CU") country = "(CUBA)"
    if (country === "DO" & lang === 1) country = "(REPUBLICA DOMINICANA)"
    if (country === "DO") country = "(DOMINICAN REPUBLIC)"
    if (country === "EC") country = "(ECUADOR)"
    if (country === "ES" & lang === 1) country = "(ESPAÑA)"
    if (country === "ES") country = "(SPAIN)"
    if (country === "FK" & lang === 1) country = "(ISLAS MALVINAS)"
    if (country === "FK") country = "(FALKLAND ISLANDS)"
    if (country === "GB" & lang === 1) country = "(REINO UNIDO)"
    if (country === "GB") country = "(UNITED KINGDOM)"
    if (country === "GN") country = "(GUINEA)"
    if (country === "PE") country = "(PERU)"
    if (country === "PH" & lang === 1) country = "(FILIPINAS)"
    if (country === "PH") country = "(PHILIPPINES)"
    if (country === "PY") country = "(PARAGUAY)"
    if (country === "RO"  & lang === 1) country = "(RUMANIA)"
    if (country === "RO") country = "(ROMANIA)"
    if (country === "US" & lang === 1) country = "(ESTADOS UNIDOS)"
    if (country === "US") country = "(USA)"
    if (country === "UY") country = "(URUGUAY)"
    if (country === "VE") country = "(VENEZUELA)"
  
    return (
      <div class="card">
        <div id="closeIcon" className="row">
            <button onClick={onClose} className="btn btn-sm btn-danger">X</button>
        </div>
        <div className="card-body">
          <Link to={`/city/${id}`} >
          <h3 className="card-title">{name}</h3>
          </Link> 
          <p className="card-country">{country}</p>
          <div className="row">
            <div id="minAlign" className="col-sm-4 col-md-4 col-lg-4">
              <h5>Min</h5>
              <h5>{min}°</h5>
            </div>
            <div id="minAlign" className="col-sm-4 col-md-4 col-lg-4">
              <h5>Max</h5>
              <h5>{max}°</h5>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
};
