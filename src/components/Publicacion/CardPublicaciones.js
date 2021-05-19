import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { CardPublicacion } from './CardPublicacion'
import pagina from '../../icons/LOGOTIPO1-2.svg'
import './CardPublicacion.css'

export const CardPublicaciones = ({ events, estilo }) => {

  return (
      <Row className='h-100 w-100 d-flex justify-content-around mx-2'>
        {events.map(event => {
          return <CardPublicacion key={event.id} event={event} estilo={estilo} />
        })}
      </Row>
  )

}