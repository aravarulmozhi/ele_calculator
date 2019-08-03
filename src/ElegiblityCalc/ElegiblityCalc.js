import React,{Component} from'react';
import { Transition } from 'react-transition-group';
import './ElegiblityCalc.css';
import ElegiblityTable from './ElegiblityTable';
class ElegiblityCalc extends Component{
	constructor(){
		super();
		this.state={
			dob:0,
			monthlyIncome:0,
			anyObligations:false,
			roi:0,
			ccObinput:0,
			gloan:0,
			hloan:"No",
			otherloan:0,
			isTableLive:false
		}
		this.divRef = React.createRef()
	}
conv_number=(expr,decplaces)=>{
    var str = "" + Math.round(eval(expr) * Math.pow(10,decplaces));
      while (str.length <= decplaces) {
      str = "0" + str;
}
var decpoint = str.length - decplaces;
return (str.substring(0,decpoint) + "." + str.substring(decpoint,str.length));

}

PV=(rate,per,nper,pmt,fv)=>{
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

	calYearEle=(d)=>{
		let todayAge=(new Date().getFullYear())-(new Date(`${d}`).getFullYear());
		let yearEle=(ua)=>{
			if(ua >=23&& ua<=53){
				return 5;
			}else if(ua===54){
				return 4;
			}else if(ua===55){
				return 3;
			}else if(ua===56){
				return 2;
			}else if(ua===57){
				return 1;
			}else{
				return alert("Sorry! You Are Not Eligible to take a Loan")
			}
		}		
		return yearEle(todayAge);
	  }

	  calSalEle=(mic)=>{
			if(mic >= 20000 && mic <= 35000)
			{
			return 55; //55% of gross salary
			}else if(mic > 35000 &&  mic <=50000)
			{
			return 60; //60% of gross salary
			}else if(mic >50000)
			{
			return 65; //65% of gross income
			}else if(mic<20000){
			return alert("Sorry Your Salary is too Low to take Loan ?");
			}
	  }
  
	enableEdit=(byId,plcMsg)=>{
		let selDom=document.getElementById(byId);
		selDom.disabled=false;
		selDom.placeholder=plcMsg;
	}
	disAbleEdit=(byId,plcMsg)=>{
		let selDom=document.getElementById(byId);
		selDom.disabled=true;
		selDom.placeholder=plcMsg;
		selDom.value="";
	}	
	totalOblicationFun=()=>{
		let ccObinput=Number(this.state.ccObinput);
		let gloan=Number(this.state.gloan);
		let otherloan=Number(this.state.otherloan);
		return ccObinput+gloan+otherloan;
	}
	eleEmi=()=>{
		let gross_income=this.state.monthlyIncome;
		let ex_emi=this.totalOblicationFun()
		let sal_base=this.calSalEle(gross_income)
		let ele_emi=((gross_income)*(sal_base/100)-ex_emi)
		return ele_emi;
	}

	resultValues=()=>{
		//row
		let elg_emi=this.eleEmi();
		let tenure=this.calYearEle(`${this.state.dob}`);
		let roi=this.state.roi;
		for(let r=1;r<=tenure;r++){
			let pv_year=r*12;
			let pvValue=Math.round(this.PV(roi,12,pv_year,-elg_emi,0.05));
			console.log(pvValue);
		}
	}

  	addValue=()=>{
  		if(this.state.dob===0 || this.state.monthlyIncome===0 || this.state.roi===0){
  			alert("Please Fill the Valid Fields!")
  		}else{
  // 		let tenure=this.calYearEle(`${this.state.dob}`);
		// console.log(tenure);
		// let claSalPer=this.calSalEle(this.state.monthlyIncome);
		// console.log(claSalPer);
		return this.state;
  		}
	}

render(){
	let boxUp= ["swing-in-top-fwd"];
		return(
			<div className="eleCal">
			<div className="text-center mb-n4">
			<span className="contact100-form-symbol">
				<img src="https://waytobank.com/images/symbol-01.png" style={{width:"50px", height:"50px"}} alt=""/>
			</span>
			</div>	
		<div className="wrap-contact100">
				<div className="text-center pt-5"><h1>Elegiblity Calculator</h1></div>
				<div className="contact100-form validate-form flex-sb flex-w p-1">
					<div className="wrap-input100 rs1 validate-input">
						 <input className="input100" 
						 	id="we" placeholder="Please Enter your DOB"
							type="text" onFocus={()=>document.getElementById('we').setAttribute("type", "date")}
							onChange={(e)=>this.setState({dob:e.target.value,})}
							required
							/>					 
					</div>
				   <div className="wrap-input100 rs1 validate-input">
					   <input 
					   	className="input100"
						placeholder="Monthly Income"
						type="number"
						autoComplete="off"
						onChange={(e)=>this.setState({monthlyIncome:e.target.value,})}/>
				   </div>        
			   </div>
				<div className="text-center pt-5">
					<h4>Currently Paying Any EMI ?</h4>
				</div>
			   <div className="text-center validate-form flex-sb flex-w p-1">

			   <div className="btn-group btn-group-toggle" data-toggle="buttons">
					<label className="btn btn-secondary" onClick={()=>{
						this.setState({anyObligations:true})
					}
				}>
						<input type="radio"
							id="option1"
							value="Yes"
							autoComplete="off"
							/> Yes
					</label>
					<label className="btn btn-secondary active" onClick={()=>{
						this.setState({
							anyObligations:false,
							ccObinput:0,
							gloan:0,
							otherloan:0,
							hloan:false})
					}}>
						<input type="radio"
							id="option2"
							value="No"
							autoComplete="No"
							defaultChecked
							/>No 
					</label>	
				</div>
				{ 
					this.state.anyObligations ?
					<div id="addThis" className={boxUp.join(' ')}>
					<div className="contact100-form validate-form flex-sb flex-w p-10 bg-info b-3 rounded-top">
					<div className="wrap-input100 rs1 validate-input">
					<div className="btn-group btn-group-toggle innerBtn" data-toggle="buttons">
									<label className="btn btn-secondary" onClick={()=>{
										this.enableEdit('ccObinput','Enter Total Credit Card Outstanding Amount')
									}}>
										<input type="radio"
											id="option1"
											value="Yes"
											autoComplete="off"
											/> Yes
									</label>
									<label className="btn btn-secondary active" onClick={()=>{
										this.setState({ccObinput:0})
										this.disAbleEdit('ccObinput','Any Credit Card Outstanding Amount ?')
									}}>
										<input type="radio"
											id="option2"
											value="No"
											autoComplete="No"
											defaultChecked
											/>No
									</label>	
					</div>
						<input
							id="ccObinput"
							className="input101"
							placeholder="Any Credit Card Outstanding Amount ?"
							type="number" autoComplete="off"
							onChange={(e)=>this.setState({ccObinput:(e.target.value)*(5/100),})}
							disabled		
							 />
					</div>
					<div className="wrap-input100 rs1 validate-input">
					<div className="btn-group btn-group-toggle innerBtn" data-toggle="buttons">
									<label className="btn btn-secondary" onClick={()=>{this.enableEdit('gloan','Enter Total Gold Loan Amount')}}>
										<input type="radio"
											id="option1"
											value="Yes"
											autoComplete="off"
											
											/> Yes
									</label>
									<label className="btn btn-secondary active" onClick={()=>{
										this.setState({gloan:0})
										this.disAbleEdit('gloan','Any Gold Loan ?')
									}}>
										<input type="radio"
											id="option2"
											value="No"
											autoComplete="No"
											defaultChecked
											/>No
									</label>	
					</div>
						<input
							id="gloan"
							className="input101"
							placeholder="Any Gold Loan Amount ?"
							type="number" autoComplete="off"
							onChange={(e)=>this.setState({gloan:(e.target.value)*(1.5/100),})}		
							disabled />
					</div>
					</div>
					<div className="contact100-form validate-form flex-sb flex-w p-1 bg-info b-3 rounded-bottom">
					<div className="wrap-input100 rs1 validate-input">
					<div className="btn-group btn-group-toggle innerBtn" data-toggle="buttons">
									<label className="btn btn-secondary" onClick={()=>{this.enableEdit('otherloan','Enter Total EMI Paying on Other Loans')}}>
										<input type="radio"
											id="option1"
											value="Yes"
											autoComplete="off"											
											/> Yes
									</label>
									<label className="btn btn-secondary active" onClick={()=>{
										this.setState({otherloan:0})
										this.disAbleEdit('otherloan','Having Any Other Loans ?')
									}}>
										<input type="radio"
											id="option2"
											value="No"
											autoComplete="No"
											defaultChecked
											/>No
									</label>	
					</div>
						<input
							id="otherloan"
							className="input101"
							placeholder=" Having Any Other Loans ?"
							type="number" autoComplete="off"
							onChange={(e)=>this.setState({otherloan:(e.target.value)})}
							disabled

							/>
					</div>

					{
						this.state.monthlyIncome >=75000 ? 
					<div className="wrap-input100 rs1 validate-input">
					<h5 style={{color:"white"}}>Having Any Home Loan ?	
					<div className="btn-group btn-group-toggle innerBtn pa2" data-toggle="buttons">
									<label className="btn btn-secondary" onClick={()=>this.setState({hloan:true})}>
										<input type="radio"
											id="option1"
											value="Yes"
											autoComplete="off"
											/> Yes
									</label>
									<label className="btn btn-secondary active" onClick={()=>this.setState({hloan:false})}>
										<input type="radio"
											id="option2"
											value="No"
											autoComplete="No"
											defaultChecked
											/>No
									</label>
									<br/>
									<br/>
									
									</div>
									</h5>
									</div>
									:
								<div></div>
							}
							</div>
						</div>
						:
						<div></div>
					}
				</div>

				<div className="contact100-form validate-form flex-sb flex-w p-1">
				 <div className="wrap-input100 rs1 validate-input">
				 <p className="input100" style={{marginTop:"15px"}}>Your Total Oblication Is Rs:{this.totalOblicationFun()}</p>
				</div>
				<div className="wrap-input100 rs1 validate-input">
					<input 
						className="input100"
						placeholder="Expecting Peosonal Loan Interest Rate" 
						type="number"
						autoComplete="off"
						onChange={(e)=>this.setState({roi:e.target.value,})}	
						/>
				</div>
				</div>
				<div>
				</div>
				<div className="text-center pt-5">
				<p className="Submitbutton mx-auto" onClick={this.resultValues}>Submit</p>
				</div>
				<ElegiblityTable staValu={this.state} totalOblication={this.totalOblicationFun()}/>	
		</div>
			</div>	

		);
	}
}
export default ElegiblityCalc;