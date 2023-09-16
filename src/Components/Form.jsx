import React, { useState } from "react";

const Form = () => {

  
  const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const NAME_REGEX = /^[a-zA-Z]+$/;

  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (
      formData.name.indexOf(" ") !== 0 &&
      NAME_REGEX.test(formData.name) &&
      formData.name.length > 5 &&
      EMAIL_REGEX.test(formData.email)
    ) {
      setSuccessMessage(`¡Gracias ${formData.name}! Te contactaremos lo mas pronto posible`);
      setErrorMessage("");
      setFormData({ name: "", email: "" });
    } else {
      setErrorMessage("Verifica que tu informacion este correcta");
      setSuccessMessage("");
    }
  };

  return (
    <div className="contenedor-formulario">
      <form className="formulario" onSubmit={handleSubmit}>
        <div className="input">
          <label htmlFor="name">Ingrese su nombre</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Name" 
            value={formData.name} 
            onChange={handleInputChange}
          />
        </div>

        <div className="input">
          <label htmlFor="email">Por favor, ingrese su mail </label>
          <input 
            type="text" 
            id="email" 
            name="email" 
            placeholder="myemail@email.com"
            value={formData.email} 
            onChange={handleInputChange}
          />
        </div>
        
        <button class="favButton contactBtn" type="submit">Enviar</button>

      </form>
      {errorMessage && <h3>{errorMessage}</h3>}
      {successMessage && <h3>{successMessage}</h3>}
    </div>
  );
};

export default Form;
