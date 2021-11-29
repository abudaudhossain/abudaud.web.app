import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
// import Project from '../../Shared/Project/Project';
import './HomeProjects.css';

const HomeProjects = () => {
    return (
        <section id="project">
            <header>
                <h2 class='title-text' style={{ width: "200px", margin: "auto" }}>Recent <span class="text-color">Work</span></h2>
            </header>
            <Container className="my-5">
                <Row className="m-auto">
                    <Col className="col-12 col-sm-12 col-md-6 col-lg-4 my-3">
                        <Card className=" h-100" style={{ width: '100%' }}>
                            <Card.Img className="card-img" variant="top" src="https://i.ibb.co/xL53D47/Motor-Bike.png" />
                            <Card.Body>
                                <Card.Title>Motor Bike Shope</Card.Title>
                                <Card.Text>
                                    The specially designed Shop Page of This is ideal for showcasing products in the most attractive way.
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Card.Link href="https://online-bike-shop.web.app/">Live Link</Card.Link>
                                <Card.Link href="https://github.com/abudaudhossain/Online-Bike-Shope-client">Code Link</Card.Link>
                                <Card.Link href="https://github.com/abudaudhossain/Online-Bike-Shope-server">Sever code Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="col-12 col-sm-12 col-md-6 col-lg-4 my-3">
                        <Card className=" h-100" style={{ width: '100%' }}>
                            <Card.Img className="card-img" variant="top" src="https://i.ibb.co/160XsvT/dental-Care.png" />
                            <Card.Body>
                                <Card.Title>Dental Care</Card.Title>
                                <Card.Text>
                                    Dental care is a user-friendly website, users see to here dentists and medical services.
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Card.Link href="https://dental-care-4d3d8.web.app/">Live Link</Card.Link>
                                <Card.Link href="https://github.com/abudaudhossain/dental-care">Code Link</Card.Link>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="col-12 col-sm-12 col-md-6 col-lg-4  my-3">
                        <Card className="h-100" style={{ width: '100%' }}>
                            <Card.Img className="card-img" variant="top" src="https://i.ibb.co/6Zzk6gK/travel-Agency.png" />
                            <Card.Body>
                                <Card.Title>SD Travel Agency</Card.Title>
                                <Card.Text>
                                    Users can see all offers or services that provide SDTravel Agency on this website.
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Card.Link href="https://sd-travel-agency.web.app/">Live Link</Card.Link>
                                <Card.Link href="https://github.com/abudaudhossain/sd-travel-agency-client">Code Link</Card.Link>
                                <Card.Link href="https://github.com/abudaudhossain/sd-travel-agency-server">Sever code Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                
                     

                </Row>
            </Container>
        </section>
    );
};

export default HomeProjects;
/*


 */