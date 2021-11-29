import React from 'react';
import { Card } from 'react-bootstrap';
import dentalCare from "../../../dentalCare.png"
import "./Project.css"

const Project = () => {
    return (
        <Card style={{ width: '100%' }}>
            <Card.Img className="card-img" variant="top" src={dentalCare}/>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
            </Card.Body>
            <Card.Body>
                <Card.Link href="#">Live Link</Card.Link>
                <Card.Link href="#">Code Link</Card.Link>
                <Card.Link href="#">sever code Link</Card.Link>
            </Card.Body>
        </Card>
    );
};

export default Project;