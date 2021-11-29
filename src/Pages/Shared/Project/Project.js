import React from 'react';
import { Card } from 'react-bootstrap';
import "./Project.css"

const Project =({myProject}) => {
    console.log(myProject)
    return (
        <Card className=" h-100" style={{ width: '100%' }}>
            <Card.Img className="card-img" variant="top" src={myProject.image}/>
            <Card.Body>
                <Card.Title>{myProject.name}</Card.Title>
                <Card.Text>
                    { myProject.description.slice(0, 50)}...
                </Card.Text>
            </Card.Body>
            <Card.Body>
                <Card.Link href={myProject.link.live}>Live Link</Card.Link>
                <Card.Link href={myProject.link.client}>Code Link</Card.Link>
                {
                    myProject.link.server &&
                    <Card.Link href={myProject.link.server}>Sever code Link</Card.Link>
                }
            </Card.Body>
        </Card>
    );
};

export default Project;