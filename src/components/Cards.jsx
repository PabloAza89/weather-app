import React from 'react';

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  
  //const numbers = props.cities[0];
  const listItems = props.cities.map((number) =>
    <li>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );       
  
    
};