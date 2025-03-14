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
            <img 
              src="/images/viewlologo.jpg" 
              alt="ViewLo Logo" 
              className="mb-4"
              style={{ maxHeight: "80px" }}
              onError={(e) => {e.target.onerror = null; e.target.src = "https://via.placeholder.com/200x80?text=ViewLo"}}
            />
            <h1 className="display-4 fw-bold mb-4">Virtual College Campus Tours</h1>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <p className="lead mb-4">
              Experience our innovative virtual campus tours, where prospective students can take immersive, 
              live guided tours of college campuses from anywhere.
            </p>
            <p className="mb-4">
              Our platform connects future students with campus tour guides in real-time, 
              allowing them to explore facilities, ask questions, and get a genuine feel for 
              campus life without the need to travel.
            </p>
            <Button variant="primary" size="lg" className="me-3">Schedule a Tour</Button>
            <Link href="/pricing">
              <Button variant="outline-primary" size="lg">Learn More</Button>
            </Link>
          </Col>
          <Col lg={6}>
            <img 
              src="/images/campus-tour.jpg" 
              alt="Virtual College Campus Tour" 
              className="img-fluid shadow"
              onError={(e) => {e.target.onerror = null; e.target.src = "https://via.placeholder.com/600x400?text=Campus+Tour"}}
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

