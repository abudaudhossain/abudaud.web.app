import React from 'react';
import {Col, Container, Row } from 'react-bootstrap';
import useFeckData from '../../../hooks/feckData';
import Project from '../../Shared/Project/Project';
import './HomeProjects.css';

const HomeProjects = () => {
    const {useBestProjects} = useFeckData();
    const  myProjects = useBestProjects();
    return (
        <section id="project">
            <header>
                <h2 className='title-text mt-5' style={{ width: "200px", margin: "auto" }}>Recent <span className="text-color">Work</span></h2>
            </header>
            <Container className="my-5">
                <Row className="m-auto">
                    {
                        myProjects.map(myProject =><Col 
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

export default HomeProjects;
/*


 */