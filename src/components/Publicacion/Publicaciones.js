import React from 'react'
import { Publicacion } from './Publicacion'
import { Temas } from './Temas'
import { Row, Col } from 'react-bootstrap'
import './Publicacion.css'
import { Footer2 } from '../Footer/Footer2'

export const Publicaciones = ({ events, event, loading }) => {

  return (
    <React.Fragment>
<header id="header__servicios">
        {/*    <!-----------------------NAVBAR-------------------------->*/}
        <nav id="menu__servicios" className="navbar navbar-expand-lg fixed-top servicios__navbar--blanco">

          <a className="navbar-brand" href="/">
            <img src="../img/LOGO-COLOR.png" id="serviciosNavbar__logo" />
          </a>

          <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse"
            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav mr-auto container" id="serviciosNavbar__lista">

              <li className="nav-item active" id="li__servicios">
                <a className="nav-link serviciosNavbar__link" href="/" id="enlaceHome">HOME<span className="sr-only">(current)</span></a>
              </li>

              <li className="nav-item">
                <a className="nav-link serviciosNavbar__link" href="/#nosotros" id="enlaceNosotros">NOSOTROS</a>
              </li>

              <li className="nav-item">
                <a className="nav-link serviciosNavbar__link" href="/#servicios" id="enlaceServicios">SERVICIOS</a>
              </li>

              <li className="nav-item">
                <a className="nav-link serviciosNavbar__link" href="/#articulos" id="enlaceArticulos1">ARTÍCULOS</a>
              </li>

              <li className="nav-item">
                <a className="nav-link serviciosNavbar__link" href="/#contacto" id="enlaceContacto">CONTACTO</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <Col className='pt-5 pl-3 pr-3 w-100 fondo_publicaciones' style={{marginTop:"5%"}}>
        <Row>
          <Col xs={12} lg={9} className='pt-4 pb-4'>
            < Publicacion event={event} loading={loading} />
          </Col>

          <Col className='pt-4 pb-4 w-100 pl-0 divisor_vertical'>
            {events !== undefined &&
              <Temas events={events} />}
          </Col>
        </Row>

      </Col>
      <Footer2 />
    </React.Fragment>
  )

}