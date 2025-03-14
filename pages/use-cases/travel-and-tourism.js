import React from 'react';
import Layout from "../../components/Sections/Layout";
import Loader from "../../components/Sections/Loader";
import Header from "../../components/Sections/Header";
import Footer from "../../components/Sections/Footer";
import ToTop from "../../components/Sections/ToTop";
import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link';

const TravelAndTourism = () => (
  <Layout 
    pageTitle="ViewLo - Travel and Tourism" 
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
            <h1 className="display-4 fw-bold mb-4">Travel and Tourism</h1>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <p className="lead mb-4">
              Experience destinations like never before with our immersive live streaming platform that brings 
              the world's most beautiful locations directly to you. 
            </p>
            <p className="mb-4">
              Our platform connects travelers with local guides for real-time virtual tours, allowing you to 
              explore new places, learn about different cultures, and plan your next adventure from anywhere.
            </p>
            <Button variant="primary" size="lg" className="me-3">Start Exploring</Button>
            <Link href="/pricing">
              <Button variant="outline-primary" size="lg">Learn More</Button>
            </Link>
          </Col>
          <Col lg={6}>
            <img 
              src="/images/travel.jpg" 
              alt="Travel and Tourism" 
              className="img-fluid shadow"
              onError={(e) => {e.target.onerror = null; e.target.src = "https://via.placeholder.com/600x400?text=Travel+and+Tourism"}}
            />
          </Col>
        </Row>
      </Container>
    </section>

    <Footer />
    <ToTop />
  </Layout>
);

export default TravelAndTourism;
