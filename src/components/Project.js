import React from 'react'
import "../style.css"
import { Col,Row,Card } from "react-bootstrap"


function Project({project}) {
    const cardStyle = {
        width: '18rem',
      };

    return (
      <>
      <Row className="card-row">
      <Col>
     <Card border="dark">
        <Card.Header>{`${project.title}`}</Card.Header>
        <Card.Body>
          <Card.Text>
            <a href={`${project.link}`} target="_blank" rel="noreferrer"><img src={`${project.image}`} alt={`${project.title}`} style={cardStyle} /></a>
          </Card.Text>
        </Card.Body>
      </Card>
      </Col> 
      </Row>
        </>
    )
}

export default Project
