import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DentalCare from "../../../dentalCare.png";
import img from "../../../img2.png";
import profile from "../../../profile.png";

const Details = () => {
    const [showImg, setShowImg] = useState(DentalCare)
    return (
        <Container className="my-5">
            <h1 className="my-3">DentalCare</h1>
            <div>
                <img className="img-thumbnail" style={{ height: "80vh" }} src={showImg} alt="" />
                <div className="my-3">
                    <img className="me-3" onClick={()=>setShowImg(DentalCare)} src={DentalCare} style={{ width: "100px", height: "60px" }} alt="" />
                    <img className="me-3" onClick={()=>setShowImg(img)} src={img} style={{ width: "100px", height: "60px" }} alt="" />
                    <img className="me-3" onClick={()=>setShowImg(profile)} src={profile} style={{ width: "100px", height: "60px" }} alt="" />
                </div>
            </div>
            <div className="mt-5">

                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere distinctio similique autem accusamus molestiae voluptas libero consectetur aperiam sed minus impedit iusto deleniti beatae, expedita saepe amet ad exercitationem voluptates?
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere distinctio similique autem accusamus molestiae voluptas libero consectetur aperiam sed minus impedit iusto deleniti beatae, expedita saepe amet ad exercitationem voluptates? Corporis quae, alias, officiis eos tempora fuga non quaerat incidunt
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere distinctio similique autem accusamus molestiae voluptas libero consectetur aperiam sed minus impedit iusto deleniti beatae, expedita saepe amet ad exercitationem voluptates? Corporis quae, alias, officiis eos tempora fuga non quaerat incidunt minima mollitia beatae fugiat! Optio laudantium consequuntur autem hic ipsum?
                </p>
                <div>
                    <h4>Key Features:</h4>
                    <h6>✔ amet consectetur adipisicing elit</h6>
                    <h6>✔ amet consectetur adipisicing elit</h6>
                    <h6>✔ amet consectetur adipisicing elit</h6>
                    <h6>✔ amet consectetur adipisicing elit</h6>
                    <h6>✔ amet consectetur adipisicing elit</h6>
                    <h6>✔ amet consectetur adipisicing elit</h6>
                </div>
                <div>
                    <h4>Technology:</h4>
                    <span className="skill-myBtn mr">JavaScript</span>
                    <span className="skill-myBtn mr">React JS</span>
                    <span className="skill-myBtn mr">HTML5</span>
                    <span className="skill-myBtn mr">Css3</span>
                </div>
            </div>
            <div className="my-4">
                <Link className="myBtn mr" to="/details">Live Demo</Link>
                <Link className="myBtn mr" to="/details">Client Code</Link>
            </div>
        </Container>
    );
};

export default Details;