import React from 'react';
import Layout from "../../components/Sections/Layout";
import Loader from "../../components/Sections/Loader";
import Header from "../../components/Sections/Header";
import Footer from "../../components/Sections/Footer";
import ToTop from "../../components/Sections/ToTop";
import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link';

const VirtualCollegeCampusTours = () => (
  <Layout 
    pageTitle="ViewLo - Virtual College Campus Tours" 
    colorSchema="/assets/colors/green.css"
  >
    <Loader />
    <Header nav="use-cases" />
    
    {/* Hero Section */}
    <section className="hero-section py-5">
      <Container>
        <Row className="align-items-center">
          <Col lg={12} className="text-center mb-5">
           
            <div className="position-relative">
              <div className="curved-bg" style={{
                position: 'absolute',
                top: '-600px',
                left: 0,
                width: '100%',
                height: '700px',
                backgroundColor: '#3dbb8e',
                borderRadius: '0 0 50% 50%/0 0 100% 100%',
                transform: 'scaleX(1.8)',
                zIndex: -1,
                border: '4px solid #1f8760',
                borderTop: 'none'
              }}></div>
              <h1 className="display-4 fw-bold mb-4 text-white" style={{marginTop: '30px'}}>College Campus Tours</h1>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <h3 className="mb-4 fw-bold" style={{color: '#3dbb8e'}}>GET THE CAMPUS EXPERIENCE IN A PERSONALIZED AND IMMERSIVE WAY... ANYTIME, ANYWHERE!</h3>
            <p className="lead mb-4">
            We know that choosing a college is one of the most pivotal decisions an adolescent can make--and that 
            requires being able to imagine yourself on campus. However, visiting various colleges across the globe 
            is out of reach for many families, and most virtual campus tours don't show you the experiences you really want to see.
            </p>
            <p className="lead mb-4">
            With Viewlo, you can be connected with a current student at the school of your choice and get a real-time, 
            personalized campus tour. Viewlo provides an audio feature to ask your broadcaster questions and live command 
            buttons to adjust your viewing experience, so you can get a glimpse into this next chapter of your life from 
            anywhere in the world!
            </p>
            <Button variant="primary" size="lg" className="me-3">Schedule a Tour</Button>
            <Link href="/pricing">
              <Button variant="outline-primary" size="lg">Learn More</Button>
            </Link>
          </Col>
          <Col lg={6}>
            <video 
              src="/images/campus-tour.mp4"
              alt="College Campus Tours"
              className="img-fluid shadow"
              controls
              autoPlay
              playsInline
              muted
              loop
              style={{width: '100%', height: 'auto'}}
            />
          </Col>
        </Row>
      </Container>
    </section>

  
    
    <Footer />
    <ToTop />
  </Layout>
);

export default VirtualCollegeCampusTours;
