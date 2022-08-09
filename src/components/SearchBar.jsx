import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  const inputSearch = document.querySelector('#inputSearch')
  props.onSearch(inputSearch.value)
  return <div>
    <div>
      <input type='text' placeholder='Ciudad...'/>
      <button onClick={(input.value)=>props.onSearch()}
    </div>

    <div>
      <input id='inputSearch' type='text' />
      <button onClick={search}> Search </button>
    </div>
  </div>
};