import { useEffect } from 'react';
import { Box } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import * as s from '../../styles/CityNotFoundSX';
import { wrongPath } from '../../actions';

function CityNotFound() {

  const dispatch = useDispatch()

  const english = useSelector((state: {english:boolean}) => state.english)
  const darkMode = useSelector((state: {darkMode:boolean}) => state.darkMode)

  useEffect(() => {
    dispatch(wrongPath(true))
      return () => {
        dispatch(wrongPath(false))
      }
  },[dispatch])

  return (
    <Box sx={s.background({ darkMode })}>
      { english ?
        `Sorry, this city does not exist ! Or maybe you have reloaded the page.. Anyway, please, go back and find your city in the search box !` :
        `Lo siento, esta ciudad no existe ! O quizás recargaste la página.. De todas maneras, por favor, ve atrás y buscá tu ciudad en el cuadro de búsqueda !`
      }
    </Box>
  )
}

export default CityNotFound