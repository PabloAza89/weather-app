import React from 'react';
import './Cards.css';

import Card from './Card.jsx';

export default function Cards({cities, onClose}) {
 
  let qq = cities.filter((value, index, self) =>
  index === self.findIndex((e) => (
    e.id === value.id
  )))
      
  return (
    <div className='cards'>
  
      {qq.map(c => <Card
          key={c.id}
          id={c.id}
          max={c.max}
          min={c.min}
          name={c.name}
          img={c.img}
          onClose={() => onClose(c.id)}
        /> )}
    </div>
  );
  
}
