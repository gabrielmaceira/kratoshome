import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './CardPublicacion.css'
import './Publicacion'
import flecha from '../../icons/flecha-derecha.svg'
import flechaDorada from '../../icons/flecha-dorada.svg'
import pagina from '../../icons/pagina.svg'

export const CardPublicacion = ({ event, estilo }) => {

  return (

    <Col xs={11} lg={4} className={`mb-5 hover_scale p-1 mr-0`}>
      <Col className={`${estilo} d-flex flex-column text-center h-100`}>
        <Col className='m-0 p-0'>
          <Col className='m-0 p-0 d-flex align-items-stretch flex-row'>
            <Col xs={2} sm={2} className='icon_header mt-2 align-items-start'>
              <img src={pagina} alt="Icono página"/>
            </Col>
            <Col xs={10}sm={10} className='titulo_cards ml-3 mt-4'>{event.titulo}</Col>
          </Col>
          <Col xs={12} className='card_body mt-4'
            dangerouslySetInnerHTML={{ __html: event.descripcion.substr(0, 400) + "..." }}>
          </Col>
        </Col>
        <Link to={`/publicaciones/${event.id}`}>
          <Col xs={12} className='leer_mas pb-4 pr-4'>LEER MÁS
        <img src={flecha} alt="Flecha hacia la derecha" className='flecha_azul pl-2' />
            <img src={flechaDorada} alt="Flecha hacia la derecha" className='flecha_dorada  pl-2' /></Col>
        </Link>
      </Col>
    </Col >

  )

}