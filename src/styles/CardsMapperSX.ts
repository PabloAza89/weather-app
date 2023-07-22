import {
  column, flex, mix, jcsb, jcc,
  aic, noSelect, relative
} from '../styles/CommonsSX';

export const background = () => {
  return {
    ...flex, ...jcc,
    flexWrap: 'wrap',
    marginTop: '86px',
    marginBottom: '20px',
    //background: 'gray', // dev
    zIndex: 1999,
    width: '100%',
  }
}
