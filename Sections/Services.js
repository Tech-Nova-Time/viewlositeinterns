import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Services = (props) => {
    return (
        <section id="services" className={props.className}>
			
			{/* <!-- Container --> */}
			<Container>
				
				{/* <!-- Section title --> */}
				<Row className="justify-content-center">
					<Col className="col-12 col-md-10 col-lg-6">
						
						<div className="section-title text-center">
							<h3>How It Works?</h3>
							<p>Discover a new way to enjoy live events and streams with Viewlo—where your privacy is our priority. Connect anonymously with broadcasters, stay in control of who you share your moments with, and indulge in live experiences with ease. Just search for a venue, choose a broadcaster, and start streaming! Afterward, handle payments safely with Stripe, give feedback, and if you're delighted, leave a tip! All your activity is neatly logged in your profile for quick access. Join Viewlo, where your world comes to life, privately and securely.</p>
						</div>
						
					</Col>
				</Row>
			
				<Row>
					
					{/* <!-- Service 1 --> */}
					<Col className="col-12 col-lg-4 res-margin wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0">
						<div className={props.serviceClassName}>
							
							<div className="icon icon-basic-world"></div> {/* icon-arrows-expand */}
							
							<h5>Search</h5>
							<p>Search the address or event location you want to view live </p>
							
						</div>
					</Col>

					{/* <!-- Service 2 --> */}
					<Col className="col-12 col-lg-4 res-margin wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0.3s">
						<div className={props.serviceClassName}>
							
							<div className="icon icon-basic-target"></div>
							
							<h5>Find</h5>
							<p> Find active broadcasters privately; data remains confidential </p>
						
						</div>
					</Col>

					{/* <!-- Service 3 --> */}
					<Col className="col-12 col-lg-4 res-margin wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0.6s">
						<div className={props.serviceClassName}>
							
							<div className="icon icon-basic-video"></div>
							
							<h5>View Live</h5>
							<p>Discover and explore on your own terms.  You’re in control  </p>
						
						</div>
					</Col>
					
				</Row>
				
			</Container>
			
		</section>
    );
}

export default Services;