import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"

import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
import "./ElegiblityTable.css";
import { tsPropertySignature } from '@babel/types';
import NumberFormat from 'react-number-format';


const ElegiblityTable=({staValu,totalOblication,resultValue})=>{

const conv_number=(expr,decplaces)=>{
    var str = "" + Math.round(eval(expr) * Math.pow(10,decplaces));
      while (str.length <= decplaces) {
      str = "0" + str;
}
    var decpoint = str.length - decplaces;
      return (str.substring(0,decpoint) + "." + str.substring(decpoint,str.length));
}

const PV=(rate,per,nper,pmt,fv)=>{
   nper=parseFloat(nper);
   pmt=parseFloat(pmt);
   fv=parseFloat(fv);
    let pv_value,x,y;
    rate=eval((rate)/(per*100))
    if((pmt==0)||(nper==0)){
        // alert("can't calculate with zero");
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
    pv_value = conv_number(pv_value,2);
    return (pv_value);
}

let calYearEle=(y)=>{
      if(y >=23&& y<=53){
        return 5;
      }else if(y===54){
        return 4;
      }else if(y===55){
        return 3;
      }else if(y===56){
        return 2;
      }else if(y===57){
        return 1;
      }else{
        return 0;
      }   
}
const ageCalculator=(s)=>{
let yyyy=new Date(s.dob).getFullYear();
if(yyyy>1900){
  let todayAge=(new Date().getFullYear())-(yyyy);
   return todayAge;
  }
} 
const salBasEle=(grossIncome)=>{
  if(grossIncome >= 20000 && grossIncome <= 35000)
    {
      return 55; //55% of gross salary
    }else if(grossIncome > 35000 &&  grossIncome <=50000)
    {
      return 60; //60% of gross salary
    }else if(grossIncome >50000)
    {
      if(staValu.hloan){
         return 70;
      }else{
        return 65;
      }
      //65% of gross income
    }else
    {
      return 0;
    }
}
const elgEmi=()=>{
 let gross_income=staValu.monthlyIncome;
  let exp_emi=totalOblication;
  let sal_base=salBasEle(gross_income);
  let elg_emi=((gross_income)*(sal_base/100)-exp_emi);
  let elgEmiRound=Math.round(elg_emi);
  return elgEmiRound;
}  
const checkForNegative=(value)=>{
  if(value < 0){
    return "N/A";
  }else{
    return value;
  }

}

const createTable=()=>{
  let table=[];
  let agevalue=ageCalculator(staValu);
  let tableRow=calYearEle(agevalue);
  for(let r=1; r<=tableRow; r++){
    let loan_amt= Math.round(PV(staValu.roi,12,(r*12),-elgEmi(),0.05));
    table.push(
      <tr key={r}>
      <td>{`For ${r} Year`}</td>
      <NumberFormat value={elgEmi()} displayType={'text'} thousandSeparator={true} prefix={'₹ '} renderText={value => <td>Max EMI Upto {value}</td>} />
      <NumberFormat value={loan_amt} displayType={'text'} thousandSeparator={true} prefix={'₹ '} renderText={value => <td> {value}</td>} />
      </tr>)
  }
  return table;
}
return(
    <div className="p-5 swing-in-top-fwd ">
    <p className="tc f4">Age: <u>&nbsp;&nbsp;&nbsp; {ageCalculator(staValu)} &nbsp;&nbsp;&nbsp;</u>   Monthly Income: <u>&nbsp;{staValu.monthlyIncome} &nbsp;&nbsp;&nbsp;</u>  Total Oblication: <u>&nbsp;&nbsp;&nbsp; {totalOblication} &nbsp;&nbsp;&nbsp;</u> Expecting Interest Rate:<u>&nbsp;&nbsp;&nbsp; {staValu.roi}% &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u></p>



    <Table className="f5 bg-blue">
      <Thead className="border">
        <Tr className="text-center">
          <Th>Tenure</Th>
          <Th>Monthly Installment</Th>
          <Th>Loan Amount</Th>
        </Tr>
      </Thead>
      <Tbody className="text-center">
        {createTable()}     
      </Tbody>
    </Table>
    </div>
)
}
export default ElegiblityTable;