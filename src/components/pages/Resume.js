import React from 'react';
import { Col,Row,Card, Container } from "react-bootstrap"

export default function AboutMe() {
  return (
    <div>
       <br/>


<Container fluid>
  <Row>
  <Col>
 <Card border="dark">
    <Card.Header></Card.Header>
    <Card.Body>
    <Card.Title>
      Resume
      <br />
      <br />
      Download My Resume
    </Card.Title>
    <Card border="dark">
    <Card.Header></Card.Header>
    <Card.Body>
      <Card.Title>Front End</Card.Title>
      <Card.Text>
      
      </Card.Text>
    </Card.Body>
  </Card>
  <Card border="dark">
    <Card.Header></Card.Header>
    <Card.Body>
      <Card.Title>Backend End</Card.Title>
      <Card.Text>
      
      </Card.Text>
    </Card.Body>
  </Card>
    </Card.Body>
  </Card>
  </Col> 
  </Row>
 
</Container>



  </div>

      
  );
}
