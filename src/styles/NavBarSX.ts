import {
  flex, relative, absolute, fixed, column, pointer,
  row, aic, aifs, asc, jcc, jcfe, jcfs, jcsa,
  jcsb, jcse, jsc, jic, noDeco, mix, noSelect
} from './CommonsSX';

export const background = () => {
  return {
    ...flex, ...row, ...jcsb,
    background: 'red',
  }
}

export const linkLogo = () => {
  return {
    /* ...flex, */ /* ...row,  */...aic,
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
    display: 'flex',
    flexDirection: 'row',
    margin: '-5%',
  }
}

export const typoAbout = () => {
  return {
    display: 'flex',
    /* position: 'absolute', */
    /* top: '35%', */
    /* left: '45%', */
    fontSize: 'large',
    fontWeight: 450
  }
}