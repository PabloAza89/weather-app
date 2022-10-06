import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom'

export default function Card ({min, max, name, img, onClose, id}) {
    return (
      <div class="card">
        <div id="closeIcon" className="row">
            <button onClick={onClose} className="btn btn-sm btn-danger">X</button>
        </div>
        <div className="card-body">
          <Link to={`/city/${id}`} >
          <h3 className="card-title">{name}</h3>
          </Link> 
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4">
              <h5>Min</h5>
              <h5>{min}°</h5>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
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
