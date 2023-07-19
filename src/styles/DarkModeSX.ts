import { absolute, column, flex, jcc, aic } from '../styles/CommonsSX';

interface backgroundI {
  height: number,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean,
  location: string,
  percentageResizedHeight: number
}

export const background = () => {
  return {
    display: 'flex',
    position: 'fixed',
    //background: 'red',
    //...column, ...jcc, ...aic,
    zIndex: 4000,
    width: '35px !important',
    height: '35px !important',
    padding: '0vw !important',
    minWidth: '0vh !important',
    //width: minPort || minLand ? `30px !important` : medPort || medLand ? `32.5px !important` : `35px !important` ,
    //height: minPort || minLand ? `30px !important` : medPort || medLand ? `32.5px !important` : `35px !important` ,
    right: '7px',
    //top:
    //  minLand && height <= 380 && location === '/Skills' ? '20px' : 'none',
    bottom: '7px',
    
  }
}

interface genI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
}

export const iconDay = () => {
  return {
    ...flex, ...absolute, ...column,
    minWidth: '0vh',
    width: `22px !important` ,
    height: `22px !important`
  }
}

export const iconNight = () => {
  return {
    ...flex, ...absolute, ...column,
    minWidth: '0vh',
    width: `20px !important` ,
    height: `20px !important`
  }
}


