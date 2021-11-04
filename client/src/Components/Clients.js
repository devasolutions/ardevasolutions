import React, { useState, useEffect } from "react";
import { CDBTable, CDBTableHeader, CDBTableBody, CDBContainer, CDBBtn, CDBModal, CDBInput } from "cdbreact";
import ClientsForm from "./ClientsForm";
import axios from "axios";

const baseURL = "http://devasolutions.net/api/costumer";
const customers = {
    "data" : [
        {
            "_id": 123,
            "name" : "Name sample",
            "email" : "email@email.com",
            "solutions" : "solutions sample",
            "work_area" : "work area sample"
        },
        {
            "_id": 456,
            "name" : "Name sample",
            "email" : "email@email.com",
            "solutions" : "solutions sample",
            "work_area" : "work area sample"
        },
        {
            "_id": 789,
            "name" : "Name sample",
            "email" : "email@email.com",
            "solutions" : "solutions sample",
            "work_area" : "work area sample"
        }
    ]
}
const Clients = () => {
    // const [post, setPost] = useState(null)
    const [id, setId] = useState(null)
    const [rows, setRows] = useState(customers.data)
    const [state, setState] = useState({
        modal1: false
    });

    const removeRow = () => {
        let updatedCustomers = rows.filter(row => row._id != id)
        console.log(updatedCustomers)
        setRows(updatedCustomers)
     }

    const toggle = (nr) => () => {
        let modalNumber = "modal" + nr;
        setState({
            ...state,
            [modalNumber]: !state[modalNumber],
        });
    };
    // useEffect(() => {
    //     axios.get(baseURL).then((response) => {
    //         setPost(response.data);
    //     })
    // })



    const [showDeleteFields, setShowDeleteFields] = useState(false)
    const triggerDelete = () => setShowDeleteFields(true)
    
    // if (!post) return null;

    return (
        <div>
            <CDBContainer style={{ paddingTop: "1.5em", paddingBottom: "1.5em" }}>
                <CDBBtn color="primary" onClick={toggle(1)} style={{ marginRight: "1em" }}>Agregar clientes</CDBBtn>
                <CDBBtn color="danger" onClick={triggerDelete}>Remover clientes</CDBBtn>
                { showDeleteFields ? <div> 
                    <CDBInput label="id" onChange = { e => {setId(e.target.value)}}/>
                    <CDBBtn color="primary" onClick={removeRow}>Borrar</CDBBtn>
                 </div> : null }
            </CDBContainer>
            <CDBModal isOpen={state.modal1} toggle={toggle(1)} centered fade>
                <ClientsForm />
            </CDBModal>
            <CDBTable striped>
                <CDBTableHeader>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Soluciones</th>
                        <th>Area de Trabajo</th>
                    </tr>
                </CDBTableHeader>
                <CDBTableBody>
                    {rows ? rows.map((element) => (
                        <tr>
                            <td key={element._id}>{element._id}</td>
                            <td>{element.name}</td>
                            <td>{element.email}</td>
                            <td>{element.solutions}</td>
                            <td>{element.work_area}</td>
                        </tr>
                    )) : "Loading..."}
                </CDBTableBody>
            </CDBTable>
        </div>
    );
};
export default Clients;