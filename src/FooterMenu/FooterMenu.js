import React from 'react';
import './FooterMenu.css'
const FooterMenu=()=>{
	return(
		<div className="underMenuFooter">
			<br/>
			<footer className="page-footer">
				<div className="container">
					<div className="row">
						<div className="col-sm-3">
						<ul>
							<li><h4>Our Services</h4></li>
							<li><a href="#" title="Home">Home</a></li>
							<li><a href="#" title="Personal Loans">Personal Loans</a></li>
							<li><a href="#" title="Credit Cards">Credit Cards</a></li>
							<li><a href="#" title="Home Loan">Home Loan</a></li>
							<li><a href="#" title="Car Loan">Car Loan</a></li>
							<li><a href="#" title="Doctors Loan">Doctors Loan</a></li>
							<li><a href="#" title="Business Loan">Business Loan</a></li>
							<li><a href="#" title="Salary AC">Salary AC</a></li>
							<li><a href="#" title="DSA Tie Up">DSA Tie Up</a></li>
						</ul>
						</div>
						<div className="col-sm-3">
								<ul>
									<li><h4>Tools</h4></li>
									<li><a href="#" title="EMI Calculator">EMI Calculator</a></li>
									<li><a href="#" title="Balance Transfer Calculator">Balance Transfer Calculator</a></li>
									<li><a href="#" title="EMI Calculator Home Loan">EMI Calculator Home Loan</a></li>
								</ul>
						</div>
						<div className="col-sm-3">
		<ul>
			<li><h4>Portfolios</h4></li>
		<li><a href="#" title="ICICI Bank">ICICI Bank</a></li>
		<li><a href="#" title="AXIS Bank">AXIS Bank</a></li>
		<li><a href="#" title="HDFC Bank">HDFC Bank</a></li>
		<li><a href="#" title="CitiBank">CitiBank</a></li>
		<li><a href="#"  title="Standard Charted">Standard Charted</a></li>

		<li><a href="#" title="BAJAJ FINSERV">BAJAJ FINSERV</a></li>
		<li><a href="#" title="INDUS Bank">INDUS Bank</a></li>
		<li><a href="#" title="TATA CAPITAL">TATA CAPITAL</a></li>
		<li><a href="#" title="HDB FINANCIAL SERVICES">HDB FINANCIAL SERVICES</a></li>
		<li><a href="#" title="FULLERTON INDIA">FULLERTON INDIA</a></li>
	</ul>
	</div>
	<div className="col-sm-3">
		<ul>
		<li><h4>Follow Us</h4></li>
		<li><a href="http://blog.waytobank.com/" target="_blank" title="Our Blog">Blog</a></li>
		<li><a href="https://www.facebook.com/waytobank.ind/" target="_blank" title="Our Facebook Page">Face Book</a></li>
		<li><a href="https://www.linkedin.com/company/waytobank.com/" target="_blank" title="linkedin Profile">Linked In</a></li>
		<li><a href="https://twitter.com/waytobank" target="_blank" tilte="waytobank twitter page">Twitter</a></li>
		<li><a href="https://plus.google.com/111096774590973480768" target="_blank" title="google+">Google+</a></li>
	</ul>	
	</div>
	</div>
	<hr/>
	<div className="row text-center">
		<div className="col-sm-12">
		  <div className="social_icon">
          <a href="https://www.facebook.com/waytobank.ind/" target="_blank" className="fa fa-facebook" title="facebook page"></a>
          <a href="https://twitter.com/waytobank" className="fa fa-twitter" target="_blank" tilte="waytobank twitter page"></a>
          <a href="https://www.linkedin.com/company/waytobank.com/"  className="fa fa-linkedin" target="_blank" title="linkedin Profile"></a>
          <a href="https://waytobank-india.tumblr.com" className="fa fa-tumblr" target="_blank" title="Tumbler"></a>
        </div>
		</div>
	</div>
	<div className="row text-center">
		<div className="col-sm-12">
			<p>Copyright © 2019 <a href="http://waytobank.com/index" target="_blank" title="waytobank offical page">WaytoBank</a>/<a href="terms" title="terms"> Terms of Service</a></p>
		</div>
	</div>
	</div>
			</footer>
		</div>
		)
}
export default FooterMenu;