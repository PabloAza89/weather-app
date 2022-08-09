import React from 'react';

export default function SearchBar(props) {
  // const search = () => {
  //   const inputSearch = document.querySelector('#inputSearch');
  //   props.onSearch(inputSearch.value);
  // };

  return (
    <div>
      <div>
        <input type='text' placeholder='Ciudad...'/>
        <button onClick={() => props.onSearch("Buscando ciudad..")}> BUSCAR </button>
      </div>
      {/* <div>
        <input id='inputSearch' type='text' placeholder='City...'/>
        <button onClick={search}> SEARCH </button>
      </div> */}
    </div>
  );
};