import React from 'react'
//import Footer from './Footer.jsx'

function About({lang}) {
  //const { lang } = Footer()
  //console.log("BB", lang)

  if (parseInt(lang) === 1) {
    return (
      <div>Esto es el 'About' y mostramos nuestro linkedIn con etiqueta a</div>
    )
  } else {
    return (
      <div>This is about</div>
    )
  }

  /* return (
    <div>Esto es el 'About' y mostramos nuestro linkedIn con etiqueta a</div>
  ) */

  
}

export default About