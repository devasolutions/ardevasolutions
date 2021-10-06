import React, {useState} from "react";
import { CDBTable, CDBTableHeader, CDBTableBody, CDBContainer, CDBBtn, CDBModal } from "cdbreact";
import SolutionsForm from "./SolutionsForm";

const Solutions = () => {
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
                <tr>
                    <td>1</td>
                    <td>Placeholder text</td>
                    <td>Placeholder text</td>
                </tr>
            </CDBTableBody>
        </CDBTable>
        </div>
    );
};
export default Solutions;
