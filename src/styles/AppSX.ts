import bgDay from '../images/bgDay.webp';
import bgNight from '../images/bgNight.webp';

export const background = () => {
  return {
    display: 'flex',
    position: 'absolute',
    width: '100%',
  }
}

interface backgroundI {
  darkMode: boolean
}

export const background2 = ({ darkMode }: backgroundI) => {
  return {
    display: 'flex',
    position: 'fixed',
    width: '100%',
    height: '100vh',
    zIndex: 0,
    background: 'lightgray',
    backgroundImage: darkMode ? `url(${bgNight})` : `url(${bgDay})`,
  }
}


export const background3 = ({ darkMode }: backgroundI) => {
  return {
    display: 'flex',
    position: 'fixed',
    width: '100%',
    height: '86px',
    zIndex: 2000,
    backgroundImage: darkMode ? `url(${bgNight})` : `url(${bgDay})`,
  }
}