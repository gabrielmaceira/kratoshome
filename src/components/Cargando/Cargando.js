import React from 'react'
import { Spinner, Col } from 'react-bootstrap'
import './Cargando.css'

export const Cargando = () => {

  return (<React.Fragment>
    <Col className='text-center'>
      <Spinner animation="border" role="status" variant="info" className="mt-2" /> <br />
      <div className='cargando'>Cargando...</div>
    </Col>
  </React.Fragment>)

}