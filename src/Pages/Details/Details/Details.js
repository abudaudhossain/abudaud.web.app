import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useFeckData from '../../../hooks/feckData';
import img from "../../../img2.png";
import profile from "../../../profile.png";

const Details = () => {
    let img2;
    const [showImg, setShowImg] = useState(img2);
    // const [myAllProjects, setMyAllProjects] = useState([]);
    const { serialNo } = useParams();
    const useProjects = useFeckData();
    const projects = useProjects();
    const myProject = projects.find(project => project.serialNo === parseInt(serialNo))
    if (!myProject) {
        return <h1>Loading....</h1>
    }
    const { name, image, link, features, technology, description } = myProject;
    if (!showImg) {
        setShowImg(image);
    }
    // console.log(showImg);
    return (
        <Container className="my-5">
            <h1 className="my-3">{name}</h1>
            <div>
                <img className="img-thumbnail" style={{ height: "80vh" }} src={showImg} alt="" />
                <div className="my-3">
                    <img className="me-3" onClick={() => setShowImg(image)} src={image} style={{ width: "100px", height: "60px" }} alt="" />
                    <img className="me-3" onClick={() => setShowImg(img)} src={img} style={{ width: "100px", height: "60px" }} alt="" />
                    <img className="me-3" onClick={() => setShowImg(profile)} src={profile} style={{ width: "100px", height: "60px" }} alt="" />
                </div>
            </div>
            <div className="mt-5">

                <p>
                    {description}
                </p>
                <p>
                    WebPages are fully responsive based on Bootstrap framework. All files and code has been well organized and nicely commented for easy to customize.
                </p>
                <p>
                    Page is a easy to use one page template with lots of great features and ready made sections like: about us, achievement counts, testimonials carousel, services icon boxes, call to action, portfolio, portfolio details page, team, pricing, frequently asked questions and others.
                </p>
                <div>
                    <h4>Key Features:</h4>
                    {
                        features.map(feature => <h6 Key={feature}>✔ {feature}</h6>)
                    }
                </div>
                <div>
                    <h4>Technology:</h4>
                    {
                        technology.map(tec => <span key={tec} className="skill-myBtn mr">{tec}</span>)
                    }

                </div>
            </div>
            <div className="my-4">
                <a href={link.live} target="_blank" rel="noopener noreferrer"> <span className="myBtn mr" ><span
                    className=""><i className="fas fa-external-link-alt"></i></span> Live Demo</span></a>
                <a href={link.client} target="_blank" rel="noopener noreferrer"> <span className="myBtn mr" ><span
                    className=""><i className="fa fa-github"></i></span> Client Code</span></a>
                {
                    link.server &&
                    <a href={link.server} target="_blank" rel="noopener noreferrer"> <span className="myBtn mr" ><span
                        className=""><i className="fa fa-github"></i></span> Server Code</span></a>
                }

            </div>
        </Container>
    );
};

export default Details;