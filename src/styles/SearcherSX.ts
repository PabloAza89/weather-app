// width 182 // larPort
// height 60 // larPort
// width 160 + 160 = 320 // larLand
// height 30 // larLand

interface tooltipI {
  larPort: boolean,
  larLand: boolean,
}

export const tooltip = ({ larPort, larLand }: tooltipI) => {
  return {
    background: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    border: '1px solid #dadde9',
    zIndex: 3000,
  }
}

interface backgroundI {
  currentWidth: number,
  larPort: boolean,
  larLand: boolean,
}

export const background = ({ currentWidth, larPort, larLand }: backgroundI) => {
  return {
    width: currentWidth < 737 ? '160px' : '320px',
    background: 'orange',
  }
}

export const innerTooltip = () => {
  return {
  }
}

export const innerTooltipOne = () => {
  return {
    fontWeight: '400',
    fontFamily: 'Roboto',
    fontSize: '14px',
  }
}

export const innerTooltipTwo = () => {
  return {
    fontWeight: 'normal',
    fontFamily: 'Roboto',
    fontSize: '12px',

  }
}

export const labelStyle = () => {
  return {
    width: '160px',
    height: '30px',
  }
}

interface inputI {
  larPort: boolean,
  larLand: boolean,
}

export const input = ({ larPort, larLand }: inputI) => {
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

interface buttonI {
  larPort: boolean,
  larLand: boolean,
}

export const button = ({ larPort, larLand }: buttonI) => {
  return {
    background: '#F0F0F0',
    borderRadius: '0px',
    color: 'rgb(0, 0, 0)',
    border: '1px solid rgba(0, 0, 0, 0.23)',
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

interface inputStylePropsI {
  larPort: boolean,
  larLand: boolean,
}

export const inputStyleProps = ({ larPort, larLand }: inputStylePropsI) => {
  return {
    display: 'flex',
    width: '160px',
    height: '30px',
    borderRadius: '0px',
  }
}