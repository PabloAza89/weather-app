import { useEffect } from 'react';
import LightMode from '@mui/icons-material/LightMode';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setDarkMode } from '../../actions';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import * as s from '../../styles/DarkModeSX';

function DarkMode() {

  const dispatch = useDispatch()

  const darkMode = useSelector( (state: {darkMode:boolean}) => state.darkMode)

  useEffect(() => {
    let night: string | null = localStorage.getItem('night');
    if (night === ( null || 'false' )) dispatch(setDarkMode(false))
    if (night === 'true') dispatch(setDarkMode(true))
  })

  return (
    <Button
      onClick={() => { localStorage.setItem('night', (!darkMode).toString()); dispatch(setDarkMode(!darkMode)) }}
      variant="contained"
      sx={s.background}
    >
      { darkMode ?
        <LightMode sx={s.iconDay()} /> :
        <DarkModeIcon sx={s.iconNight()}/> }
    </Button>
  )
}

export default DarkMode;
