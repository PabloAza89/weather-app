import { useEffect } from 'react';
import Logo from "../../images/logo.png";
import { Box, Typography } from '@mui/material';
import Searcher from "../Searcher/Searcher";
import { useSelector } from 'react-redux';
import * as s from '../../styles/NavBarSX';
import { Link, useLocation } from "react-router-dom";
import $ from 'jquery';

const NavBar = () => {

  const location = useLocation()

  const wrongPath = useSelector((state: {wrongPath:boolean}) => state.wrongPath)
  const darkMode = useSelector((state: {darkMode:boolean}) => state.darkMode)
  const english = useSelector((state: {english:boolean}) => state.english)
  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const medPort = useSelector((state: {medPort:boolean}) => state.medPort)
  const medLand = useSelector((state: {medLand:boolean}) => state.medLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  const larLand = useSelector((state: {larLand:boolean}) => state.larLand)

  console.log("LOCATION", location.pathname)

  return (
    <Box sx={s.background({ larPort, larLand })}>
      <Box sx={s.linkLogoContainer({ minPort, minLand, medPort, medLand, larPort, larLand })}>
        <Link style={s.linkLogo()} to="/">
          <Box
            component="img"
            src={Logo}
            sx={s.logo({ minPort, minLand, medPort, medLand, larPort, larLand })}
          />
          <Typography sx={s.logoTypo({ minPort, minLand, medPort, medLand, larPort, larLand, darkMode })}>
            Weatherify
          </Typography>
        </Link>
      </Box>
      <Link
        to="/about"
        style={s.linkAbout({ wrongPath })}
      >
        <Typography sx={s.typoAbout({ darkMode })}>
          { english ? `ABOUT` : `ACERCA` }
        </Typography>
      </Link>
      <Box
        sx={s.searcherContainer({ wrongPath, minPort, minLand, medPort, medLand, larPort, larLand })}
        className={`reference`}
      >
        <Searcher />
      </Box>
    </Box>
  );
}

export default NavBar;


