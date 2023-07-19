import { Box, Typography } from '@mui/material';
import * as s from '../../styles/AboutSX';
import { useSelector } from 'react-redux';

function About() {

  const english = useSelector((state: {english:boolean}) => state.english)
  const darkMode = useSelector((state: {darkMode:boolean}) => state.darkMode)
  const height = useSelector((state: {height:number}) => state.height)
  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const medPort = useSelector((state: {medPort:boolean}) => state.medPort)
  const medLand = useSelector((state: {medLand:boolean}) => state.medLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  const larLand = useSelector((state: {larLand:boolean}) => state.larLand)
  const percentageResizedHeight = useSelector((state: {percentageResizedHeight:number}) => state.percentageResizedHeight)

  return (
    <Box sx={s.background}>
      <Typography sx={s.description({ darkMode })}> { english ?
        `Hola soy Pablo ! Y está es mi aplicacion del clima creada durante el Bootcamp de Henry !! ` :
        `Hi i'm Pablo ! And this is my weather app created during my Bootcamp at Henry !! `
      }&#x1F680;</Typography>
      <a
        style={s.link({ darkMode })}
        href={`https://www.linkedin.com/in/juan-pablo-azambuyo`}
        target="_blank"
        rel="noopener noreferrer"
      >&#10145; { english ? `MY LINKEDIN PROFILE` : `MI PERFIL DE LINKEDIN`} &#11013;</a>
    </Box>
  )
}

export default About