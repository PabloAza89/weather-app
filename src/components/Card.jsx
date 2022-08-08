import React from 'react';

export default function Card(props) {
  // acá va tu código
  let weatherIcon = `http://openweathermap.org/img/wn/${props.img}@2x.png`
  return <div>
    Card Component
    <table>
      <tr>
          <th>
            {props.name}
          </th>
      </tr>
      <tr>
          <th>
            Min
            Max
            <img className="wheather-photo" src={weatherIcon} alt={"weatherIcon"}/>
          </th>
      </tr>
      <tr>
          <th>
          {Math.round((props.max-32)*(5/9))}º
          {Math.round((props.min-32)*(5/9))}º
          
          </th>
          
      </tr>
    </table>
  </div>
};