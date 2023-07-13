import { useState } from "react";
import "./Searcher.css";
import { useSelector } from 'react-redux';
import * as s from '../../styles/NavBarSX';

export default function SearchBar(/* {onSearch, lang} */) {
  //console.log("CC", lang)
  const [city, setCity] = useState("");

  const darkMode = useSelector((state: {darkMode:boolean}) => state.darkMode)
  const english = useSelector((state: {english:boolean}) => state.english)
  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const medPort = useSelector((state: {medPort:boolean}) => state.medPort)
  const medLand = useSelector((state: {medLand:boolean}) => state.medLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  const larLand = useSelector((state: {larLand:boolean}) => state.larLand)


    return (
      <form className="search" onSubmit={(e) => {
        e.preventDefault();
        /* onSearch(city); */
      }}>
        <input className="findAdd"
          type="text"        
          placeholder="Buscar ciudad..."
          onFocus={e => setCity("")}
          value={city}
          onChange={e => setCity(e.target.value)}
        />
        <input className="findAdd"
        type="submit" value="AGREGAR CIUDAD!" />
      </form>
    );
}