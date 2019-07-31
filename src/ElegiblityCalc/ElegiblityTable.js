import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
import "./ElegiblityTable.css";
import { tsPropertySignature } from '@babel/types';

const ElegiblityTable=({StateVal})=>{

  const conv_number=(expr,decplaces)=>{
		  var str = "" + Math.round(eval(expr) * Math.pow(10,decplaces));
		  while (str.length <= decplaces){
		    str = "0" + str;
	  }
	    var decpoint = str.length - decplaces;
      return (str.substring(0,decpoint) + "." + str.substring(decpoint,str.length));
    }

  const	PV=(rate,per,nper,pmt,fv)=>{
      nper=parseFloat(nper);
      pmt=parseFloat(pmt);
      fv=parseFloat(fv);
      let pv_value,x,y;
      rate=eval((rate)/(per*100))
      if((pmt==0)||(nper==0)){
        alert("can't calculate with zero");
        return(0);
      }
      if(rate==0)//interest rate is 0
      {
        pv_value =-(fv+(pmt*nper));
      }
      else{
        x = Math.pow(1 + rate, -nper);
        y = Math.pow(1 + rate, nper);
        pv_value = - ( x * ( fv * rate - pmt + y * pmt )) / rate;
      }
      pv_value = this.conv_number(pv_value,2);
      return (pv_value);
  }


//age >23
const calAgeEle=(d)=>{
  let today=new Date().getFullYear();
  let userDob=new Date(`${d}`).getFullYear();
  console.log(userDob-today);
}

// let userDob=(`${StateVal.dob}`).split("-");
// console.log(userDob[0].length);
// calAgeEle(`${StateVal.dob}`);
//income >20k
//find salary based elegiblity 20k-35 ,35-50,50<
//ele age
//emi amount calculation with grossincome elg-salary and 
  // console.log(StateVal.dob);
	// console.log(StateVal.monthlyIncome)
	// console.log(StateVal.obligations)
	// console.log(StateVal.roi)




  const TableRow=(rowData)=>(
    <tr>
      <td key={rowData.id}>{rowData.id}</td>
      <td key={rowData.id}>{rowData.Rate}</td>
      <td key={rowData.id}>{rowData.Monthly_Installments}</td>
      <td key={rowData.id}>{rowData.Loan_Amount}</td>
    </tr>
  )

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