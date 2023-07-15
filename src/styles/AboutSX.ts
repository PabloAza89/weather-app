import {
  column, flex, mix, jcsb, jcc,
  aic, noSelect, relative
} from '../styles/CommonsSX';

export const background = () => {
  return {
    display: 'flex',
    flexDirection: 'column',
    //background: 'darkred',
    height: '100px',
    width: '800px',
    marginTop: '30px',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-around',
  }
}

export const description = () => {
  return {
    ...noSelect,
    lineHeight: '27px',
    color: 'rgb(33, 37, 41)',
    fontSize: '18px',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    fontWeight: 400,
  }
}

export const link = () => {
  return {
    ...noSelect,
    lineHeight: '27px',
    color: 'rgb(0, 86, 179)',
    fontSize: '18px',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    fontWeight: 400,
  }
}