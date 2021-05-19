import React, { useEffect, useState } from 'react'
import { MasPublicacion } from './MasPublicacion'
import { Row, Col } from 'react-bootstrap'
import { getFirestore } from '../../firebase'
import {Footer2} from '../../Footer/Footer2'

export const MasPublicaciones = () => {
  const [events, setEvents] = useState()
  const [last, setLast] = useState(15)


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {

    const db = getFirestore()

    let eventCollection = db.collection("events").orderBy("fechahora", "desc").limit(last)

    eventCollection.get().then((querySnapshot) => {
      if (querySnapshot.size === 0) {
        console.log("Sin resultados")
      }
      setEvents(querySnapshot.docs.map(doc => {
        const fullData = { id: doc.id, ...doc.data() }
        return fullData
      }))
    }).catch((error) => {
      console.log("Error trayendo los resultados", error)
    }).finally(() => {

    })

  }, [last])

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

      <div style={{marginTop:"15%"}}>
        <MasPublicacion events={events} />

        <Row className='text-center mx-3 pb-5'>
          <Col>
            <button onClick={() => setLast(last + 15)} className='boton'>VER MÁS</button>
          </Col>
        </Row>
      </div>
      <Footer2 />
    </React.Fragment>
  )


}