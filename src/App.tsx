import { useEffect } from "react";
import { Box } from '@mui/material';
import NavBar from "./components/NavBar/NavBar";
import CardsMapper from "./components/CardsMapper/CardsMapper";
import DarkMode from "./components/DarkMode/DarkMode";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Language from "./components/Language/Language";
import Error from "./components/Error/Error";
import CityDetail from "./components/CityDetail/CityDetail";
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

  const darkMode = useSelector((state: {darkMode:boolean}) => state.darkMode)

  return (
    <Box sx={s.background} >
      <Box sx={s.background2({ darkMode })} />
      <Box sx={s.background3({ darkMode })} />
      <Routes>
        <Route path="/" element={<>
          <NavBar />
          <CardsMapper />
          <Language />
          <DarkMode />
        </>}/>
        <Route path="/about" element={<>
          <NavBar />
          <About />
          <Language />
          <DarkMode />
        </>}/>
        <Route path="/cityDetail/:cityId" element={<>
          <NavBar />
          <CityDetail />
          <Language />
          <DarkMode />
        </>}/>
        <Route path="*" element={<>
          <NavBar />
          <Error />
        </>}/>
      </Routes>
    </Box>
  );
}

export default App;
