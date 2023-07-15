import {
  flex, relative, absolute, fixed, column, pointer,
  row, aic, aifs, asc, jcc, jcfe, jcfs, jcsa,
  jcsb, jcse, jsc, jic, noDeco, mix, noSelect
} from './CommonsSX';

export const background = () => {
  return {
    ...flex, ...row, ...jcsb,
    padding: '0px 30px',
    height: '86px',
    alignItems: 'center',
    //background: 'gray',
    background: 'rgba(144,238,144,.33)',
  }
}

export const linkLogo = () => {
  return {
    ...noDeco,
    display: 'flex',
    //background: 'darkred',
    alignItems: 'center',
    fontSize: 'x-large',
  }
}

export const logo = () => {
  return {
    //marginLeft: '13px',
    width: '60px',
    height: '60px'
  
  }
}

export const logoTypo = () => {
  return {
    ...noDeco,
    display: 'flex',
    flexDirection: 'row',
    //margin: '-5%',
    marginLeft: '5px',
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
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    /* position: 'absolute', */
    /* top: '35%', */
    /* left: '45%', */
    //fontSize: '18px',
    fontSize: 'large',
    color: '#007bff',
    fontWeight: 450,
    letterSpacing: 'normal',
    lineHeight: '1.5',
    /* fontSize: 'large', */
  }
}