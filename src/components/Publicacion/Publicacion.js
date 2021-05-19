import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { formatDate } from '../../utils/formatDate'
import { Cargando } from '../Cargando/Cargando'
import './Publicacion.css'

export const Publicacion = ({ event, loading }) => {

  let fecha = undefined

  console.log(event !== undefined)
  console.log(event.descripcion)
  console.log(event.fechahora !== undefined)

  if (event !== undefined && event.descripcion !== undefined && event.fechahora !== undefined) {
    const milliseconds = event.fechahora.seconds * 1000
    const fechaEv = new Date(milliseconds)
    fecha = formatDate(fechaEv.toISOString().substring(0, 10))
  }

  return (
    loading ? <Cargando /> :
      <Col>
        {(event === undefined || event.descripcion === undefined) &&
          <div>No se encontró el documento. {<br></br>}
          Por favor elegí uno de la lista de Temas</div>}
        {event !== undefined && event.descripcion !== undefined &&
          <Row>
            <Col xs={12} className='text-center d-flex flex-column'>
              <h2 className='publicacion_titulo'>{event.titulo}</h2>
              <div className='titulo_div'></div>
            </Col>
            {fecha !== undefined &&
              <Col xs={12} className='publicacion_body mt-3'><strong>Publicado el {fecha}</strong></Col>}
            <Col xs={12} className='publicacion_por mt-1'>Por: {event.por}</Col>
            <Col xs={12} className='publicacion_body mt-4' dangerouslySetInnerHTML={{ __html: event.descripcion }}></Col>
          </Row>
        }
      </Col>
  )

}