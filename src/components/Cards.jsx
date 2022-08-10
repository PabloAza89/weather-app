import React from 'react';
import Card from './Card.jsx'

export default function Cards({cities}) {
  if (!cities) {
    return <p> loading.. </p>
  }
  return <div>
    {cities.map((c) => (
      <Cards
      key = {c.id}
      max={c.main.temp_max}
      min={c.main.temp_min}
      name={c.name}
      img={c.weather[0].icon}
      onClose={() => alert(c.name)}
      />
    ))}
  </div>
};

// class Cards extends React.Component {
//   render() {
//     return (
//       <div>
//         {this.props.cities.map((c) => (
//           <Card
//             key = {c.id}
//             max={c.main.temp_max}
//             min={c.main.temp_min}
//             name={c.name}
//             img={c.weather[0].icon}
//             onClose={() => alert(c.name)}
//           />
//         ))}
//       </div>
//     )
//   }
// };

// export default Cards;