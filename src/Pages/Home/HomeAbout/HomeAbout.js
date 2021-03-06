import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import aboutImg from "../../../img2.png"
import "./HomeAbout.css"

const HomeAbout = () => {
    return (
        <Container className="mt-5">
            <header>
                <h2 className='title-text' style={{ width: "150px" }}>About <span className="text-color">Me</span></h2>
            </header>
            <Row className="align-items-center justify-content-center">

                <Col sm={12} lg={5} className="py-5">
                    <div className="about-img-area m-auto">
                        <img src={aboutImg} alt="" />
                    </div>
                </Col>
                <Col sm={12} lg={7} className="">
                    <div>
                        <p>Hi,
                            I am Abu Daud Hossain . I am studying for a Diploma in Computer Engineering. So, I have gained basic knowledge from my study.</p>
                            <p> Also, I have gathered vast knowledge about coding, designing, markup languages, and other things that are related to this sector. I have already developed 9 projects with JavaScript and React.js.
                        </p>
                        <h3 className="skill-text">Skill</h3>
                        <span className="skill-myBtn mr">JavaScript</span>
                        <span className="skill-myBtn mr">React JS</span>
                        <span className="skill-myBtn mr">HTML5</span>
                        <span className="skill-myBtn mr">Css3</span>
                        <span className="skill-myBtn mr">Bootstrap</span>
                        <span className="skill-myBtn mr">Node js</span>
                        <span className="skill-myBtn mr">C++</span>

                        <div>
                            <Link className="myBtn mr" to="/about">More about me</Link>
                            <a className="myBtn mr" href="https://drive.google.com/file/d/1gItOSegjLJ_bxnvYY4u9S9o11A6EQs3H/view" target="_blank" rel="noopener noreferrer">Download CV</a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default HomeAbout;