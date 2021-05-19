import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import flecha from '../../icons/flecha-derecha.svg'
import flechaDorada from '../../icons/flecha-dorada.svg'

export const Temas = ({ events }) => {

  return (
    <Col>
      <Row className='seccion_tema underline ml-3 pl-0'>Temas</Row>
      <Row className='subraya ml-3 pl-0'></Row>
      <Col className='mt-3 p-0'>
        {
          events.map((e) => {
            return (
                <Col key={e.id} className='tema_titulo1 ml-0 pt-1 mt-4'><Link to={`/publicaciones/${e.id}`}>{e.titulo}</Link></Col>
                )
          })}
      </Col>
      <Col className='mt-5'>
      <Link to={`/publicaciones`}>
        <Col xs={12} className='leer_mas pb-4 pr-4'>VER MÁS
        <img src={flecha} alt="Flecha hacia la derecha" className='flecha_azul pl-2' />
          <img src={flechaDorada} alt="Flecha hacia la derecha" className='flecha_dorada  pl-2' /></Col>
      </Link>
      </Col>
    </Col>
  )

}