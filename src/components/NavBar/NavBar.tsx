import Logo from "../../images/logo.png";
import { Box, Typography } from '@mui/material';
import Searcher from "../Searcher/Searcher";
import { useSelector } from 'react-redux';
import * as s from '../../styles/NavBarSX';
import { Link } from "react-router-dom";
import $ from 'jquery';

const NavBar = () => {

  const darkMode = useSelector((state: {darkMode:boolean}) => state.darkMode)
  const english = useSelector((state: {english:boolean}) => state.english)
  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const medPort = useSelector((state: {medPort:boolean}) => state.medPort)
  const medLand = useSelector((state: {medLand:boolean}) => state.medLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  const larLand = useSelector((state: {larLand:boolean}) => state.larLand)

  return (
    <Box sx={s.background({ larPort, larLand })}>
      <Box sx={s.linkLogoContainer({ larPort, larLand })}>
        <Link style={s.linkLogo()} to="/">
          <Box
            component="img"
            src={Logo}
            sx={s.logo}
          />
          <Typography sx={s.logoTypo}>
            Weatherify
          </Typography>
        </Link>
      </Box>
      <Link
        to="/about"
        style={s.linkAbout()}
      >
        <Typography sx={s.typoAbout({ darkMode })}>
          { english ? `ABOUT` : `ACERCA` }
        </Typography>
      </Link>
      <Box
        sx={s.searcherContainer}
        className={`reference`}
      >
        <Searcher />
      </Box>
    </Box>
  );
}

export default NavBar;


