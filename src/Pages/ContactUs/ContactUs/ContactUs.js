import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './ContactUs.css';
import fiverIcon from "../../../fiverr_icon.svg";

const ContactUs = () => {
    return (
        <section id="contact">
            <header className="mb">
                <h2 className="title-text" style={{ width: "200px", margin: "auto" }}>Contacts <span className="text-color">Us</span></h2>
            </header>
            <Container className="py-5">
                <Row>
                    <Col xs={12} md={12} lg={6}>
                        <form action="https://formsubmit.co/dbf74f829bccac24fc1b8f59a048d6e9 " method="POST">
                            <input type="hidden" name="_next" value="https://abudaud.netlify.app/messageSend" />
                            <input type="text" placeholder="Name" name="name" required />
                            <input type="email" placeholder="Email" name="email" required />
                            <input type="text" placeholder="Subject" />
                            <textarea name="message" id="" cols="30" rows="10" placeholder="Message"></textarea>
                            <input className="myBtn ml-2" type="submit" />
                        </form>
                    </Col>
                    <Col xs={12} md={12} lg={6}>
                        <div className="text-area">
                            <div className="item mb">
                                <h4 className='contact-item-title'>Email</h4>
                                <p>abudaud.web@gmail.com</p>
                            </div>
                            <div className="item mb">
                                <h4 className='contact-item-title'>Phone</h4>
                                <p>01938854737</p>
                            </div>
                            <div className="item">
                                <h4 className='contact-item-title'>Follow Me</h4>
                                <div className="d-flex">
                                    <a className="" href="https://github.com/abudaudhossain" target="_blank" rel="noreferrer"><span
                                        className="icon"><i className="fa fa-github"></i></span></a>
                                    <a className="" href="https://www.linkedin.com/in/abu-daud-hossain-a79517186/"
                                        target="_blank" rel="noreferrer"><span className="icon"><i className="fa fa-linkedin"></i></span></a>
                                    <a className="" href="https://www.facebook.com/abudaud.hossain.sumon/" target="_blank" rel="noreferrer"><span
                                        className="icon"><i className="fa fa-facebook"></i></span></a>
                                    <a className="" href="https://twitter.com/webexpert24abu" target="_blank" rel="noreferrer"><span
                                        className="icon"><i className="fa fa-twitter"></i></span></a>
                                    <a href="https://www.fiverr.com/webexpert24abu" target="_blank" className="" rel="noreferrer"><span
                                        className="icon"><img src={fiverIcon} alt="" srcSet="" /></span></a>
                                </div>

                            </div>



                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    );
};

export default ContactUs;