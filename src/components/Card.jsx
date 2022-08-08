import React from 'react';

export default function Card(props) {
  // acá va tu código
  return  (
  <div>
    <tr>
      <th colSpan="2">
        {props.name}
         
      </th>
    </tr>
    
    
        
          <tr>
            <td>
                  Min    
                  Max    
              
            </td>
            <tr>   
      <img className="wheather-photo" src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt={"weatherIcon"}/>
    </tr>
          </tr>
          <tr>
                {Math.round((props.max-32)*(5/9))}º     
                {Math.round((props.min-32)*(5/9))}º     
          </tr>
    
       
   
</div>)
};