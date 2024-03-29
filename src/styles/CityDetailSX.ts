import {
  flex, column, 
  aic, asc, 
  jcse, noSelect
} from './CommonsSX';

export const background = () => {
  return {
    ...flex, ...column, ...asc, ...aic, ...jcse,
    marginTop: '86px',
    paddingTop: '40px',
    //background: 'gray', // dev
    zIndex: 1999,
    width: '100%',
    height: '600px',
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