import { cyan } from '@mui/material/colors';
import {
  flex, relative, absolute, fixed, column, pointer,
  row, aic, aifs, asc, jcc, jcfe, jcfs, jcsa,
  jcsb, jcse, jsc, jic, noDeco, mix, noSelect
} from './CommonsSX';

// flag width 2 + 56 + 2 = 60
// typo width 30
// total width 90

export const background = () => {
  return {
    //...asc, ...absolute, ...flex, ...row, ...jcc,
    //position: 'relative',
    position: 'fixed',
    display: 'flex',
    background: 'yellow',
    width: '0px',
    height: '120px',
    top: '100px',
    zIndex: 3000,
    
    
    'active': {
      'opacity': '0',
      'display': 'flex'
      },
    
  }
}

export const sliderBox = () => {
  return {
    ...flex, ...relative,
    flexDirection : 'column',
    background: 'orange',
    left: '0px',
    justifyContent: 'center',
    //width: '500px',
    //overflowX: 'hidden',
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
      ...flex, ...noSelect,
    fontFamily: 'Roboto',
    background: 'gray',
    //fontSize: minPort || minLand ? '11px' : english && ( larPort || larLand ) ? '14px' : '13px',
    fontSize: '14px',
    fontWeight: '500',
    transform: 'rotate(270deg)',
    height: '30px',
    textWrap: 'nowrap',
    alignItems: 'center',
    
  }
}

interface genI {
  english: boolean,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
}

export const lanEnFlag = ({ english, minPort, minLand, medPort, medLand, larPort }: genI) => {
  return {
    ...flex, ...row, ...asc, ...pointer, ...noSelect,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    border: english ? `solid ${cyan[400]} 2px` : `solid transparent 2px`,
    height: minPort ? '25px' : minLand ? '25px' : medPort ? '36px' : medLand ? '36px' : larPort ? '42px' : '42px',
    width: minPort ? '37px' : minLand ? '37px' : medPort ? '50px' : medLand ? '50px' : larPort ? '60px' : '60px',
    ':hover': {
      webkitFilter: 'brightness(.9)',
      'filter': 'brightness(.9)',
      transform: 'scale(1.01)'
    },
    transition: 'all .1s ease-in-out',
  }
}

export const lanEsFlag = ({ english, minPort, minLand, medPort, medLand, larPort }: genI) => {
  return {
    ...flex, ...row, ...asc, ...pointer, ...noSelect,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    border: english ? `solid transparent 2px` : `solid ${cyan[400]} 2px`,
    height: minPort ? '25px' : minLand ? '25px' : medPort ? '36px' : medLand ? '36px' : larPort ? '42px' : '42px',
    width: minPort ? '37px' : minLand ? '37px' : medPort ? '50px' : medLand ? '50px' : larPort ? '60px' : '60px',
    ':hover': {
      webkitFilter: 'brightness(.9)',
      'filter': 'brightness(.9)',
      transform: 'scale(1.01)'
    },
    transition: 'all .1s ease-in-out',
  }
}