import React, {useState} from "react";
import { CDBTable, CDBTableHeader, CDBTableBody, CDBContainer, CDBBtn, CDBModal } from "cdbreact";
import SolutionsForm from "./SolutionsForm";
import axios from "axios";
const baseURL = "http://devasolutions.net/api/solution";
const Solutions = () => {
    const [post, setPost] = React.useState(null);
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
      });
    
    if(!post) return null;

    return (
        <div>
        <CDBContainer style={{paddingTop: "1.5em", paddingBottom: "1.5em"}}>
            <CDBBtn color="primary" onClick={toggle(1)} style={{marginRight: "1em"}}>Agregar soluciones</CDBBtn>
            <CDBBtn color="danger">Remover soluciones</CDBBtn>
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
                {post.map((element) => (
                    <tr>
                        <td>{element._id}</td>
                        <td>{element.name}</td>
                        <td>{element.technologies.join(', ')}</td>
                    </tr>
                ))}
            </CDBTableBody>
        </CDBTable>
        </div>
    );
};
export default Solutions;
