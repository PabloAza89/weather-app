import bgDay from '../images/bgDay.webp';
import bgNight from '../images/bgNight.webp';

export const background = () => {
  return {
    display: 'flex',
    position: 'absolute',
    width: '100%',
  }
}

interface wallpaperI {
  darkMode: boolean
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean,
}


export const wallpaperNavBar = ({ darkMode, minPort, minLand, medPort, medLand, larPort, larLand }: wallpaperI) => {
  return {
    display: 'flex',
    position: 'fixed',
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

export const wallpaperBody = ({ darkMode, minPort, minLand, medPort, medLand, larPort, larLand }: wallpaperI) => {
  return {
    display: 'flex',
    position: 'fixed',
    width: medPort || larPort ? '100vh' : '100%',
    height: medPort || larPort ? '100vw' : '100%',
    left: medPort || larPort ? 'calc((100vw - 100vh) /2)' : 'none',
    top: medPort || larPort ? 'calc((100vh - 100vw) /2)' : 'none',
    zIndex: 0,
    background: 'lightgray',
    backgroundImage: darkMode ? `url(${bgNight})` : `url(${bgDay})`,
    transform: medPort || larPort ? 'rotate(90deg)' : 'rotate(0deg)',
  }
}