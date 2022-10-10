import React, { useEffect, useState } from "react";
import "./App.css";
import Nav from "../components/Nav.jsx";
import Cards from "../components/Cards.jsx";
import { Route } from "react-router-dom";
import About from "../components/About.jsx";
import City from "../components/City.jsx";
import Map from "../components/Map.jsx"
import { Link } from "react-router-dom";
import En from "../img/lan-en.png";
import Es from "../img/lan-es.png";


const apiKey = "996c7f0e4e0b0953dddafed0a123ef9c&units=metric";

function App() {
    const [lang, setLang] = useState(0);
    
    const langEs = (e) => {
        setLang(1);
    };
    const langEn = (e) => {
        setLang(0);
    };

    const [cities, setCities] = useState([]);

    function onClose(id) {
        setCities((oldCities) => oldCities.filter((c) => c.id !== id));
    }

    function onSearch(ciudad) {
        //Llamado a la API del clima
        fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`
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
                    setCities((oldCities) => [...oldCities, ciudad]);
                } else {
                    function right(){document.getElementsByClassName("search")[0].style.width=(320+"px")}
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
                    left()                    
                    
                    /* alert("City not found!"); */
                }
            });
    }

    function onFilter(ciudadId) {
        let ciudad = cities.filter((c) => c.id === parseInt(ciudadId));

        if (ciudad.length > 0) {
            return ciudad[0];
        } else {
            return "City not found!";
        }
    }

    //cities.filter(c => c.id === parseInt(match.params.ciudadId))

    return (
        <div className="App">
            <Route path="/" render={() => <Nav onSearch={onSearch} lang={lang} />}/>
            <Route exact path="/" render={() => (<Cards cities={cities} onClose={onClose} lang={lang} />)}
            />
            {/* <Route exact path= '/about' component={About} /> */}
            <Route exact path="/about" render={() => <About lang={lang} />} />
            <Route exact path="/city/:ciudadId"> <City onFilter={onFilter} lang={lang} /> </Route>
            {/* <Route path= '/' render={() => <Footer />} /> */}

            {/* <div id="map"></div> */}
            {/* <Route path= '/' component={Map} /> */}
            <Route exact path="/city/:ciudadId"> <Map className="mapAlign" onFilter={onFilter} /> </Route>
            <footer className="footer">
                <Link onClick={langEs}> <img className="image" src={Es} alt="" /> </Link>
                <Link onClick={langEn}> <img className="image" src={En} alt="" /> </Link>
            </footer>
        </div>
    );
}

export default App;
