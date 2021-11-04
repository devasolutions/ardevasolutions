import React, { useState } from "react";
import { CDBTable, CDBTableHeader, CDBTableBody, CDBContainer, CDBBtn, CDBModal, CDBInput } from "cdbreact";
import DevelopersForm from "./DevelopersForm";
import axios from "axios";

const baseURL = "http://devasolutions.net/api/developer";
const Developers = () => {
    const [id, setId] = useState(null)
    const [rows, setRows] = useState(null)
    const [state, setState] = useState({
        modal1: false
    });

    const removeRow = () => {
        axios.delete(`${baseURL}/${id}`).then((response => {
            let updatedDevelopers = rows.filter(row => row._id != id)
            setRows(updatedDevelopers)
        })).catch( error => {
            console.log('There was an error!', error)
        })
     }

    const toggle = (nr) => () => {
        let modalNumber = "modal" + nr;
        setState({
            ...state,
            [modalNumber]: !state[modalNumber],
        });
    };

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setRows(response.data);
        });
    })

    const [showDeleteFields, setShowDeleteFields] = useState(false)
    const triggerDelete = () => setShowDeleteFields(true)

    return (
        <div>
            <CDBContainer style={{ paddingTop: "1.5em", paddingBottom: "1.5em" }}>
                <CDBBtn color="primary" onClick={toggle(1)} style={{ marginRight: "1em" }}>Agregar developers</CDBBtn>
                <CDBBtn color="danger" onClick={triggerDelete}>Remover developers</CDBBtn>
                { showDeleteFields ? <div> 
                    <CDBInput label="id" onChange = { e => {setId(e.target.value)}}/>
                    <CDBBtn color="primary" onClick={removeRow}>Borrar</CDBBtn>
                 </div> : null }
            </CDBContainer>
            <CDBModal isOpen={state.modal1} toggle={toggle(1)} centered fade>
                <DevelopersForm />
            </CDBModal>
            <CDBTable striped>
                <CDBTableHeader>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Habilidades</th>
                        <th>Correo</th>
                        <th>Clientes</th>
                        <th>Descripción</th>
                    </tr>
                </CDBTableHeader>
                <CDBTableBody>
                    {rows ? rows.map((element) => (
                        <tr>
                            <td>{element._id}</td>
                        <td>{element.name.first + " " + element.name.last}</td>
                        <td>{element.skills.join(', ')}</td>
                        <td>{element.email}</td>
                        <td>{element.costumers.join(', ')}</td>
                        <td>{element.description}</td>
                        </tr>
                    )): "Loading..." }
                </CDBTableBody>
            </CDBTable>
        </div>
    );
};
export default Developers;