import {
  column, flex, mix, jcsb, jcc,
  aic, noSelect, relative
} from '../styles/CommonsSX';

interface backgroundI {
  scrollWidth: number,
  width: number,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean,
}

export const background = ({ scrollWidth, width, minPort, minLand, medPort, medLand, larPort, larLand }: backgroundI) => {
  return {
    height: '300px',
    width: minPort ? `${width}px` : minLand ? `60vw` : `max(35vw, ${500 - scrollWidth}px)`, // 500 - scrollWidth (17 approx.) === 483px
  }
}

interface mapContainerI {
  width: number,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean,
}

export const mapContainer = ({ width, minPort, minLand, medPort, medLand, larPort, larLand }: mapContainerI) => {
  return {
    width: '100%',
    height: '100%',
  }
}