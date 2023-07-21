import {
  column, flex, mix, jcsb, jcc,
  aic, noSelect, relative
} from '../styles/CommonsSX';

interface backgroundI {
  width: number,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean,
}

export const background = ({ width, minPort, minLand, medPort, medLand, larPort, larLand }: backgroundI) => {
  return {
    //height: '300px',
    //width: minPort ? `${width}px` : minLand ? `200px` : `max(35vw, 500px)`, // 500 - scrollWidth (17 approx.) === 483px
    //width: minPort ? `${width}px` : minLand ? `600px` : `max(35vw, 500px)`, // 500 - scrollWidth (17 approx.) === 483px
    //width: minPort ? `300px` : minLand ? `600px` : `max(35vw, 500px)`, // 500 - scrollWidth (17 approx.) === 483px
    width: '100%',
    height: '100%',
  }
}

interface testI {
  width: number,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean,
}

export const test = ({ width, minPort, minLand, medPort, medLand, larPort, larLand }: testI) => {
  return {
    height: '300px',
    //width: minPort ? `${width}px` : minLand ? `200px` : `max(35vw, 500px)`, // 500 - scrollWidth (17 approx.) === 483px
    //width: minPort ? `${width}px` : minLand ? `600px` : `max(35vw, 500px)`, // 500 - scrollWidth (17 approx.) === 483px
    //width: minPort ? `300px` : minLand ? `600px` : `max(35vw, 500px)`, // 500 - scrollWidth (17 approx.) === 483px
    width: minPort ? `${width}px` : minLand ? `60vw` : `max(35vw, 500px)`, // 500 - scrollWidth (17 approx.) === 483px
  }
}