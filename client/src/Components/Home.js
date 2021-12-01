import React from 'react'
import Navbar from './Navbar'
import { CDBNavLink } from "cdbreact";

const Home = () => {
    console.log("Token: " + localStorage.getItem("token"));
    return (
        <div>
            <Navbar />
            <div style={{ paddingTop: "3em" }}>
                <div className="row justify-content-md-center">
                    <div className="col col-lg-2">
                    <CDBNavLink to="/solutions">
                    <button type="button" class="btn btn-primary btn-lg btn-block">Soluciones</button>
                    </CDBNavLink>
                    </div>
                    <div className="col col-lg-2 ">
                    <CDBNavLink to="/clients">
                        <button type="button" class="btn btn-primary btn-lg btn-block">Clientes</button>
                        </CDBNavLink>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col col-lg-2">
                    <CDBNavLink to="/technologies">
                        <button type="button" class="btn btn-primary btn-lg btn-block" style={{marginTop: "3em"}}>Tecnologías</button>
                        </CDBNavLink>
                    </div>
                    <div className="col col-lg-2">
                    <CDBNavLink to="/developers">
                        <button type="button" class="btn btn-primary btn-lg btn-block" style={{marginTop: "3em"}}>Developers</button>
                        </CDBNavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
