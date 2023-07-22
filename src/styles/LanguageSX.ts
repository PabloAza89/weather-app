import { cyan } from '@mui/material/colors';
import {
  flex, relative, fixed, column, pointer,
  row, aic, asc, jcc, 
  noSelect
} from './CommonsSX';

// flag width 2 + 56 + 2 = 60
// typo width 30
// total width 90

export const background = () => {
  return {
    ...fixed, ...flex,
    //background: 'yellow', // dev
    width: '0px',
    height: '120px',
    top: '100px',
    zIndex: 3000,
  }
}

export const sliderBox = () => {
  return {
    ...flex, ...relative, ...column, ...jcc,
    //background: 'orange', // dev
    left: '0px',
  }
}

export const button = () => {
  return {
    ...flex, ...fixed, ...noSelect,
    minWidth: '30px !important',
    width: '30px !important',
    minHeight: '120px !important',
    height: '120px !important',
    color: 'darkblue',
    fontSize: '14px',
    borderRadius: '0px',
    background: 'lightblue',
    ':hover': {
      background: '#91bfcf'
    }
  }
}

export const buttonTypo = () => {
  return {
      ...flex, ...noSelect, ...aic,
    fontFamily: 'Roboto',
    //background: 'gray', // dev
    fontSize: '14px',
    fontWeight: '500',
    transform: 'rotate(270deg)',
    height: '30px',
    textWrap: 'nowrap',
  }
}

interface genI {
  english: boolean,
}

export const lanEnFlag = ({ english }: genI) => {
  return {
    ...flex, ...row, ...asc, ...pointer, ...noSelect,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    border: english ? `solid ${cyan[400]} 2px` : `solid transparent 2px`,
    height: '42px',
    width: '60px',
    ':hover': {
      webkitFilter: 'brightness(.9)',
      'filter': 'brightness(.9)',
      transform: 'scale(1.01)'
    },
    transition: 'all .1s ease-in-out',
  }
}

export const lanEsFlag = ({ english }: genI) => {
  return {
    ...flex, ...row, ...asc, ...pointer, ...noSelect,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    border: english ? `solid transparent 2px` : `solid ${cyan[400]} 2px`,
    height: '42px',
    width: '60px',
    ':hover': {
      webkitFilter: 'brightness(.9)',
      'filter': 'brightness(.9)',
      transform: 'scale(1.01)'
    },
    transition: 'all .1s ease-in-out',
  }
}