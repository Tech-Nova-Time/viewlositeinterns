import React from 'react';
import Layout from "../../components/Sections/Layout";
import Loader from "../../components/Sections/Loader";
import Header from "../../components/Sections/Header";
import Footer from "../../components/Sections/Footer";
import ToTop from "../../components/Sections/ToTop";
import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link';

const EntertainmentSportsConcerts = () => (
  <Layout 
    pageTitle="ViewLo - Entertainment (Sports & Concerts)" 
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
            <h1 className="display-4 fw-bold mb-4">Entertainment (Sports & Concerts)</h1>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <p className="lead mb-4">
              Experience the thrill of live sports and concerts like never before with our immersive 
              streaming platform that brings you closer to the action.
            </p>
            <p className="mb-4">
              Our platform delivers high-quality, real-time coverage of sporting events and live concerts, 
              complete with interactive features that make you feel like you're right there in the venue.
            </p>
            <Button variant="primary" size="lg" className="me-3">Get Started</Button>
            <Link href="/pricing">
              <Button variant="outline-primary" size="lg">Learn More</Button>
            </Link>
          </Col>
          <Col lg={6}>
            <img 
              src="/images/entertainment.jpg" 
              alt="Sports and Concert Coverage" 
              className="img-fluid shadow"
              onError={(e) => {e.target.onerror = null; e.target.src = "https://via.placeholder.com/600x400?text=Entertainment"}}
            />
          </Col>
        </Row>
      </Container>
    </section>

    <Footer />
    <ToTop />
  </Layout>
);

export default EntertainmentSportsConcerts;
