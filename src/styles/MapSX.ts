interface backgroundI {
  scrollWidth: number,
  width: number,
  minPort: boolean,
  minLand: boolean,
}

export const background = ({ scrollWidth, width, minPort, minLand }: backgroundI) => {
  return {
    height: '300px',
    width: minPort ? `${width}px` : minLand ? `60vw` : `max(35vw, ${500 - scrollWidth}px)`, // 500 - scrollWidth (17 approx.) === 483px
  }
}

export const mapContainer = () => {
  return {
    width: '100%',
    height: '100%',
  }
}