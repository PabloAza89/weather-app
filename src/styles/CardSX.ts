import {
  flex, relative, absolute, fixed, column, pointer,
  row, aic, aifs, asc, jcc, jcfe, jcfs, jcsa,
  jcsb, jcse, jsc, jic, noDeco, mix, noSelect
} from './CommonsSX'; // ALL VARS

// width 290
// height 210

export const background = () => {
  return {
    display: 'flex',
    flexDirection: 'column',
    margin: '20px',
    width: '290px',
    height: '210px',
    borderRadius: '4px',
    border: '1px solid rgba(0,0,0,.125)',
    //backgroundColor: 'darkred',
    background: 'rgba(232, 62, 140, .15)',
    padding: '8px',
    justifyContent: 'space-between',
  }
}

export const button = () => {
  return {
    //background: 'red',
    minWidth: '26px !important',
    width: '26px !important',
    minHeight: '31px !important',
    height: '31px !important',
    background: '#dc3545',
    color: '#fff',
    fontWeight: 400,
    //padding: '0px !important',
    paddingTop: '7px',
    alignSelf: 'flex-end',
    ':hover': {
      background: '#c82333',
    }
  }
}

export const cityName = () => {
  return {
    ...noDeco,
    display: 'flex',
    position: 'relative',
    //background: 'red',
    // minWidth: '26px !important',
    // width: '26px !important',
    // minHeight: '31px !important',
    // height: '31px !important',
    // background: '#dc3545',
    color: '#007bff',
    fontSize: '28px',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    fontWeight: 500,
    // //padding: '0px !important',
    // paddingTop: '7px',
    // ':hover': {
    //   background: '#c82333',
    // }
  }
}

export const cityNameLink = () => {
  return {
    ...noDeco, ...noSelect,
    display: 'flex',
    //position: 'relative',
    //background: 'red',
    // minWidth: '26px !important',
    // width: '26px !important',
    // minHeight: '31px !important',
    // height: '31px !important',
    background: 'yellow',
    width: 'fit-content',
    color: '#007bff',
    fontSize: '28px',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    fontWeight: 500,
    alignSelf: 'center',
    // //padding: '0px !important',
    // paddingTop: '7px',
    // ':hover': {
    //   background: '#c82333',
    // }
  }
}

export const countryName = () => {
  return {
    ...noSelect,
    lineHeight: '18.4px',
    color: 'rgb(33, 37, 41)',
    fontSize: '13px',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    fontWeight: 500,
    alignSelf: 'center',
  }
}

export const minMax = () => {
  return {
    ...noSelect,
    display: 'flex',
    flexDirection: 'column',
    background: 'yellow',
    width: '80px',
    height: '80px',
    lineHeight: '24px',
    color: 'rgb(33, 37, 41)',
    fontSize: '20px',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    fontWeight: 500,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  }
}

export const minMaxIcon = () => {
  return {
    // lineHeight: '24px',
    // color: 'rgb(33, 37, 41)',
    // fontSize: '20px',
    // fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    // fontWeight: 500,
    display: 'flex',
    flexDirection: 'row',
    background: 'darkred',
    justifyContent: 'space-evenly',
    
  }
}