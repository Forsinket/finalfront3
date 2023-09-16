import React from 'react'
import Form from '../Components/Form'
import "../Styles/contactStyles.css"


const Contact = () => {

  return (
    <div className='contact vista'>
      <h2>Tienes dudas?</h2>
      <p>Ingresa tu nombre e email para ponernos en contacto contigo</p>
      <Form/>
    </div>
  )
}

export default Contact
