import React from 'react';
import waytobankLogo from './navimages/wayToBankLogo.png';
import waytobankIcon from './navimages/resLogo.png';
import './NavigationMenu.css';
const NavigationMenu=()=>{
	return( 
<div className="container-fluid" style={{backgroundColor:'#ffa400'}}>
<div className="container">
<nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{backgroundColor:'#ffa400'}}>
  <a className="navbar-brand" href="www.waytobank.com">
   <img src={waytobankLogo} className="nav-logo img-resposive d-none  d-sm-none  d-md-block d-lg-block d-xl-block" alt="logo"/>
   <img src={waytobankIcon} className="nav-logo img-resposive d-md-none d-lg-none d-sm-block d-block" alt="logo"/>
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse navbarMenu01" id="navbarNavDropdown">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">HOME <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          SERVICES
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Personal Loan</a>
          <a className="dropdown-item" href="#">Credit Cards</a>
          <a className="dropdown-item" href="#">Business Loans</a>
          <a className="dropdown-item" href="#">Doctors Loan</a>
          <a className="dropdown-item" href="#">Car Loans</a>
          <a className="dropdown-item" href="#">Balance Transfer</a>
          <a className="dropdown-item" href="#">DSA Tieup</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">ABOUT</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">TOOLS</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">PORTFOLIOS</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">CONTACT</a>
      </li>
      <li><a href="#">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></li>
    </ul>
  </div>
     <span className="pull-right cont-info"><a href="tel:#"> Call Us: <span itemProp="telephone"> +91 872 200 8008</span> </a> </span>
</nav>
    </div>
		</div>
		);
}
export default NavigationMenu;