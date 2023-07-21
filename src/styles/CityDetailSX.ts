import {
  column, flex, mix, jcsb, jcc,
  aic, noSelect, relative
} from '../styles/CommonsSX';

interface cityNotFoundI {
  darkMode: boolean
}

export const cityNotFound = ({ darkMode }: cityNotFoundI) => {
  return {
    display: 'flex',
    //color: 'red',
    //color: 'white',
    color: darkMode ? 'white' : '#154f8f',
    //background: 'gray',
    marginTop: '86px',
    //height: '86px',
    //padding: '0px 35px',
    padding: '0px 40px',
    //height: '100vh',
    minHeight: '154px',
    height: 'calc(100vh - 86px)',
    width: '100vw',
    zIndex: 2000,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  }
}

export const background = () => {
  return {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '86px',
    paddingTop: '40px',
    //background: 'gray', // dev
    zIndex: 1999,
    width: '100%',
    height: '600px',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  }
}

interface cityNameI {
  darkMode: boolean,
}

export const cityName = ({ darkMode }: cityNameI) => {
  return {
    ...noSelect,
    lineHeight: '38.4px',
    color: darkMode ? 'white' : 'rgb(33, 37, 41)',
    fontSize: '32px',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    fontWeight: 500,
  }
}

export const countryName = () => {
  return {
    ...noSelect,
    lineHeight: '19.5px',
    color: 'rgb(33, 37, 41)',
    fontSize: '13px',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    fontWeight: 600,
  }
}

export const tempWeatherWindClouds = () => {
  return {
    ...noSelect,
    lineHeight: '36px',
    color: 'rgb(33, 37, 41)',
    fontSize: '24px',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    fontWeight: 400,
  }
}

interface mapI {
  scrollWidth: number
}

export const map = ({ scrollWidth }: mapI) => {
  return {
    //display: 'block',
    height: '300px',
    //width: '600px',
    width: `max(35vw, ${500 - scrollWidth}px)`, // 500 - scrollWidth (17 approx.) === 483px
  }
}
