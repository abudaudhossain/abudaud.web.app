import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useFeckData from '../../../hooks/feckData';
import Project from '../../Shared/Project/Project';

const MyProjects = () => {
    const {useProjects} = useFeckData();
    const myProjects = useProjects();
    return (
        <section id="project">

                <Container className="my-5">
                    <header>

                        <div className='mySkill py-3' style={{fontSize:"16px"}}>
                            <span className="skill-myBtn active mr">All Project</span>
                            <span className="skill-myBtn mr">HTML5 and CSS3 </span>
                            <span className="skill-myBtn mr">JavaScript</span>
                            <span  className="skill-myBtn mr">React JS</span>
                            <span  className="skill-myBtn mr">Bootstrap</span>
                            <span  className="skill-myBtn mr">Tailwind</span>
                            <span  className="skill-myBtn mr">Material-UI</span>


                        </div>
                    </header>
                    <Row className="m-auto">
                        {
                            myProjects.map(myProject => <Col
                                key={myProject.serialNo}
                                className="col-12 col-sm-12 col-md-6 col-lg-4 my-3"
                            >
                                <Project myProject={myProject}></Project>
                            </Col>)
                        }
                    </Row>
                </Container>
            </section>
    );
};

export default MyProjects;