import React, { useEffect, useState } from 'react';
import {Col, Container, Row } from 'react-bootstrap';
import Project from '../../Shared/Project/Project';
import './HomeProjects.css';

const HomeProjects = () => {
    const [myProjects, setMyProjects] = useState([]);

    useEffect(() =>{
        fetch("./projects.json")
        .then(res =>res.json())
        .then(data => setMyProjects(data));
    },[])
    console.log(myProjects)
    return (
        <section id="project">
            <header>
                <h2 class='title-text' style={{ width: "200px", margin: "auto" }}>Recent <span class="text-color">Work</span></h2>
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