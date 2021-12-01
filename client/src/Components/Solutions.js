import React, {useState} from "react";
import { CDBTable, CDBInput, CDBTableHeader, CDBTableBody, CDBContainer, CDBBtn, CDBModal } from "cdbreact";
import SolutionsForm from "./SolutionsForm";
import axios from "axios";
const baseURL = "http://devasolutions.net/api/solution";
const Solutions = () => {
    const [id, setId] = useState(null)
    const [rows, setRows] = useState(null)
    const config = {
        headers: {
            "x-access-token" : localStorage.getItem("token")
        }
    }
    const [state, setState] = useState({
        modal1: false
      });

      const removeRow = () => {
        axios.delete(`${baseURL}/${id}`,config).then((response => {
            let updatedSolutions = rows.filter(row => row._id !== id)
            setRows(updatedSolutions)
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
          axios.get(baseURL,config).then((response) => {
              setRows(response.data);
          })
      });

      const [showDeleteFields, setShowDeleteFields] = useState(false)
      const triggerDelete = () => setShowDeleteFields(true)
    
    return (
        <div>
        <CDBContainer style={{paddingTop: "1.5em", paddingBottom: "1.5em"}}>
            <CDBBtn color="primary" onClick={toggle(1)} style={{marginRight: "1em"}}>Agregar soluciones</CDBBtn>
            <CDBBtn color="danger" onClick={triggerDelete}>Remover soluciones</CDBBtn>
                { showDeleteFields ? <div> 
                    <CDBInput label="id" onChange = { e => {setId(e.target.value)}}/>
                    <CDBBtn color="primary" onClick={removeRow}>Borrar</CDBBtn>
                 </div> : null }
            </CDBContainer>
            <CDBModal isOpen={state.modal1} toggle={toggle(1)} centered fade>
                <SolutionsForm/>
            </CDBModal>
        <CDBTable striped>
            <CDBTableHeader>
                <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Tecnologías</th>
                </tr>
            </CDBTableHeader>
            <CDBTableBody>
                {rows ? rows.map((element) => (
                    <tr>
                        <td>{element._id}</td>
                        <td>{element.name}</td>
                        <td>{element.technologies.join(', ')}</td>
                    </tr>
                )): "Loading..." }
            </CDBTableBody>
        </CDBTable>
        </div>
    );
};
export default Solutions;
