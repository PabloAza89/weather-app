import React from 'react';

// export default function Card(props) {
//   // acá va tu código
//   return  (
//   <div>
//     <tr>
//       <th colSpan="2">
//         {props.name}
//          
//       </th>
//     </tr>
    
    
        
//           <tr>
//             <td>
//                   Min    
//                   Max    
              
//             </td>
//             <tr>   
//       <img className="wheather-photo" src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt={"weatherIcon"}/>
//     </tr>
//           </tr>
//           <tr>
//                 {Math.round((props.max-32)*(5/9))}º     
//                 {Math.round((props.min-32)*(5/9))}º     
//           </tr>
    
       
   
// </div>)
// };

// export default function Card(props) {
//   // acá va tu código
//   let {img, max, min, name, onClose} = props;
//   return <div>
    
//     <div>
//       <h1>{name}</h1>
//       <button onClick = {onClose}> X </button>
//       <div>
//         <h3>Temp Min</h3>
//         <p>{min}</p>
//       </div>
//       <div>
//         <h3>Temp Max</h3>
//         <p>{max}</p>
//       </div>
//     </div> 
//     <img className="wheather-photo" src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt={"weatherIcon"}/>
//   </div>
// };

class Card extends React.Component {
  render() {
    return(
        <div>
          <h1>{this.props.name}</h1>
          <button onClick = {this.props.onClose}> X </button>
          <div>
            <h3>Temp Min</h3>
            <p>{this.props.min}</p>
          </div>
          <div>
            <h3>Temp Max</h3>
            <p>{this.props.max}</p>
          </div>
        </div> 
        //<img className="wheather-photo" src={`http://openweathermap.org/img/wn/${this.props.img}@2x.png`} alt={"weatherIcon"}/>
        
    )  
  }
}