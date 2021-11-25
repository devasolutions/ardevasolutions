import React, {useState} from "react";
import { CDBInput, CDBCard, CDBCardBody, CDBBtn, CDBContainer } from "cdbreact";
import axios from "axios";

const baseURL = "http://devasolutions.net/api/solution"


const SolutionsForm = () => {
  const [solution, setSolution] = useState({
    "_id": "",
    "name": "",
    "technologies": [],
    
  })
  const handleInputChange = (event) => {
    setSolution({
      ...solution,
      [event.target.name]: event.target.value
    })
  }

  const sendData = (event) => {
    event.preventDefault()
    axios.post(baseURL, solution).then(response => {
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
                  <p className="h4"> Agregar una nueva solución </p>
                </div>
                <label htmlFor="idSolucion" className="text-muted m-0">
                  ID
                </label>
                <CDBInput id="idSolucion" className="mt-n3" type="text" onChange={handleInputChange} name="_id"/>
                <label htmlFor="nombreSolucion" className="text-muted m-0">
                  Nombre
                </label>
                <CDBInput id="nombreSolucion" className="mt-n3" type="text" onChange={handleInputChange} name="name"/>
                <label htmlFor="techSolucion" className="text-muted m-0">
                  Tecnologías
                </label>
                <CDBInput id="techSolucion" className="mt-n3" type="textarea" onChange={handleInputChange} name="technologies"/>
                <CDBBtn
                type="submit"
                  outline
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
export default SolutionsForm;
