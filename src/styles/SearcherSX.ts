// width 160 + 160 = 320
// height 30

export const input = () => {
  return {
    background: '#F0F0F0',
    borderRadius: '0px',
    width: '130px',
    height: '30px',
    ':hover': {
      background: '#F0F0F0',
    }
  }
}

export const inputStyleProps = () => {
  return {
    width: '130px',
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
    width: '130px',
    letterSpacing: 'normal',
    lineHeight: '24px',
    height: '30px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    ':hover': {
      background: '#e6e6e6',
    }
  }
}