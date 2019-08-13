import React,{Component} from'react';
import { Transition } from 'react-transition-group';
import './ElegiblityCalc.css';
import refreshIcon from "./refresh.png"
import ElegiblityTable from './ElegiblityTable';
class ElegiblityCalc extends Component{
	constructor(){
		super();
		this.state={
			dob:" ",
			monthlyIncome:0,
			anyObligations:false,
			roi:0,
			ccObinput:0,
			gloan:0,
			hloan:false,
			otherloan:0,
			route:"RestCalculator"
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

urAge=()=>{
	let ageValue=new Date(this.state.dob).getFullYear();
	let todayAge=(new Date().getFullYear())-(ageValue);
	if(todayAge >22 && todayAge < 58){
		return true;
	}else{
		return false;
	}
}
showOutput=()=>{
	if((new Date(this.state.dob).getFullYear())>0 && (this.state.monthlyIncome) >0 && (this.state.roi)>0 ){
		if(this.urAge()){
			this.setState({route:"tabletoShow"})
		}else{
			alert("Sorry! Your Age is Not Elegible to Take Loan")
		}		
	}else{
		alert("Please Fill All Require Fields")
	}
}


ResetEveryThing=()=>{
	this.setState({
			dob:" ",
			monthlyIncome:0,
			anyObligations:false,
			roi:0,
			ccObinput:0,
			gloan:0,
			hloan:"No",
			otherloan:0,
			route:"RestCalculator"
	})

}
render(){
	let boxUp= ["swing-in-top-fwd"];
		return(
			<div className="eleCal">
			<div className="text-center mb-n4">
				{

					this.state.route==="tabletoShow" ?
					<div className="grow dib" onClick={this.ResetEveryThing}>
						<span className="grow contact100-form-symbol">
							<img className="rotate-in-center" src={refreshIcon} style={{width:"50px", height:"50px"}} alt=""/>
						</span>
					</div>
					:
					<div className="grow dib">
						<span className="grow contact100-form-symbol grow">
							<img src="https://waytobank.com/images/symbol-01.png" style={{width:"50px", height:"50px"}} alt=""/>
						</span>
					</div>
				}
			</div>	
		<div className="wrap-contact100 ">

				{this.state.route==="tabletoShow" ? <p className=" b pt-5 tc" >Click Here to Reset</p>:<p className=" b pt-5 tc"> </p>}
				<div className="text-center pt-1"><h2>Eligiblity Calculator</h2></div>
				{
					this.state.route==="tabletoShow" ?
					<div>
					<ElegiblityTable staValu={this.state} totalOblication={this.totalOblicationFun()}/>						
					</div>
				:
				<div className="swing-in-top-fwd">
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
				<div className="text-center pt-2">
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
						<label className="btn btn-secondary" onClick={()=>{this.enableEdit('otherloan','Total EMI Paying on Personal Loan')}}>
							<input type="radio"
								id="option1"
								value="Yes"
								autoComplete="off"											
							/> Yes
						</label>
						<label className="btn btn-secondary active" onClick={()=>{
							this.setState({otherloan:0})
							this.disAbleEdit('otherloan','Paying Any Personal Loans EMI ?')
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
							placeholder="Paying Any Personal Loan EMI ?"
							type="number" autoComplete="off"
							onChange={(e)=>this.setState({otherloan:(e.target.value)})}
							disabled

							/>
					</div>





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
					</div>

					<div className="contact100-form validate-form flex-sb flex-w p-1 bg-info b-3 rounded-bottom">

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
				 <p className="input100" style={{marginTop:"15px"}}>Your Total Obligation Is Rs:{this.totalOblicationFun()}</p>
				</div>
				<div className="wrap-input100 rs1 validate-input">
					<input 
						className="input100"
						placeholder="Expecting Personal Loan Interest Rate" 
						type="number"
						autoComplete="off"
						onChange={(e)=>this.setState({roi:e.target.value,})}	
						/>
				</div>
				</div>
				<div className="text-center p-3">
				<button className="Submitbutton mx-auto grow" onClick={this.showOutput}>Submit</button>
				</div>
				</div>
			}
		</div>
	</div>	

		);
	}
}
export default ElegiblityCalc;