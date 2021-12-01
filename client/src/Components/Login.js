import React, {useState} from "react";
import { useHistory } from "react-router";
import { CDBInput, CDBCard, CDBCardBody, CDBBtn, CDBLink, CDBContainer } from "cdbreact";
import Navbar from './Navbar'
import axios from 'axios';

const Login = () => {
  const [loginUsername, setloginUsername] = useState("");
  const [loginPassword, setloginPassword] = useState("");
  const history = useHistory();
  const loginUser = () =>{
    axios.post("http://devasolutions.net/api/login", {email: loginUsername, password: loginPassword})
    .then(res => {
      console.log(res.data.token);
      localStorage.setItem('token', res.data.token);
      console.log(localStorage.getItem('token'));

    });
    
    history.push('/');
  }

  return (
      <div>
      <Navbar/>
      <div className="d-flex justify-content-center">
            <CDBCard style={{ width: "30rem", marginTop: "3em" }}>
              <CDBCardBody className="mx-4">
                <div className="text-center mt-4 mb-2">
                  <p className="h4"> Iniciar sesión </p>
                </div>
                <CDBInput material hint="E-mail" type="email" onChange = {(e) => setloginUsername(e.target.value)}/>
                <CDBInput material hint="Password" type="password" onChange = {(e) => setloginPassword(e.target.value)}/>
                <CDBBtn
                  color="dark"
                  className="btn-block my-3 mx-0" onClick = {loginUser}>
                    Iniciar sesión
                </CDBBtn>
              </CDBCardBody>
            </CDBCard>
    </div>
    </div>
  );
};
export default Login;