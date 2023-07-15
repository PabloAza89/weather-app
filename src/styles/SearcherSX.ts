// width 160 + 160 = 320
// height 30

export const background = () => {
  return {
    ':hover': {
      background: 'yellow',
    }
  }
}

export const tooltip = () => {
  return {
    //backgroundColor: 'yellow',
    //background: 'yellow',
    background: '#f5f5f9',
    //color: 'rgba(0, 0, 0, 0.87)',
    color: 'red',
  }
}

export const input = () => {
  return {
    background: '#F0F0F0',
    borderRadius: '0px',
    width: '160px',
    height: '30px',
    ':hover': {
      background: '#F0F0F0',
    }
  }
}

export const inputStyleProps = () => {
  return {
    width: '160px',
    height: '30px',
    borderRadius: '0px',
  }
}

export const button = () => {
  return {
    background: '#F0F0F0',
    borderRadius: '0px',
    color: 'rgb(0, 0, 0)',
    fontWeight: 400,
    fontSize: '16px',
    width: '160px',
    letterSpacing: 'normal',
    lineHeight: '24px',
    height: '30px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    ':hover': {
      background: '#e6e6e6',
    }
  }
}