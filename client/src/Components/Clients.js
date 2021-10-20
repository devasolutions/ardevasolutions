import React, {useState} from "react";
import { CDBTable, CDBTableHeader, CDBTableBody, CDBContainer, CDBBtn, CDBModal } from "cdbreact";
import ClientsForm from "./ClientsForm";
import axios from "axios";

const baseURL = "http://devasolutions.net/api/costumer";
const Clients = () => {
    const [post, setPost] = useState(null);
    const [state, setState] = useState({
        modal1: false
    });
    const toggle = (nr) => () => {
        let modalNumber = "modal" + nr;
        setState({
            ...state,
            [modalNumber]: !state[modalNumber],
        });
    };
    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
        })
    })

    if(!post) return null;

    return (
        <div>
        <CDBContainer style={{paddingTop: "1.5em", paddingBottom: "1.5em"}}>
            <CDBBtn color="primary" onClick={toggle(1)} style={{marginRight: "1em"}}>Agregar clientes</CDBBtn>
            <CDBBtn color="danger">Remover clientes</CDBBtn>
        </CDBContainer>
        <CDBModal isOpen={state.modal1} toggle={toggle(1)} centered fade>
            <ClientsForm/>
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
                {post.map((element) => (
                    <tr>
                        <td>{element._id}</td>
                        <td>{element.name}</td>
                        <td>{element.email}</td>
                        <td>{element.solutions.join(", ")}</td>
                        <td>{element.work_area}</td>
                    </tr>
                ))}
            </CDBTableBody>
        </CDBTable>
        </div>
    );
};
export default Clients;