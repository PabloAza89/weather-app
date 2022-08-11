import React from 'react';
import css from './SearchBar.module.css'

export default function SearchBar(props) {
  // const search = () => {
  //   const inputSearch = document.querySelector('#inputSearch');
  //   props.onSearch(inputSearch.value);
  // };

  return (
    <div className = { css.main }>
      <div>
        <input type='text' placeholder='Ciudad...' className = { css.input }/>
      </div>
      <div>
        <button className = { css.button } onClick={() => props.onSearch("Buscando ciudad..")}> Agregar </button>          
      </div>
      {/* <div>
        <input id='inputSearch' type='text' placeholder='City...'/>
        <button onClick={search}> SEARCH </button>
      </div> */}
    </div>
  );
};