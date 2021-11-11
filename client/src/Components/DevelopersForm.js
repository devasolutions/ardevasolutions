import React, {useState} from "react";
import { CDBInput, CDBCard, CDBCardBody, CDBBtn, CDBContainer } from "cdbreact";
import axios from "axios";

const baseURL = "http://devasolutions.net/api/developer"

const DevelopersForm = () => {
  const [developer, setDeveloper] = useState({
    "_id": "",
    "name": {
      "first" : "",
      "last" : "",
    },
    "email": "",
    "skills": [""],
    "costumers": [],
    "description" : ""
  })
  const handleInputChange = (event) => {
    setDeveloper({
      ...developer,
      [event.target.name]: event.target.value
    })
  }

  const sendData = (event) => {
    event.preventDefault()
    console.log(developer)
    axios.post(baseURL, developer).then(response => {
      console.log(response)
    })
    .catch(e => console.log("There was an error", e)
    )
  }
  return (
    <form onSubmit={sendData}>
    <CDBContainer>
            <CDBCard style={{ width: "30rem" }}>
              <CDBCardBody className="mx-4">
                <div className="text-center mt-4 mb-4">
                  <p className="h4"> Agregar un nuevo developer </p>
                </div>
                <label htmlFor="idEmpleados" className="text-muted m-0">
                  ID
                </label>
                <CDBInput id="idEmpleados" className="mt-n3" type="text" onChange={handleInputChange} name="_id"/>
                <label htmlFor="firstEmpleados" className="text-muted m-0">
                  Nombre
                </label>
                <CDBInput id="nombreEmpleados" className="mt-n3" type="text" onChange={handleInputChange} name='name.first'/>
                <label htmlFor="lastEmpleados" className="text-muted m-0">
                  Apellido
                </label>
                <CDBInput id="lastEmpleados" className="mt-n3" type="text" onChange={handleInputChange} name='name.last'/>
                <label htmlFor="habilidadesEmpleados" className="text-muted m-0">
                  Habilidades
                </label>
                <CDBInput id="habilidadesEmpleados" className="mt-n3" type="text" onChange={handleInputChange} name="skills"/>
                <label htmlFor="correoEmpleados" className="text-muted m-0">
                  Correo
                </label>
                <CDBInput id="correoEmpleados" className="mt-n3" type="email" onChange={handleInputChange} name="email"/>
                <label htmlFor="clientesEmpleados" className="text-muted m-0">
                  Clientes
                </label>
                <CDBInput id="clientesEmpleados" className="mt-n3" type="textarea" onChange={handleInputChange} name="costumers"/>
                <label htmlFor="descEmpleados" className="text-muted m-0">
                  Descripción
                </label>
                <CDBInput id="descEmpleados" className="mt-n3" type="textarea" onChange={handleInputChange} name="description"/>
                <CDBBtn
                  outline
                  type="submit"
                  color="secondary"
                  style={{width:"40%"}}
                  className="btn-block mt-5 mx-auto" >
                  Guardar
                </CDBBtn>
              </CDBCardBody>
            </CDBCard>
    </CDBContainer>
    </form>
  );
};
export default DevelopersForm;