import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CDBNavbar, CDBNavBrand, CDBNavItem, CDBNavLink, CDBDropDown, CDBDropDownMenu, CDBDropDownToggle, CDBBtn, CDBNavToggle, CDBCollapse, CDBNavbarNav, CDBContainer } from "cdbreact";
import Login from './Login'

const Navbar = () => {
    const [collapse2, setCollapse2] = useState(false);
    const bgBlack = { backgroundColor: "#000000", color: "#f4f4f4" };


    return (
        <CDBNavbar style={bgBlack} dark expand="md" scrolling>
            <CDBNavBrand href="/">
                <strong>Ardevasolutions</strong>
            </CDBNavBrand>
            <CDBNavToggle
                onClick={() => {
                    setCollapse2(!collapse2);
                }}
            />
            <CDBCollapse id="navbarCollapse1" isOpen={collapse2} navbar>
                <CDBNavbarNav left className="align-items-center">
                </CDBNavbarNav>
                <CDBNavbarNav right>
                    <CDBNavItem>
                        Nombre del administrador
                    </CDBNavItem>
                    <CDBNavItem>
                        <CDBBtn color="white" style={{ padding: "0px 10px" }}>
                            <CDBNavLink to="/login" style={{ color: "#000" }}>
                                Iniciar sesión
                            </CDBNavLink>
                        </CDBBtn>
                    </CDBNavItem>
                </CDBNavbarNav>
            </CDBCollapse>
        </CDBNavbar>
    )
}

export default Navbar
