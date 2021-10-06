import React, {useState} from "react";
import { CDBTable, CDBTableHeader, CDBTableBody, CDBContainer, CDBBtn, CDBModal } from "cdbreact";
import TechnologiesForm from "./TechnologiesForm";

const Technologies = () => {
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
            <CDBBtn color="primary" onClick={toggle(1)} style={{marginRight: "1em"}}>Agregar tecnologías</CDBBtn>
            <CDBBtn color="danger">Remover tecnologías</CDBBtn>
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
                <tr>
                    <td>1</td>
                    <td>Placeholder text</td>
                    <td>Placeholder text</td>
                    <td>Placeholder text</td>
                    <td>Placeholder text</td>
                    <td>Placeholder text</td>
                </tr>
            </CDBTableBody>
        </CDBTable>
        </div>
    );
};
export default Technologies;
