import {
  flex, relative, absolute, fixed, column, pointer,
  row, aic, aifs, asc, jcc, jcfe, jcfs, jcsa,
  jcsb, jcse, jsc, jic, noDeco, mix, noSelect
} from './CommonsSX'; // ALL VARS

// width 290
// height 210

interface backgroundI {
  darkMode: boolean
}

export const background = ({ darkMode }: backgroundI) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    margin: '20px 10px 0px 10px',
    width: '290px',
    height: '210px',
    borderRadius: '4px',
    border: '1px solid rgba(0,0,0,.125)',
    //backgroundColor: 'darkred',
    background: darkMode ? 'rgba(232, 62, 140, .22)' : 'rgba(232, 62, 140, .15)',
    padding: '8px',
    justifyContent: 'space-between',
  }
}

export const button = () => {
  return {
    minWidth: '26px !important',
    width: '26px !important',
    minHeight: '31px !important',
    height: '31px !important',
    background: '#dc3545',
    color: '#fff',
    fontWeight: 400,
    paddingTop: '7px',
    alignSelf: 'flex-end',
    ':hover': {
      background: '#c82333',
    }
  }
}

interface cityNameI {
  darkMode: boolean
}

export const cityName = ({ darkMode }: cityNameI) => {
  return {
    ...noDeco,
    display: 'flex',
    position: 'relative',
    color: darkMode ? 'white' : '#154f8f',
    fontSize: '28px',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    fontWeight: 500,
  }
}

export const cityNameLink = () => {
  return {
    ...noDeco, ...noSelect,
    display: 'flex',
    //background: 'yellow', // dev
    width: 'fit-content',
    color: '#007bff',
    fontSize: '28px',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    fontWeight: 500,
    alignSelf: 'center',
  }
}

export const countryName = () => {
  return {
    ...noSelect,
    lineHeight: '18.4px',
    color: 'rgb(33, 37, 41)',
    fontSize: '13px',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    fontWeight: 500,
    alignSelf: 'center',
  }
}

export const minMax = () => {
  return {
    ...noSelect,
    display: 'flex',
    flexDirection: 'column',
    //background: 'yellow', // dev
    width: '80px',
    height: '80px',
    lineHeight: '24px',
    color: 'rgb(33, 37, 41)',
    fontSize: '20px',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    fontWeight: 500,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  }
}

export const minMaxIcon = () => {
  return {
    display: 'flex',
    flexDirection: 'row',
    //background: 'darkred', // dev
    justifyContent: 'space-evenly',
    
  }
}