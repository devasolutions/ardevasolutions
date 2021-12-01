import React, {useState} from "react";
import { CDBInput, CDBCard, CDBCardBody, CDBBtn, CDBContainer } from "cdbreact";
import axios from "axios";

const baseURL = "http://devasolutions.net/api/technology"

const TechnologiesForm = () => {
  const config = {
    headers: {
        "x-access-token" : localStorage.getItem("token")
    }
  }
  const [technology, setTechnology] = useState({
    "name": "",
    "developer": "",
    "version" : "",
    "link": "",
    "description" : ""
  })
  const handleInputChange = (event) => {
    setTechnology({
      ...technology,
      [event.target.name]: event.target.value
    })
  }

  const sendData = (event) => {
    event.preventDefault()
    axios.post(baseURL, technology, config).then(response => {
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
                  <p className="h4"> Agregar tecnologías </p>
                </div>
                <label htmlFor="idTech" className="text-muted m-0" >
                  ID
                </label>
                <CDBInput id="idTech" className="mt-n3" type="text" onChange={handleInputChange} name="_id"/>
                <label htmlFor="nombreTech" className="text-muted m-0">
                  Nombre
                </label>
                <CDBInput id="nombreTech" className="mt-n3" type="text" onChange={handleInputChange} name="name"/>
                <label htmlFor="devTech" className="text-muted m-0">
                  Desarrollador
                </label>
                <CDBInput id="devTech" className="mt-n3" type="text" onChange={handleInputChange} name="developer"/>
                <label htmlFor="versionTech" className="text-muted m-0">
                  Versión
                </label>
                <CDBInput id="versionTech" className="mt-n3" type="text" onChange={handleInputChange} name="version"/>
                <label htmlFor="enlaceTech" className="text-muted m-0">
                  Enlace
                </label>
                <CDBInput id="enlaceTech" className="mt-n3" type="text" onChange={handleInputChange} name="link"/>
                <label htmlFor="descTech" className="text-muted m-0">
                  Descripción
                </label>
                <CDBInput id="descTech" className="mt-n3" type="textarea" onChange={handleInputChange} name="description"/>
                
                <CDBBtn
                type="submit"
                  outline
                  color="secondary"
                  style={{width:"40%"}}
                  className="btn-block mt-5 mx-auto" >
                  Send
                </CDBBtn>
              </CDBCardBody>
            </CDBCard>
    </CDBContainer>
    </form>
  );
};
export default TechnologiesForm;
