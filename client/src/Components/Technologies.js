import React, {useState} from "react";
import { CDBTable, CDBTableHeader, CDBInput, CDBTableBody, CDBContainer, CDBBtn, CDBModal } from "cdbreact";
import TechnologiesForm from "./TechnologiesForm";
import axios from "axios";

const baseURL = "http://devasolutions.net/api/technology";
const Technologies = () => {
    const config = {
        headers: {
            "x-access-token" : localStorage.getItem("token")
        }
      }
    const [id, setId] = useState(null)
    const [rows, setRows] = useState(null)
    const [state, setState] = useState({
        modal1: false
      });

      const removeRow = () => {
        axios.delete(`${baseURL}/${id}`,config).then((response => {
            let updatedTechnologies = rows.filter(row => row._id !== id)
            setRows(updatedTechnologies)
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
        axios.get(baseURL,config).then( (response)  => {
            setRows(response.data);
        });
    });

    const [showDeleteFields, setShowDeleteFields] = useState(false)
    const triggerDelete = () => setShowDeleteFields(true)
    
    
    return (
        <div>
        <CDBContainer style={{paddingTop: "1.5em", paddingBottom: "1.5em"}}>
            <CDBBtn color="primary" onClick={toggle(1)} style={{marginRight: "1em"}}>Agregar tecnologías</CDBBtn>
            <CDBBtn color="danger" onClick={triggerDelete}>Remover tecnologías</CDBBtn>
            { showDeleteFields ? <div> 
                    <CDBInput label="id" onChange = { e => {setId(e.target.value)}}/>
                    <CDBBtn color="primary" onClick={removeRow}>Borrar</CDBBtn>
                 </div> : null }
            </CDBContainer>
            <CDBModal isOpen={state.modal1} toggle={toggle(1)} centered fade>
                <TechnologiesForm/>
            </CDBModal>
        <CDBTable striped>
            <CDBTableHeader>
                <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Desarrollador</th>
                    <th>Versión</th>
                    <th>Enlace</th>
                    <th>Descripción</th>

                </tr>
            </CDBTableHeader>
            <CDBTableBody>
                {rows ? rows .map((element) => (
                    <tr>
                        <td>{element._id}</td>
                        <td>{element.name}</td>
                        <td>{element.developer}</td>
                        <td>{element.version}</td>
                        <td>{element.link}</td>
                        <td>{element.description}</td>
                    </tr>
                )): "Loading..."}
            </CDBTableBody>
        </CDBTable>
        </div>
    );
};
export default Technologies;
