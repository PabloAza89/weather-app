import {
  column, flex, mix, jcsb, jcc,
  aic, noSelect, relative
} from '../styles/CommonsSX';

interface backgroundI {
  darkMode: boolean
}

export const background = ({ darkMode }: backgroundI) => {
  return {
    ...noSelect,
    display: 'flex',
    // '#1259a6' : '#007bff'
    //color: 'red',
    //color: 'white',
    color: darkMode ? 'white' : '#0e3a6b',
    //background: 'gray', // dev
    marginTop: '86px',
    //height: '86px',
    //padding: '0px 35px',
    padding: '0px 40px',
    //height: '100vh',
    minHeight: '154px',
    height: 'calc(100vh - 86px)',
    width: '100vw',
    //width: '80vw',
    zIndex: 2000,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  }
}

