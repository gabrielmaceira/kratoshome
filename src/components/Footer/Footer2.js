import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


export const Footer2 = () => {

  return (

    <footer id="contacto__servicios">

    <img src="../img/congreso22.jpg" alt="" className="img-fluid" id="serviciosFooter__imgFondo" />

    <div className="container" id="footer__contenedorInfo">

      <div id="redes">
        <a href="https://www.instagram.com/consultoreskratos/" className="serviciosFooter__a"><img src="../img/instagram.png" alt="" className="serviciosFooter__img" />consultoreskratos</a>
        <a href="https://twitter.com/Consult_Kratos" className="serviciosFooter__a"><img src="../img/twitter.png" alt="" className="serviciosFooter__img" />@Consult_Kratos</a>
        <a href="https://www.linkedin.com/in/consultores-kratos-335511213" className="serviciosFooter__a"><img src="../img/linkedin.png" alt="" className="serviciosFooter__img" />Consultores Kratos</a>
      </div>

      <div id="info">
        <p>consultas@consultoreskratos.com</p>
        <p>+54 9 (011) 153607-0469</p>
      </div>

    </div>

  </footer>

  )

}