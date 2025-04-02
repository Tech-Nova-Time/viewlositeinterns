import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default class Footer extends Component {

	componentDidMount() {
		if(typeof window !== 'undefined') {
			window.WOW = require('wowjs/dist/wow.js');	
		}
	
		new WOW.WOW().init();
	}

	render() {
		return (
			<footer>
				
				{/* <!-- Widgets --> */}
				<div className="footer-widgets">
					<Container>
						
						<Row>
							
							{/* <!-- Footer logo --> */}
							<Col className="col-12 col-md-6 col-lg-3 res-margin">
								<div className="widget">
									<p className="footer-logo">
										<img src="/images/viewlologogreen.png" alt="ViewLo" data-rjs="2" />
									</p>
									{/*
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis non, fugit totam vel laboriosam vitae.
									</p>
									*/}
									{/* <!-- Social links --> */}
									<div className="footer-social">
										<a href="HTTPS://twitter.com/viewloapp" title="Twitter"><i className="fab fa-twitter fa-fw"></i></a>
										<a href="https://www.facebook.com/share/J23XeHxdjuPfUrN3/?mibextid=eQY6cl" title="Facebook"><i className="fab fa-facebook-f fa-fw"></i></a>
										<a href="https://www.instagram.com/viewloapp?igsh=MTNvaGp4eTNzNndpOA%3D%3D&utm_source=qr" title="Instagram"><i className="fab fa-instagram"></i></a>
										<a href="https://www.tiktok.com/@viewloapp?_t=8jzlWw3X5Rb&_r=1" title="Tiktok"><i className="fab fa-tiktok"></i></a>
									</div>
								</div>
							</Col>
							
							{/* <!-- Useful links --> */}
							<Col className="col-12 col-md-6 col-lg-2 offset-lg-1 res-margin">
								<div className="widget">
									
									<h6>Useful Links</h6>
									
									<ul className="footer-menu">
										<li><a href="mailto:help@viewloapp.com">Support</a></li>
										<li><a href="/privacyplan.html">Privacy Policy</a></li>
										<li><a href="/terms.html">Terms &amp; Conditions</a></li>
										{/* <li><a href="#">Affiliate Program</a></li>
										<li><a href="#">Careers</a></li> */}
									</ul>
									
								</div>
							</Col>
							
							{/* <!-- Product help --> */}
							<Col className="col-12 col-md-6 col-lg-3 res-margin">
								<div className="widget">
									
									<h6>Product Help</h6>
									
									<ul className="footer-menu">
										<li><a href="#support">FAQ</a></li>
										{/*
										<li><a href="#">Reviews</a></li>
										<li><a href="#">Features</a></li>
										<li><a href="#">Feedback</a></li>
										<li><a href="#">API</a></li>
										*/}
									</ul>
									
								</div>
							</Col>
							
							{/* <!-- Download --> */}
							<Col className="col-12 col-md-6 col-lg-3">
								<div className="widget">
									
									<h6>Download</h6>
									
									<div className="button-store">
										<a href="https://form.jotform.com/240485308097057" className="custom-btn d-inline-flex align-items-center m-2 m-sm-0 mb-sm-3"><i className="fab fa-google-play"></i><p>Available on<span>Google Play</span></p></a>
										<a href="https://apps.apple.com/us/app/viewlo/id6473455611" className="custom-btn d-inline-flex align-items-center m-2 m-sm-0"><i className="fab fa-apple"></i><p>Download on<span>App Store</span></p></a>
									</div>
									
								</div>
							</Col>
							
						</Row>
						
					</Container>
				</div>
				
				{/* <!-- Copyright --> */}
				<div className="footer-copyright">				
					<Container>
						
						<Row>						
							<Col className="col-12">
								
								{/* <!-- Text --> */}
								<p className="copyright text-center">
									Copyright © 2024 <a href="#" target="_blank">Viewlo Technologies Inc.</a>. All Rights Reserved.
								</p>
								
							</Col>
						</Row>
						
					</Container>				
				</div>
				
			</footer>
		);
	}

}
