import {
  flex, relative, absolute, fixed, column, pointer,
  row, aic, aifs, asc, jcc, jcfe, jcfs, jcsa,
  jcsb, jcse, jsc, jic, noDeco, mix, noSelect
} from './CommonsSX';

export const background = () => {
  return {
    ...flex, ...row, ...jcsb,
    background: 'gray',
  }
}

export const linkLogo = () => {
  return {
    /* ...flex, */ /* ...row,  */...aic,
    ...noDeco,
    display: 'flex',
    fontSize: 'x-large',
  }
}

export const logo = () => {
  return {
    marginLeft: '13px',
    width: '60px',
    height: '60px'
  
  }
}

export const logoTypo = () => {
  return {
    ...noDeco,
    display: 'flex',
    flexDirection: 'row',
    margin: '-5%',
    fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
    fontSize: '24px',
    fontWeight: 400,
    color: '#007bff',
  }
}

export const linkAbout = () => {
  return {
    ...noDeco,
  }
}

export const typoAbout = () => {
  return {
    ...noDeco,
    display: 'flex',
    /* position: 'absolute', */
    /* top: '35%', */
    /* left: '45%', */
    fontSize: '18px',
    color: '#007bff',
    fontWeight: 450,
    /* fontSize: 'large', */
  }
}