import React from "react";
import { CDBTable, CDBTableHeader, CDBTableBody } from "cdbreact";

const Technologies = () => {
    return (
        <CDBTable striped>
            <CDBTableHeader>
                <tr>
                    <th>#</th>
                    <th>Columna Technologies 1</th>
                    <th>Columna Technologies 2</th>
                    <th>Columna Technologies 3</th>
                </tr>
            </CDBTableHeader>
            <CDBTableBody>
                <tr>
                    <td>1</td>
                    <td>Placeholder text</td>
                    <td>Placeholder text</td>
                    <td>Placeholder text</td>
                </tr>
            </CDBTableBody>
        </CDBTable>
    );
};
export default Technologies;
