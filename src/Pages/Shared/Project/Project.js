import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Project.css"

const Project = ({ myProject }) => {
    // console.log(myProject)
    return (
        <Card className=" h-100" style={{ width: '100%' }}>
            <div className="card-img" >

                <Card.Img variant="top" src={myProject.image} />
            </div>
            <Card.Body>
                <Card.Title><h3>{myProject.name}</h3></Card.Title>
                <Card.Text>
                    {myProject.description.slice(0, 100)}...
                </Card.Text>
                {
                    myProject.technology.map(tech => <span key={tech} className="skill-myBtn mr">{tech}</span>)
                }
            </Card.Body>
            <Card.Footer>
                <Link className="myBtn mr" to={`/details/${myProject.serialNo}`}>Details</Link>
                <span className="code">
                    <Card.Link href={myProject.link.live} title="Live website"> 

                    <span
                        className="web-link"><i className="fas fa-external-link-alt"></i></span>
                        </Card.Link>
                    <Card.Link href={myProject.link.client} title="Client Code"><span
                        className=""><i className="fa fa-github"></i></span></Card.Link>
                    {
                        myProject.link.server &&
                        <Card.Link href={myProject.link.server} title="Server Code"> <span
                        className=""><i className="fa fa-github"></i></span></Card.Link>
                    }
                </span>
            </Card.Footer>
        </Card>
    );
};

export default Project;