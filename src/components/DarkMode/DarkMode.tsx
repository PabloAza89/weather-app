import { useEffect } from 'react';
import LightMode from '@mui/icons-material/LightMode';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from "react-router-dom";
import { setDarkMode } from '../../actions';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import * as s from '../../styles/DarkModeSX';

function DarkMode() {

  const location = useLocation()
  const dispatch = useDispatch()

  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const height = useSelector((state: {height:number}) => state.height)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const medPort = useSelector((state: {medPort:boolean}) => state.medPort)
  const medLand = useSelector((state: {medLand:boolean}) => state.medLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  const larLand = useSelector((state: {larLand:boolean}) => state.larLand)
  const percentageResizedHeight = useSelector((state: {percentageResizedHeight:number}) => state.percentageResizedHeight)
  const darkMode = useSelector( (state: {darkMode:boolean}) => state.darkMode)

  // useEffect(() => {
  //   let night: string | null = localStorage.getItem('night');
  //   if (night === ( null || 'false' )) dispatch(setDarkMode(false))
  //   if (night === 'true') dispatch(setDarkMode(true))
  // })

  return (
    <Button
      onClick={() => { /* localStorage.setItem('night', (!darkMode).toString()); */ dispatch(setDarkMode(!darkMode)) }}
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
