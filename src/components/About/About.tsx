import { Box, Dialog, Typography } from '@mui/material';
import "../../styles/AboutSX";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";

interface langI {
  lang: string,
}

function About(/* {lang}:langI */) {

  const english = useSelector((state: {english:boolean}) => state.english)
  const height = useSelector((state: {height:number}) => state.height)
  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const medPort = useSelector((state: {medPort:boolean}) => state.medPort)
  const medLand = useSelector((state: {medLand:boolean}) => state.medLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  const larLand = useSelector((state: {larLand:boolean}) => state.larLand)
  const percentageResizedHeight = useSelector((state: {percentageResizedHeight:number}) => state.percentageResizedHeight)

  return (
    <Box className="about">
      <Typography> { english ?
        `Hola soy Pablo ! Y está es mi aplicacion del clima creada durante el Bootcamp de Henry!!` :
        `Hi i'm Pablo ! And this is my weather app created during my Bootcamp at Henry!`
      }&#x1F680;
        </Typography>
            <a
              href={"https://www.linkedin.com/in/juan-pablo-azambuyo"}
              target="_blank"
              rel="noopener noreferrer"
            >&#10145; { english ? `MY LINKEDIN PROFILE` : `MI PERFIL DE LINKEDIN`} &#11013;</a>
        
    </Box>
  )
  
}

export default About