import React,{Component} from 'react';
import FooterMenu from './FooterMenu/FooterMenu';
import NavigationMenu from './NavigationMenu/NavigationMenu';
import ElegiblityCalc from './ElegiblityCalc/ElegiblityCalc';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    constructor(){
            super();
        this.state={
            currentAge:''
        }
    }

currentAgeChange=(event)=>{
   this.setState({currentAge:event.target.value})
    console.log(event.target.value)
    let splitNum=event.target.value;
    let dear=splitNum.split("-");
    console.log(dear);
    var d = new Date();
    var n=d.getFullYear();
    console.log(n-Number(dear[0]));
}
render(){ return(
    <div>
        <NavigationMenu/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div>
        <ElegiblityCalc currentAgeChange={this.currentAgeChange} currentAge={this.state.currentAge} currentIncome={this.currentIncome}/>
        </div>
        <FooterMenu/>
    </div>
)}
}
export default App;
