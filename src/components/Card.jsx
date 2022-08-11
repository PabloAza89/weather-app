import React from 'react';
import css from './Card.module.css';

// export default function Card(props) {
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

export default function Card(props) {
  // acá va tu código
  let {img, max, min, name, onClose} = props;
  return (
    <div className = { css.card }>
      <div className = { css.upper }>
        <h1 className = { css.cityName }>{name}</h1>
        <button onClick={onClose} className = { css.button }> X </button>
      </div>
      <div className = { css.lower }>
        <div className = { css.width }>
          <h3>Min</h3>
          <h4>{Math.round((min-32)*(5/9))}º</h4>
        </div>
        <div className = { css.width }>
          <h3>Max</h3>
          <h4>{Math.round((max-32)*(5/9))}º</h4>
        </div>
        <div className = { css.width }>
          <img 
          src={`http://openweathermap.org/img/wn/${img}@2x.png`}
          alt={"weatherIcon"}
          />
        </div> 
      </div>
    </div>
  );
};

// class Card extends React.Component {
//   render() {
//     return(
//       <div>
//         <h1>{this.props.name}</h1>
//         <button onClick={this.props.onClose}> X </button>
//         <div>
//           <div>
//             <h3>Temp Min</h3>
//             <p>{this.props.min}</p>
//           </div>
//           <div>
//             <h3>Temp Max</h3>
//             <p>{this.props.max}</p>
//           </div>
//         </div> 
//         <img 
//           src={`http://openweathermap.org/img/wn/${this.props.img}@2x.png`}
//           alt={"weatherIcon"}
//         />
//       </div>   
//     )  
//   }
// }

// export default Card;