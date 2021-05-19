import React from 'react'
import { CardPublicacion } from '../CardPublicacion'
import { Row } from 'react-bootstrap'

export const MasPublicacion = ({ events }) => {

  return (
    events !== undefined ?
      <Row className='text-center d-flex justify-content-around mx-2'>
        {events.map((ev) => {
          return <CardPublicacion key={ev.id} event={ev} estilo={"cardPublicacion"} />
        })}
      </Row>
      :
      <div>Cargando</div>
  )


}