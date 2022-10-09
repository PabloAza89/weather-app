import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

export default function Card({
    min,
    max,
    name,
    img,
    onClose,
    id,
    country,
    lang,
}) {
    //console.log("LANG", lang)

    if ((country === "AF") & (lang === 1)) country = "(AFGANISTAN)";
    if ((country === "AR") & (lang === 1)) country = "(ARGENTINA)";
    if ((country === "AX") & (lang === 1)) country = "(ISLAS ALAND)";
    if ((country === "AU") & (lang === 1)) country = "(AUSTRALIA)";
    if ((country === "BE") & (lang === 1)) country = "(BELGIUM)";
    if ((country === "BO") & (lang === 1)) country = "(BOLIVIA)";
    if ((country === "BR") & (lang === 1)) country = "(BRASIL)";
    if ((country === "CA") & (lang === 1)) country = "(CANADA)";
    if ((country === "CL") & (lang === 1)) country = "(CHILE)";
    if ((country === "CO") & (lang === 1)) country = "(COLOMBIA)";
    if ((country === "CR") & (lang === 1)) country = "(COSTA RICA)";
    if ((country === "CU") & (lang === 1)) country = "(CUBA)";
    if ((country === "CZ") & (lang === 1)) country = "(REPUBLICA CHECA)";
    if ((country === "DK") & (lang === 1)) country = "(DINAMARCA)";
    if ((country === "DE") & (lang === 1)) country = "(ALEMANIA)";
    if ((country === "DO") & (lang === 1)) country = "(REPUBLICA DOMINICANA)";
    if ((country === "EC") & (lang === 1)) country = "(ECUADOR)";
    if ((country === "EE") & (lang === 1)) country = "(ESTONIA)";
    if ((country === "EG") & (lang === 1)) country = "(EGIPTO)";
    if ((country === "ES") & (lang === 1)) country = "(ESPAÑA)";
    if ((country === "FI") & (lang === 1)) country = "(FINLANDIA)";
    if ((country === "FJ") & (lang === 1)) country = "(FIJI)";
    if ((country === "FK") & (lang === 1)) country = "(ISLAS MALVINAS)";
    if ((country === "FR") & (lang === 1)) country = "(FRANCIA)";
    if ((country === "GB") & (lang === 1)) country = "(REINO UNIDO)";
    if ((country === "GN") & (lang === 1)) country = "(GUINEA)";
    if ((country === "GR") & (lang === 1)) country = "(GRECIA)";
    if ((country === "GT") & (lang === 1)) country = "(GUATEMALA)";
    if ((country === "HN") & (lang === 1)) country = "(HONDURAS)";
    if ((country === "HK") & (lang === 1)) country = "(HONG KONG)";
    if ((country === "HU") & (lang === 1)) country = "(HUNGRIA)";
    if ((country === "HR") & (lang === 1)) country = "(CROACIA)";
    if ((country === "HT") & (lang === 1)) country = "(HAITI)";
    if ((country === "ID") & (lang === 1)) country = "(INDONESIA)";
    if ((country === "IN") & (lang === 1)) country = "(INDIA)";
    if ((country === "IT") & (lang === 1)) country = "(ITALIA)";
    if ((country === "PE") & (lang === 1)) country = "(PERU)";
    if ((country === "PH") & (lang === 1)) country = "(FILIPINAS)";
    if ((country === "PY") & (lang === 1)) country = "(PARAGUAY)";
    if ((country === "RO") & (lang === 1)) country = "(RUMANIA)";
    if ((country === "SV") & (lang === 1)) country = "(EL SALVADOR)";
    if ((country === "US") & (lang === 1)) country = "(ESTADOS UNIDOS)";
    if ((country === "UY") & (lang === 1)) country = "(URUGUAY)";
    if ((country === "VE") & (lang === 1)) country = "(VENEZUELA)";

    if ((country === "AF") & (lang === 0)) country = "(AFGHANISTAN)";
    if ((country === "AR") & (lang === 0)) country = "(ARGENTINA)";
    if ((country === "AX") & (lang === 0)) country = "(ALAND ISLANDS)";
    if ((country === "AU") & (lang === 0)) country = "(AUSTRALIA)";
    if ((country === "BE") & (lang === 0)) country = "(BELGICA)";
    if ((country === "BO") & (lang === 0)) country = "(BOLIVIA)";
    if ((country === "BR") & (lang === 0)) country = "(BRAZIL)";
    if ((country === "CA") & (lang === 0)) country = "(CANADA)";
    if ((country === "CL") & (lang === 0)) country = "(CHILE)";
    if ((country === "CO") & (lang === 0)) country = "(COLOMBIA)";
    if ((country === "CR") & (lang === 0)) country = "(COSTA RICA)";
    if ((country === "CU") & (lang === 0)) country = "(CUBA)";
    if ((country === "CZ") & (lang === 0)) country = "(CZECH REPUBLIC)";
    if ((country === "DK") & (lang === 0)) country = "(DENMARK)";
    if ((country === "DE") & (lang === 0)) country = "(GERMANY)";
    if ((country === "DO") & (lang === 0)) country = "(DOMINICAN REPUBLIC)";
    if ((country === "EC") & (lang === 0)) country = "(ECUADOR)";
    if ((country === "EE") & (lang === 0)) country = "(ESTONIA)";
    if ((country === "EG") & (lang === 0)) country = "(EGYPT)";
    if ((country === "ES") & (lang === 0)) country = "(SPAIN)";
    if ((country === "FI") & (lang === 0)) country = "(FINLAND)";
    if ((country === "FJ") & (lang === 0)) country = "(FIJI)";
    if ((country === "FK") & (lang === 0)) country = "(FALKLAND ISLANDS)";
    if ((country === "FR") & (lang === 0)) country = "(FRANCE)";
    if ((country === "GB") & (lang === 0)) country = "(UNITED KINGDOM)";
    if ((country === "GN") & (lang === 0)) country = "(GUINEA)";
    if ((country === "GR") & (lang === 0)) country = "(GREECE)";
    if ((country === "GT") & (lang === 0)) country = "(GUATEMALA)";
    if ((country === "HN") & (lang === 0)) country = "(HONDURAS)";
    if ((country === "HK") & (lang === 0)) country = "(HONG KONG)";
    if ((country === "HU") & (lang === 0)) country = "(HUNGARY)";
    if ((country === "HR") & (lang === 0)) country = "(CROATIA)";
    if ((country === "HT") & (lang === 0)) country = "(HAITI)";
    if ((country === "ID") & (lang === 0)) country = "(INDONESIA)";
    if ((country === "IN") & (lang === 0)) country = "(INDIA)";
    if ((country === "IT") & (lang === 0)) country = "(ITALY)";
    if ((country === "PE") & (lang === 0)) country = "(PERU)";
    if ((country === "PH") & (lang === 0)) country = "(PHILIPPINES)";
    if ((country === "PY") & (lang === 0)) country = "(PARAGUAY)";
    if ((country === "RO") & (lang === 0)) country = "(ROMANIA)";
    if ((country === "SV") & (lang === 0)) country = "(EL SALVADOR)";
    if ((country === "US") & (lang === 0)) country = "(USA)";
    if ((country === "UY") & (lang === 0)) country = "(URUGUAY)";
    if ((country === "VE") & (lang === 0)) country = "(VENEZUELA)";
    

    if (lang === 1) {
        return (
            <div className="card">
                <div id="closeIcon" className="row">
                    <button onClick={onClose} className="btn btn-sm btn-danger">
                        X
                    </button>
                </div>
                <div className="card-body">
                    <Link to={`/city/${id}`}>
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
                        <div className="col-sm-4 col-md-4 col-lg-4">
                            <img
                                className="iconoClima"
                                src={
                                    "http://openweathermap.org/img/wn/" +
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
            </div>
        );
    } else {
        return (
            <div className="card">
                <div id="closeIcon" className="row">
                    <button onClick={onClose} className="btn btn-sm btn-danger">
                        X
                    </button>
                </div>
                <div className="card-body">
                    <Link to={`/city/${id}`}>
                        <h3 className="card-title">{name}</h3>
                    </Link>
                    <p className="card-country">{country}</p>
                    <div className="row">
                        <div
                            id="minAlign"
                            className="col-sm-4 col-md-4 col-lg-4"
                        >
                            <h5>Min</h5>
                            <h5>
                                {Math.round((min * (9 / 5) + 32) * 10) / 10} °F
                            </h5>
                        </div>
                        <div
                            id="minAlign"
                            className="col-sm-4 col-md-4 col-lg-4"
                        >
                            <h5>Max</h5>
                            <h5>
                                {Math.round((max * (9 / 5) + 32) * 10) / 10} °F
                            </h5>
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-4">
                            <img
                                className="iconoClima"
                                src={
                                    "http://openweathermap.org/img/wn/" +
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
            </div>
        );
    }
}
