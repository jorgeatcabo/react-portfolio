import React from 'react'
import "../style.css"
import { Image, Col,Row,Card, Container } from "react-bootstrap"


function Project({user}) {
    const cardStyle = {
        width: '18rem',
      };
    return (
      <>
      <Row>
      <Col>
     <Card border="dark">
        <Card.Header>{`${user.title}`}</Card.Header>
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
          <img
          src={`${user.image}`}
          alt="Card cap"
          style={cardStyle}
        />
          </Card.Text>
        </Card.Body>
      </Card>
      </Col> 
      </Row>
     
        
        </>
        
    )
}

export default Project
