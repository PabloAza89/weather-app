import React from 'react';

// export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  // let weatherIcon = `http://openweathermap.org/img/wn/${props.cities.img}@2x.png`
//   let weatherIcon = `http://openweathermap.org/img/wn/02d@2x.png`
  
//   const listItems = props.cities.map((item) =>
//   <table>
    
//         <tr>
//             <th>
//               {item.name}
//             </th>
//         </tr>
//         <tr>
//             <th>
//               Min
//               Max
//               <img className="wheather-photo" src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt={"weatherIcon"}/>

//             </th>
//         </tr>
//         <tr>
//             <th>
//             {Math.round((item.main.temp_min-32)*(5/9))}º
//             {Math.round((item.main.temp_max-32)*(5/9))}º
            
//             </th>
            
//         </tr>
    
//   </table>

//   );    
//   return listItems
  
//   //return props.cities[0].name
  
    
// };

// export default function Cards({cities}) {
//   if (!cities) {
//     return <p> loading.. </p>
//   }
//   return <div>
//     {cities.map((c) => (
//       <Cards
//       key = {c.id}
//       max={c.main.temp_max}
//       min={c.main.temp_min}
//       name={c.name}
//       img={c.weather[0].icon}
//       onClose={() => alert(c.name)}
//       />
//     ))}
//   </div>
// }

class Card extends React.Component {
  render() {
    return (
      <div>
        {this.props.cities.map((c) => (
          
        )

        )}
      </div>
    )
  }
}