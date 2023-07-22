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
    ...flex,
    //display: 'none',
    ...row, ...jcsb,
    position: 'fixed',
    width: '100%',
    //width: '100%',
    height: '86px',
    alignItems: 'center',
    zIndex: 2003,
    //background: 'lightblue', // dev
    background: 'rgba(144, 238, 144, .33)',
  }
}

interface linkLogoContainerI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean,
}

// width 160 + 160 = 320 // same as searcher
// height 30

export const linkLogoContainer = ({ minPort, minLand, medPort, medLand, larPort, larLand }: linkLogoContainerI) => {
  return {
    ...noDeco, ...noSelect,
    display: 'flex',
    //width: '320px',
    width: minPort ? 'unset' : '320px',
    marginLeft: minPort || minLand ? '10px' : '16px',
    //marginLeft: '16px',
    //background: 'darkred', // dev
    alignItems: 'center',
    fontSize: 'x-large',
  }
}

export const linkLogo = () => {
  return {
    ...noDeco, ...noSelect,
    display: 'flex',
    //background: 'yellow', // dev
    alignItems: 'center',
    //fontSize: 'x-large',
  }
}

interface logoI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean,
}

export const logo = ({ minPort, minLand, medPort, medLand, larPort, larLand }: logoI) => {
  return {
    width: minPort || minLand ? '60px' : '60px',
    height: minPort || minLand ? '60px' : '60px',
  
  }
}

interface logoTypoI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean,
  darkMode: boolean
}

export const logoTypo = ({ minPort, minLand, medPort, medLand, larPort, larLand, darkMode }: logoTypoI) => {
  return {
    ...noDeco,
    //display: 'flex',
    display: minPort ? 'none' : 'flex',
    flexDirection: 'row',
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
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean,
  wrongPath: boolean,
}

export const linkAbout = ({ width, minPort, minLand, medPort, medLand, larPort, larLand, wrongPath }: linkAboutI) => {
  return {
    ...noDeco, ...noSelect,
    //display: 'none', // edit
    //display: 'flex', // edit
    display: ( width < 310 && minPort ) || wrongPath ? 'none' : 'flex', // edit
  }
}

interface typoAboutI {
  darkMode: boolean
}

export const typoAbout = ({ darkMode }: typoAboutI) => {
  return {
    ...noDeco,
    display: 'flex',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    fontSize: 'large',
    color: darkMode ? 'white' : '#007bff',
    fontWeight: 450,
    letterSpacing: 'normal',
    lineHeight: '1.5',

     // '#1259a6' : '#007bff' // '#0e3a6b',
  }
}

interface searcherContainerI {
  wrongPath: boolean,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean,
}

export const searcherContainer = ({ wrongPath, minPort, minLand, medPort, medLand, larPort, larLand }: searcherContainerI) => {
  return {
    //display: 'flex',
    //display: 'none', // edit
    display: wrongPath ? 'none' : 'flex', // edit
    position: 'relative',
    //width: '320px',
    width: minPort ? 'unset' : '320px',
    //background: 'yellow', // dev
    //marginRight: '16px',
    marginRight: minPort || minLand ? '10px' : '16px',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
  }
}