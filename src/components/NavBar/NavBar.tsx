import Logo from "../../images/logo.png";
import { Box, Typography } from '@mui/material';
import Searcher from "../Searcher/Searcher";
import { useSelector } from 'react-redux';
import * as s from '../../styles/NavBarSX';
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {

  const location = useLocation()

  const width = useSelector((state: {width:number}) => state.width)
  const wrongPath = useSelector((state: {wrongPath:boolean}) => state.wrongPath)
  const darkMode = useSelector((state: {darkMode:boolean}) => state.darkMode)
  const english = useSelector((state: {english:boolean}) => state.english)
  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  
  return (
    <Box sx={s.background}>
      <Box sx={s.linkLogoContainer({ minPort, minLand })}>
        <Link style={s.linkLogo()} to="/">
          <Box
            component="img"
            src={Logo}
            sx={s.logo({ minPort, minLand })}
          />
          <Typography sx={s.logoTypo({ minPort, darkMode })}>
            Weatherify
          </Typography>
        </Link>
      </Box>
      <Link
        to="/about"
        style={s.linkAbout({ width, minPort, wrongPath, location:location.pathname })}
      >
        <Typography sx={s.typoAbout({ darkMode })}>
          { english ? `ABOUT3` : `ACERCA` }
        </Typography>
      </Link>
      <Box
        sx={s.searcherContainer({ wrongPath, minPort, minLand })}
        className={`reference`}
      >
        <Searcher />
      </Box>
    </Box>
  );
}

export default NavBar;


