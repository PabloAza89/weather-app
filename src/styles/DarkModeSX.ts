import {
  flex, absolute, fixed, column
} from './CommonsSX';

export const background = () => {
  return {
    ...flex, ...fixed,
    zIndex: 4000,
    width: '35px !important',
    height: '35px !important',
    padding: '0vw !important',
    minWidth: '0vh !important',
    right: '7px',
    bottom: '7px',
  }
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


