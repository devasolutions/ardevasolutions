import React from "react";
import { CDBInput, CDBCard, CDBCardBody, CDBBtn, CDBLink, CDBContainer } from "cdbreact";
import Navbar from './Navbar'
const Login = () => {
  return (
      <div>
      <Navbar/>
      <div className="d-flex justify-content-center">
            <CDBCard style={{ width: "30rem", marginTop: "3em" }}>
              <CDBCardBody className="mx-4">
                <div className="text-center mt-4 mb-2">
                  <p className="h4"> Iniciar sesión </p>
                </div>
                <CDBInput material hint="E-mail" type="email" />
                <CDBInput material hint="Password" type="password" />
                <CDBBtn
                  color="dark"
                  className="btn-block my-3 mx-0" >
                    Iniciar sesión
                </CDBBtn>
              </CDBCardBody>
            </CDBCard>
    </div>
    </div>
  );
};
export default Login;