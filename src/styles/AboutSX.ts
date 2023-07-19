import {
  column, flex, mix, jcsb, jcc,
  aic, noSelect, relative
} from '../styles/CommonsSX';

export const background = () => {
  return {
    display: 'flex',
    flexDirection: 'column',
    //background: 'darkred', // dev
    height: '100px',
    //width: '800px',
    width: '100%',
    marginTop: '86px',
    //marginTop: '30px',
    alignItems: 'center',
    padding: '0px 40px',
    //alignSelf: 'center',
    justifyContent: 'space-around',
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
  }
}