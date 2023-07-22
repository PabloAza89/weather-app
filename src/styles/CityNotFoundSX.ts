import {
  flex, jcc,
  aic, noSelect} from '../styles/CommonsSX';

interface backgroundI {
  darkMode: boolean
}

export const background = ({ darkMode }: backgroundI) => {
  return {
    ...noSelect, ...flex, ...jcc, ...aic,
    color: darkMode ? 'white' : '#0e3a6b',
    //background: 'gray', // dev
    marginTop: '86px',
    padding: '0px 40px',
    minHeight: '154px',
    height: 'calc(100vh - 86px)',
    width: '100vw',
    zIndex: 2000,
    textAlign: 'center',
  }
}

