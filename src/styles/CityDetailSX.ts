import {
  column, flex, mix, jcsb, jcc,
  aic, noSelect, relative
} from '../styles/CommonsSX';

export const background = () => {
  return {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '40px',
    paddingBottom: '40px',
    background: 'gray',
    width: '700px',
    height: '600px',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  }
}

export const cityName = () => {
  return {
    ...noSelect,
    lineHeight: '38.4px',
    color: 'rgb(33, 37, 41)',
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

export const map = () => {
  return {
    height: '300px',
    width: '600px',
  }
}
