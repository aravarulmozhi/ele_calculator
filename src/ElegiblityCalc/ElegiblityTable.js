import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
import "./ElegiblityTable.css";
import { tsPropertySignature } from '@babel/types';

const ElegiblityTable=({staValu,totalOblication})=>{
  const TableRow=(rowData)=>(
    <tr>
      <td key={rowData.id}>{rowData.id}</td>
      <td key={rowData.id}>{rowData.Rate}</td>
      <td key={rowData.id}>{rowData.Monthly_Installments}</td>
      <td key={rowData.id}>{rowData.Loan_Amount}</td>
    </tr>
  )
console.log(totalOblication)
console.log(staValu)
return(
    <div className="p-5">
    <Table>
      <Thead className="border">
        <Tr>
          <Th>Tenure</Th>
          <Th>Rate</Th> 
          <Th>Monthly Installment</Th>
          <Th>Loan Amount</Th>
        </Tr>
      </Thead>
      <Tbody>
        {/* {(tableValues.value1).map(cer=>{return TableRow(cer)})} */}
      </Tbody>
    </Table>
    </div>
)
}
export default ElegiblityTable;