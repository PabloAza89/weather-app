import { useState, useEffect } from "react";
import { Box } from '@mui/material';
import "./App.css";
import Nav from "./components/Nav.jsx";
import Cards from "./components/Cards.jsx";
import { Route, Routes, useLocation, Link } from "react-router-dom";
import About from "./components/About/About";
import City from "./components/City.jsx";
import Map from "./components/Map.jsx"
//import En from "./img/lan-en.png";
//import Es from "./img/lan-es.png";
import * as s from './styles/AppSX';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCurrentWidth, setHeight, setLarLand,
  setLarPort, setMedLand, setMedPort, setMinLand,
  setMinPort, setPercentageResizedHeight, setWidth, setFullScreen
} from './actions';

const apiKey = "996c7f0e4e0b0953dddafed0a123ef9c&units=metric";

function App() {

  const dispatch = useDispatch()
  const location = useLocation()

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


    const [lang, setLang] = useState(0);
  
    const langEs = (e:any) => {
        setLang(1);
    };
    const langEn = (e:any) => {
        setLang(0);
    };

    const [cities, setCities] = useState<any>([]);

    function onClose(id:any) {
        setCities((oldCities:any) => oldCities.filter((c:any) => c.id !== id));
    }

    function onSearch(ciudad:any) {
        //Llamado a la API del clima
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`
        )
            .then((r) => r.json())
            .then((recurso) => {
                if (recurso.main !== undefined) {
                    const ciudad = {
                        min: Math.round(recurso.main.temp_min),
                        max: Math.round(recurso.main.temp_max),
                        img: recurso.weather[0].icon,
                        id: recurso.id,
                        wind: recurso.wind.speed,
                        temp: recurso.main.temp,
                        name: recurso.name,
                        country: recurso.sys.country,
                        weather: recurso.weather[0].main,
                        clouds: recurso.clouds.all,
                        latitud: recurso.coord.lat,
                        longitud: recurso.coord.lon,
                    };
                    setCities((oldCities:any) => [...oldCities, ciudad]);
                } else {
                    /* function right(){document.getElementsByClassName("search")[0].style.width=(320+"px")}
                    function left(){document.getElementsByClassName("search")[0].style.width=(340+"px")}
                    function center(){document.getElementsByClassName("search")[0].style.width=(330+"px")}
                    center()
                    setTimeout(center, 200)
                    left()
                    setTimeout(left, 160)
                    center()                  
                    setTimeout(center, 120)
                    right()
                    setTimeout(right, 80)
                    center()
                    setTimeout(center, 40)
                    left()                     */
                    
                    /* alert("City not found!"); */
                }
            });
    }

    function onFilter(ciudadId:any) {
        let ciudad = cities.filter((c:any) => c.id === parseInt(ciudadId));
        if (ciudad.length > 0) return ciudad[0];
        else return "City not found!";
    }

    return (
        <Box sx={s.background}>
            <Routes>
            {/* <Route path="/weather-app" render={() => <Nav onSearch={onSearch} lang={lang} />}/>
            <Route exact path="/weather-app" render={() => (<Cards cities={cities} onClose={onClose} lang={lang} />)}
            />
            <Route exact path="/weather-app/about" render={() => <About lang={lang} />} />
            
            <Route exact path="/weather-app/city/:ciudadId" render={() => (<City onFilter={onFilter} lang={lang} />)}/>
            

            
            <Route exact path="/weather-app/city/:ciudadId"> <Map className="mapAlign" onFilter={onFilter} /> </Route>
          
            <footer className="footer">
                <Link onClick={langEs}> <img className="image" src={Es} alt="" /> </Link>
                <Link onClick={langEn}> <img className="image" src={En} alt="" /> </Link>
                 
            </footer> */}

            </Routes>
       
           
        </Box>
    );
}

export default App;
