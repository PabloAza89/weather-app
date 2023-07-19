import {
  flex, relative, absolute, fixed, column, pointer,
  row, aic, aifs, asc, jcc, jcfe, jcfs, jcsa,
  jcsb, jcse, jsc, jic, noDeco, mix, noSelect
} from './CommonsSX';

interface backgroundI {
  larPort: boolean,
  larLand: boolean,
}

export const background = ({ larPort, larLand }: backgroundI) => {
  return {
    ...flex, ...row, ...jcsb,
    position: 'fixed',
    width: '100%',
    height: '86px',
    alignItems: 'center',
    zIndex: 2000,
    //background: 'lightblue',
    background: 'rgba(144, 238, 144, .33)',
  }
}

interface linkLogoContainerI {
  larPort: boolean,
  larLand: boolean,
}

// width 160 + 160 = 320 // same as searcher
// height 30

export const linkLogoContainer = ({ larPort, larLand }: linkLogoContainerI) => {
  return {
    ...noDeco, ...noSelect,
    display: 'flex',
    width: '320px',
    marginLeft: '16px',
    background: 'darkred',
    alignItems: 'center',
    fontSize: 'x-large',
  }
}

export const linkLogo = () => {
  return {
    ...noDeco, ...noSelect,
    display: 'flex',
    background: 'yellow',
    alignItems: 'center',
    fontSize: 'x-large',
  }
}

export const logo = () => {
  return {
    width: '60px',
    height: '60px'
  
  }
}

export const logoTypo = () => {
  return {
    ...noDeco,
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '5px',
    fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
    fontSize: '24px',
    fontWeight: 400,
    color: '#007bff',
  }
}

export const linkAbout = () => {
  return {
    ...noDeco, ...noSelect,
  }
}

export const typoAbout = () => {
  return {
    ...noDeco,
    display: 'flex',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    fontSize: 'large',
    color: '#007bff',
    fontWeight: 450,
    letterSpacing: 'normal',
    lineHeight: '1.5',
  }
}

export const searcherContainer = () => {
  return {
    display: 'flex',
    position: 'relative',
    width: '320px',
    background: 'yellow',
    marginRight: '16px',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
  }
}