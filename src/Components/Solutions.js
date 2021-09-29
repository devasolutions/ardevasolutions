import React from "react";
import { CDBTable, CDBTableHeader, CDBTableBody, CDBContainer } from "cdbreact";

const Solutions = () => {
    return (
        <CDBTable striped>
            <CDBTableHeader>
                <tr>
                    <th>#</th>
                    <th>Columna Solutions 1</th>
                    <th>Columna Solutions 2</th>
                    <th>Columna Solutions 3</th>
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
export default Solutions;
