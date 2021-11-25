import React, { useState } from "react";
import { CDBInput, CDBCard, CDBCardBody, CDBBtn, CDBContainer } from "cdbreact";
import axios from "axios";

const baseURL = "http://devasolutions.net/api/costumer";

const ClientsForm = () => {
  const [client, setClient] = useState({
    "_id": "",
    "name": "",
    "email": "",
    "solutions": [],
    "work_area": "",
  })
  const handleInputChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    setClient({
      ...client,
      [event.target.name]: event.target.value
    })
  }

  const sendData = (event) => {
    event.preventDefault()
    console.log(client)
    // console.log(client.name, client.solution, client.email)
    axios.post(baseURL, client).then(response => console.log(response))
    .catch(e => console.log("There was an error", e)
    )
  }

return (
  <form onSubmit={sendData}>
    <CDBContainer>
      <CDBCard style={{ width: "30rem" }}>
        <CDBCardBody className="mx-4">
          <div className="text-center mt-4 mb-4">
            <p className="h4"> Agregar un nuevo cliente </p>
          </div>
          <label htmlFor="idClientes" className="text-muted m-0">
            ID
          </label>
          <CDBInput id="idClientes" className="mt-n3" type="text" onChange={handleInputChange} name="_id" />
          <label htmlFor="nombreCliente" className="text-muted m-0">
            Nombre
          </label>
          <CDBInput id="nombreCliente" className="mt-n3" type="text" onChange={handleInputChange} name="name" />
          <label htmlFor="emailCliente" className="text-muted m-0">
            Email
          </label>
          <CDBInput id="emailCliente" className="mt-n3" type="text" onChange={handleInputChange} name="email" />
          <label htmlFor="solucionCliente" className="text-muted m-0">
            Soluciones
          </label>
          <CDBInput id="solucionCliente" className="mt-n3" type="textarea" onChange={handleInputChange} name="solution" />
          <label htmlFor="areaCliente" className="text-muted m-0">
            Área de trabajo
          </label>
          <CDBInput id="areaCliente" className="mt-n3" type="textarea" onChange={handleInputChange} name="work_area" />
          <CDBBtn
            type="submit"
            outline
            color="secondary"
            style={{ width: "40%" }}
            className="btn-block mt-5 mx-auto" >
            Guardar
          </CDBBtn>
        </CDBCardBody>
      </CDBCard>
    </CDBContainer>
  </form>
);
};
export default ClientsForm;