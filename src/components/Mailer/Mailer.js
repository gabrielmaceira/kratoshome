import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import '../Home/Home.css'

export const Mailer = () => {
  const [disabledButton, setDisabledButton] = useState(false)

  function sendEmail(e) {
    e.preventDefault();

    let element = document.getElementById("formulario__boton")
    element.classList.add("disabled")
    setDisabledButton(true)

    if (e.target[0].value !== "" &&
      e.target[1].value !== "" &&
      e.target[2].value !== "" &&
      e.target[3].value !== "" &&
      e.target[4].value !== "") {

      emailjs.sendForm(process.env.REACT_APP_SERVICE,
        process.env.REACT_APP_TEMPLATE,
        e.target,
        process.env.REACT_APP_USER)
        .then((result) => {
          alert("¡Tu mensaje fue enviado con éxito!")
          element.classList.remove("disabled")
          setDisabledButton(false)
          clearForm()
        }, (error) => {
          console.log(error.text);
        });
    }

    else (alert("Por favor completá todos los campos del formulario de contacto"))

  }

  const clearForm = () => {
    const values = ['user_name', 'user_lastname', 'user_email', 'user_phone', 'message']

    values.map((value) => {
      const valueId = document.getElementById(value);
      return valueId.value = ""
    })

  }

  return (
    /* A ESTO LE FALTA TODO EL FORMATO */
    /*     <form className="contact-form" onSubmit={sendEmail}>
          <input type="hidden" name="contact_number" />
          <input type="text" id='user_name' name="user_name" placeholder='Nombre'/>
          <input type="text" id='user_lastname' name="user_lastname" placeholder='Apellido' />
          <input type="email" id='user_email' name="user_email" placeholder='Email' />
          <input type="text" id='user_phone' name="user_phone" placeholder='Teléfono' />
          <textarea name="message" id='message' placeholder='Descripción' />
          <input type="submit" value="Enviar" />
        </form>
     */

    <form id="contenedorInfo__formulario" className="col" onSubmit={sendEmail}>
      <div className="form-group form-row">
        <div className="col">
          <input type="text" className="form-control" id='user_name' name="user_name" placeholder="Nombre" required />
        </div>
        <div className="col">
          <input type="text" className="form-control" id='user_lastname' name="user_lastname" placeholder="Apellido" required />
        </div>
      </div>
      <div className="form-group form-row">
        <div className="col">
          <input type="email" className="form-control" id='user_email' name="user_email" placeholder="Correo electrónico" required />
        </div>
        <div className="col">
          <input type="number" className="form-control" id='user_phone' name="user_phone" placeholder="Número de teléfono" required />
        </div>
      </div>
      <div className="form-row pl-1 pr-1">
        <textarea className="form-control" name="message" id='message' rows="3" placeholder="Detalles" required></textarea>
      </div>
      <div className='text-center'>
        <button type="submit" className="btn" id="formulario__boton" disabled={disabledButton}>ENVIAR</button>
      </div>
    </form>
  )
}