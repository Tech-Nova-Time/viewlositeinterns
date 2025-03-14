import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import Link from 'next/link';

const UseCases = (props) => {
    return (
        <section id="use-cases" className={props.className}>
            <Container>
                {/* Section Title */}
                <Row className="justify-content-center">
                    <Col className="col-12 col-md-10 col-lg-6">
                        <div className="section-title text-center">
                            <h3>Use Cases</h3>
                        </div>
                    </Col>
                </Row>
                
                {/* Description and Accordion */}
                <Row className="justify-content-center">
                    <Col className="col-12 col-md-10 col-lg-8">
                        <p className="text-center">
                            Explore our diverse range of use cases and discover how our platform can transform your experience.
                        </p>
                        <Accordion defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header as="h5">
                                    Virtual College Campus Tours
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        Experience our innovative virtual campus tours, where prospective students can take immersive, live guided tours of college campuses from anywhere.
                                    </p>
                                    <Link href="/use-cases/virtual-college-campus-tours" className="btn btn-primary">
                                        Learn More
                                    </Link>
                                </Accordion.Body>
                            </Accordion.Item>
                            
                            <Accordion.Item eventKey="1">
                                <Accordion.Header as="h5">
                                    Journalism
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        Discover how our platform empowers journalists to deliver real-time news and dynamic storytelling with live video capabilities.
                                    </p>
                                    <Link href="/use-cases/journalism" className="btn btn-primary">
                                        Learn More
                                    </Link>
                                </Accordion.Body>
                            </Accordion.Item>
                            
                            <Accordion.Item eventKey="2">
                                <Accordion.Header as="h5">
                                    Travel and Tourism
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        Explore travel and tourism like never before with live tours and interactive experiences that connect travelers with destinations around the globe.
                                    </p>
                                    <Link href="/use-cases/travel-and-tourism" className="btn btn-primary">
                                        Learn More
                                    </Link>
                                </Accordion.Body>
                            </Accordion.Item>
                            
                            <Accordion.Item eventKey="3">
                                <Accordion.Header as="h5">
                                    Entertainment (Sports/Concerts)
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        Dive into the world of entertainment with live coverage of sports events and concerts, bringing the excitement of live events directly to your screen.
                                    </p>
                                    <Link href="/use-cases/entertainment-sports-concerts" className="btn btn-primary">
                                        Learn More
                                    </Link>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
                
                {/* Footer Contact */}         
                <Row>                    
                    <Col className="col-12">
                        <p className="text-center mb-0">Still have a question? Email help@viewloapp.com or <Link href="mailto:help@viewloapp.com"><strong>Ask your question here</strong></Link></p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default UseCases;
