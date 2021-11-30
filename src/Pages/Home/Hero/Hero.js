import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Hero.css";
import heroImg from "../../../profile.png";
import ParticleBackground from '../../../ParticleBackground/ParticleBackground';
import Typical from 'react-typical';

const Hero = () => {
    return (
        <>

            <ParticleBackground />
            <Container className="py-5">
                <Row className="align-items-center justify-content-center">
                    <Col sm={12} lg={7} className="order-1 order-lg-0">
                        <div className="text-area text-sm-center text-lg-start pb-5">
                            <p>Hello,<span className="text-color">I'm👋🏼</span></p>
                            <h1>Abu Daud Hossain</h1>
                            <h3>I'm a {" "}
                                <span className="text-color">
                                    <Typical
                                        loop={Infinity}
                                        wrapper="n"
                                        steps={[
                                            'Frontend Developer💻',
                                            1000,
                                            'Jr. Web Developer(MERN)💻',
                                            1000,
                                            'Web Designer💻',
                                            700
                                        ]}

                                    />
                                </span>
                            </h3>

                            <Link to="/about" className="myBtn mr">More about me</Link>
                            <Link to="/portfolio" className="myBtn">protfolio</Link>
                        </div>
                    </Col>
                    <Col sm={12} lg={5} className="order-0 py-5 order-lg-1">
                        <div className="img-area">
                            <img src={heroImg} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Hero;