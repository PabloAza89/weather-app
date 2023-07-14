import { useState, useEffect } from "react";
import { Box } from '@mui/material';
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import CardsMapper from "./components/CardsMapper/CardsMapper";
import { Route, Routes, useLocation, Link } from "react-router-dom";
import About from "./components/About/About";
import Language from "./components/Language/Language";
import CityDetail from "./components/CityDetail/CityDetail";
import Map from "./components/Map.jsx"
import * as s from './styles/AppSX';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCurrentWidth, setHeight, setLarLand,
  setLarPort, setMedLand, setMedPort, setMinLand,
  setMinPort, setPercentageResizedHeight, setWidth, setFullScreen
} from './actions';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    function handleResize() {
      dispatch(setWidth(window.screen.width))
      dispatch(setHeight(window.screen.height))
      dispatch(setMinPort(window.screen.width < 425 && window.matchMedia("(orientation: portrait)").matches ? true : false))
      dispatch(setMinLand(window.screen.height < 425 && !window.matchMedia("(orientation: portrait)").matches ? true : false))
      dispatch(setMedPort(window.screen.width >= 425 && window.screen.width <= 825 && window.matchMedia("(orientation: portrait)").matches ? true : false))
      dispatch(setMedLand(window.screen.height >= 425 && window.screen.height <= 825 && !window.matchMedia("(orientation: portrait)").matches ? true : false))
      dispatch(setLarPort(window.screen.width > 825 && window.matchMedia("(orientation: portrait)").matches ? true : false))
      dispatch(setLarLand(window.screen.height > 825 && !window.matchMedia("(orientation: portrait)").matches ? true : false))
      dispatch(setCurrentWidth(window.innerWidth))
      dispatch(setPercentageResizedHeight(window.innerHeight / window.screen.height))
      dispatch(setFullScreen(window.screen.width === window.innerWidth && window.screen.height === window.innerHeight ? true : false))
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <Box sx={s.background}>
      <Routes>
        <Route path="/" element={<>
          <NavBar />
          <CardsMapper />
          <Language />
        </>}/>
        <Route path="/about" element={<>
          <NavBar />
          <About />
          <Language />
        </>}/>
        <Route path="/cityDetail/:cityId" element={<>
          <CityDetail />
          <Language />
        </>}/>

        {/*
          <Route exact path="/city/:ciudadId"> <Map className="mapAlign" onFilter={onFilter} /> </Route>
        */}

      </Routes>
    </Box>
  );
}

export default App;
