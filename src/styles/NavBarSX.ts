import {
  flex, relative, fixed, 
  row, aic, jcfe, 
  jcsb, noDeco, noSelect
} from './CommonsSX';

export const background = () => {
  return {
    ...flex, ...row, ...jcsb, ...fixed, ...aic,
    width: '100%',
    height: '86px',
    zIndex: 2003,
    //background: 'lightblue', // dev
    background: 'rgba(144, 238, 144, .33)',
  }
}

interface linkLogoContainerI {
  minPort: boolean,
  minLand: boolean,
}

// width 160 + 160 = 320 // same as searcher
// height 30

export const linkLogoContainer = ({ minPort, minLand }: linkLogoContainerI) => {
  return {
    ...noDeco, ...noSelect, ...flex, ...aic,
    width: minPort ? 'unset' : '320px',
    marginLeft: minPort || minLand ? '10px' : '16px',
    //background: 'darkred', // dev
    fontSize: 'x-large',
  }
}

export const linkLogo = () => {
  return {
    ...noDeco, ...noSelect, ...flex, ...aic,
    //background: 'yellow', // dev
  }
}

interface logoI {
  minPort: boolean,
  minLand: boolean,
}

export const logo = ({ minPort, minLand }: logoI) => {
  return {
    width: minPort || minLand ? '60px' : '60px',
    height: minPort || minLand ? '60px' : '60px',
  }
}

interface logoTypoI {
  minPort: boolean,
  darkMode: boolean
}

export const logoTypo = ({ minPort, darkMode }: logoTypoI) => {
  return {
    ...noDeco, ...row,
    display: minPort ? 'none' : 'flex',
    marginLeft: '5px',
    fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
    fontSize: '24px',
    fontWeight: 400,
    color: darkMode ? '#1259a6' : '#007bff',
  }
}

interface linkAboutI {
  width: number,
  minPort: boolean,
  wrongPath: boolean,
  location: string,
}

export const linkAbout = ({ width, minPort, wrongPath, location }: linkAboutI) => {
  return {
    ...noDeco, ...noSelect,
    display: location === '/about' ? 'none' : ( width < 310 && minPort ) || wrongPath ? 'none' : 'flex',
  }
}

interface typoAboutI {
  darkMode: boolean
}

export const typoAbout = ({ darkMode }: typoAboutI) => {
  return {
    ...noDeco, ...flex,
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    fontSize: 'large',
    color: darkMode ? 'white' : '#007bff',
    fontWeight: 450,
    letterSpacing: 'normal',
    lineHeight: '1.5',
  }
}

interface searcherContainerI {
  wrongPath: boolean,
  minPort: boolean,
  minLand: boolean,
}

export const searcherContainer = ({ wrongPath, minPort, minLand }: searcherContainerI) => {
  return {
    ...relative, ...jcfe,
    display: wrongPath ? 'none' : 'flex', // edit
    width: minPort ? 'unset' : '320px',
    marginRight: minPort || minLand ? '10px' : '16px',
    flexWrap: 'wrap',
  }
}