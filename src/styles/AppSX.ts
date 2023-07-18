import backgroundImage from '../images/bgImage.webp';

export const background = () => {
  return {
    display: 'flex',
    position: 'absolute',
    width: '100%',
    //position: 'fixed',
    //background: 'red',
    //backgroundImage: `url(${backgroundImage})`,
    //backgroundSize: 'cover',
    //height: '100%',
    //width: '520px', // width
    //height: '520px', // height
    //width: '100vw', // width
    //height: '100vh', // height
    //width: '1920px', // width
    //height: '900px', // height
  }
}

export const background2 = () => {
  return {
    display: 'flex',
    position: 'fixed',
    width: '100%',
    height: '100vh',
    //position: 'fixed',
    zIndex: 0,
    background: 'lightgray',
    backgroundImage: `url(${backgroundImage})`,
    //backgroundSize: 'cover',
    //height: '100%',
    //width: '520px', // width
    //height: '520px', // height
    //width: '100vw', // width
    //height: '100vh', // height
    //width: '1920px', // width
    //height: '900px', // height
  }
}