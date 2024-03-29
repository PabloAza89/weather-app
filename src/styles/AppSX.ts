import {
  flex, absolute, fixed
  } from './CommonsSX';
import bgDay from '../images/bgDay.webp';
import bgNight from '../images/bgNight.webp';

export const background = () => {
  return {
    ...flex, ...absolute,
    width: '100%',
  }
}

interface wallpaperI {
  darkMode: boolean
  medPort: boolean,
  larPort: boolean,
}


export const wallpaperNavBar = ({ darkMode, medPort, larPort }: wallpaperI) => {
  return {
    ...flex, ...fixed,
    width: medPort || larPort ? '86px' : '100%',
    height: medPort || larPort ? '100vw' : '86px',
    left: medPort || larPort ? 'calc((100vw - 86px) /2)' : 'none',
    top: medPort || larPort ? 'calc((86px - 100vw) /2)' : 'none',
    zIndex: 2000,
    //background: 'red', // dev
    backgroundImage: darkMode ? `url(${bgNight})` : `url(${bgDay})`,
    transform: medPort || larPort ? 'rotate(90deg)' : 'rotate(0deg)',
  }
}

export const wallpaperBody = ({ darkMode, medPort, larPort }: wallpaperI) => {
  return {
    ...flex, ...fixed,
    width: medPort || larPort ? '100vh' : '100%',
    height: medPort || larPort ? '100vw' : '100%',
    left: medPort || larPort ? 'calc((100vw - 100vh) /2)' : 'none',
    top: medPort || larPort ? 'calc((100vh - 100vw) /2)' : 'none',
    zIndex: 0,
    //background: 'lightgray', // dev
    backgroundImage: darkMode ? `url(${bgNight})` : `url(${bgDay})`,
    transform: medPort || larPort ? 'rotate(90deg)' : 'rotate(0deg)',
  }
}