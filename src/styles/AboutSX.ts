import {
  flex, relative, absolute, fixed, column, pointer,
  row, aic, aifs, asc, jcc, jcfe, jcfs, jcsa,
  jcsb, jcse, jsc, jic, noDeco, mix, noSelect
} from './CommonsSX';

interface backgroundI {
  english: boolean,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
}

export const background = ({ english, minPort, minLand, medPort, medLand, larPort }: backgroundI) => {
  return {
    ...flex, ...column, ...aic, ...jcsa,
    //background: 'darkred', // dev
    width: '100%',
    marginTop: '86px',
    padding: '20px 0px',
    zIndex: 1999,
  }
}

interface descriptionI {
  darkMode: boolean
}

export const description = ({ darkMode }: descriptionI) => {
  return {
    ...noSelect,
    lineHeight: '27px',
    color: darkMode ? 'white' : 'rgb(33, 37, 41)',
    fontSize: '18px',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    fontWeight: 400,
    textAlign: 'center',
    padding: '0px 40px',
    marginBottom: '30px',
  }
}

interface linkI {
  darkMode: boolean
}

export const link = ({ darkMode }: linkI) => {
  return {
    ...noSelect,
    lineHeight: '27px',
    color: darkMode ? 'white' : 'rgb(0, 86, 179)',
    fontSize: '18px',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    fontWeight: 400,
    //background: 'gray', // dev
    textUnderlinePosition: 'under',
    textAlign: 'center',
  }
}