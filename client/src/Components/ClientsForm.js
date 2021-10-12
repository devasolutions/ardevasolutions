import React from "react";
import { CDBInput, CDBCard, CDBCardBody, CDBBtn, CDBContainer } from "cdbreact";

const ClientsForm = () => {
    return (
        <CDBContainer>
            <CDBCard style={{ width: "30rem" }}>
              <CDBCardBody className="mx-4">
                <div className="text-center mt-4 mb-4">
                  <p className="h4"> Agregar un nuevo cliente </p>
                </div>
                <label htmlFor="defaultContactName" className="text-muted m-0">
                  Campo 1
                </label>
                <CDBInput id="defaultContactName" className="mt-n3" type="text" />
                <label htmlFor="defaultContactEmail" className="text-muted m-0">
                  Campo 2
                </label>
                <CDBInput id="defaultContactEmail" className="mt-n3" type="email" />
                <label htmlFor="defaultContactSubject" className="text-muted m-0">
                  Campo 3
                </label>
                <CDBInput id="defaultContactSubject" className="mt-n3" type="text" />
                <label htmlFor="defaultContactMessage" className="text-muted m-0">
                  Campo 4
                </label>
                <CDBInput id="defaultContactMessage" className="mt-n3" type="textarea" />
                <CDBBtn
                  outline
                  color="secondary"
                  style={{width:"40%"}}
                  className="btn-block mt-5 mx-auto" >
                  Guardar
                </CDBBtn>
              </CDBCardBody>
            </CDBCard>
    </CDBContainer>
    );
};
export default ClientsForm;