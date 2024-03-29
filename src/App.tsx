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
  setMinPort, setPercentageResizedHeight, setWidth,
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
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  const darkMode = useSelector((state: {darkMode:boolean}) => state.darkMode)
  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const medPort = useSelector((state: {medPort:boolean}) => state.medPort)
  const medLand = useSelector((state: {medLand:boolean}) => state.medLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  const larLand = useSelector((state: {larLand:boolean}) => state.larLand)

  return (
    <Box sx={s.background} >
      <Box sx={s.wallpaperNavBar({ darkMode, medPort, larPort })} />
      <Box sx={s.wallpaperBody({ darkMode, medPort, larPort })} />
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
