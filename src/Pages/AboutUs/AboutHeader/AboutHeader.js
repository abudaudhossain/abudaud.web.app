import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

import heroImg from "../../../profile.png";
import Typical from 'react-typical';
import { Link } from 'react-router-dom';

const AboutHeader = () => {
    return (
        <Container className="py-5">
            <Row className="justify-content-center">
                <Col sm={12} lg={5} className="py-5">
                    <div className="img-area about-header">
                        <img src={heroImg} alt="" />
                    </div>
                    <div className="text-area text-sm-center text-lg-start pb-5">
                        <p style={{ fontSize: "18px", lineHeight: "5px" }}>Hi, <span className="text-color">I'm👋🏼</span></p>
                        <h3>Abu Daud Hossain</h3>
                        <h5>I'm a {" "}
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
                        </h5>
                        <p style={{ fontSize: "16px" }}>  I have already developed 15+ projects by HTML, CSS3, BootStrap and also developed 10+ projects by React js and JavaScript. I solve 60+ programming problems in codeForces and HackerRank.</p>
                    </div>
                </Col>
                <Col sm={12} lg={7} className="px-5">
                    <div  className="text-area">
                        <div>
                            <img width="550" alt="Abu Daud Hossain Github Stats" src="https://github-readme-stats.vercel.app/api?username=abudaudhossain&show_icons=true&theme=solarized-light" />
                        </div>
                        <div>
                            <h3  className="skill-text">Programming Languages</h3>
                            <span  className="skill-myBtn mr">HTML</span>
                            <span  className="skill-myBtn mr">CSS</span>
                            <span  className="skill-myBtn mr">JavaScript</span>
                            <span  className="skill-myBtn mr">C++</span>
                            {/* <span  className="skill-myBtn mr">Python</span> */}
                            <span  className="skill-myBtn mr">Node js</span>
                        </div>
                        <div>
                            <h3  className="skill-text">Framework</h3>
                            <span  className="skill-myBtn mr">React JS</span>
                            <span  className="skill-myBtn mr">Bootstrap</span>
                            <span  className="skill-myBtn mr">Tailwind</span>
                            <span  className="skill-myBtn mr">Material-UI</span>
                        </div>
                        <div  className='mb'>
                            <h3  className="skill-text">Tools</h3>
                            <span  className="skill-myBtn mr">VS Code</span>
                            <span  className="skill-myBtn mr">git</span>
                            <span  className="skill-myBtn mr">github</span>
                            <span  className="skill-myBtn mr">React-router</span>
                            <span  className="skill-myBtn mr">Firebase</span>
                            <span  className="skill-myBtn mr">Heroku</span>
                            <span  className="skill-myBtn mr">NPM</span>
                            <span  className="skill-myBtn mr">Chrome developer tool</span>
                        </div>

                        <div  className="mt">
                            <span  className="myBtn mr">Download Resume</span>
                            <Link to="/portfolio"   className="myBtn">Portfolio</Link>
                        </div>
                    </div>
                </Col>

            </Row>
        </Container>
    );
};

export default AboutHeader;