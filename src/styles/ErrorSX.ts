import {
  flex, relative, column, 
  aic, jcc, 
  jcsb, mix, noSelect
} from './CommonsSX';

interface backgroundI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
}

export const background = ({ minPort, minLand, medPort, medLand }: backgroundI) => {
  return {
    ...flex, ...relative, ...jcsb,
    marginTop: '86px',
    //background: 'darkorange', // dev
    zIndex: 2002,
    width: '100vw',
    height: 'calc(100vh - 86px)',
    minHeight: minPort || minLand || medPort || medLand ? 'none' : '530px',
  }
}

interface leftRightHelperI {
  minPort: boolean,
  minLand: boolean,
}

export const leftRightHelper = ({ minPort, minLand }: leftRightHelperI) => {
  return {
    ...flex,
    //background: 'blue',
    minWidth: minPort || minLand ? 'none' : '30px',
  }
}

interface mainContainerI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
}

export const mainContainer = ({ minPort, minLand, medPort, medLand }: mainContainerI) => {
  return {
    ...flex, ...relative, ...column, ...aic, ...jcc,
    //background: 'red',
    width: minPort ? '90vw' : minLand ? '40vw' : medPort || medLand ? '430px' : '500px',
  }
}

interface errorGifI {
  loaded: boolean,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
}

export const errorGif = ({ loaded, minPort, minLand, medPort, medLand }: errorGifI) => {
  return {
    ...relative, ...noSelect, ...flex,
    visibility: loaded ? 'visible' : 'hidden',
    width: minPort ? '65vw' : minLand ? '50vh' : medPort || medLand ? '300px' : '400px',
    height: minPort ? '65vw' : minLand ? '50vh' : medPort || medLand ? '300px' : '400px',
  }
}

interface placeholderI {
  loaded: boolean,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
}

export const placeholderAnimation = ({ loaded, minPort, minLand, medPort, medLand }: placeholderI) => {
  return {
    ...noSelect, ...relative,
    display: loaded ? 'none' : 'flex',
    marginTop: minPort ? '-65vw' : minLand ? '-50vh' : medPort || medLand ? '-300px' : '-400px',
    width: minPort ? '65vw' : minLand ? '50vh' : medPort || medLand ? '300px' : '400px',
    height: minPort ? '65vw' : minLand ? '50vh' : medPort || medLand ? '300px' : '400px',
    zIndex: 1001,
    animation: `error .8s linear infinite`,
    animationTimingFunction: 'steps(12, end)',
    '@keyframes error': {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' },
    }
  }
}

interface messageI {
  darkMode: boolean,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
}

export const message = ({ darkMode, minPort, minLand, medPort, medLand }: messageI) => {
  return {
    ...flex, ...relative, ...noSelect, ...mix,
    //color: 'white',
    color: darkMode ? 'white' : '#154f8f',
    fontSize: minPort ? '7vw' : minLand ? '5.5vh' : medPort || medLand ? '31px' : '35px',
  }
}