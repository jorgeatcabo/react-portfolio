import React from 'react';
import { Image, Col,Row,Card, Container } from "react-bootstrap"

export default function AboutMe() {
  return (
    <div>
       <br/>


<Container fluid>
<Row className="justify-content-md-center">
    <Col xs={6} md={4}>
      <Image src="/assets/images/foto.jpg" width="200" height="200" roundedCircle  />
    </Col>
  </Row>
  <br/>

  <Row>
  <Col>
 <Card border="dark">
    <Card.Header></Card.Header>
    <Card.Body>
      <Card.Title>About Me</Card.Title>
      <Card.Text>
      Hi!, let me introduce myself, It is a pleasure to show you who I am. The goal of this personal website is to tell the world that through tecnology I can help someone in any part of the world to build a web application project that can help them to achieve their goals to improve their lives personally or in their business managing.
                Please do not hesitate to reach me, I am already imaging, enjoying and developing that project that you have in mind.
      </Card.Text>
    </Card.Body>
  </Card>
  </Col> 
  </Row>
 
</Container>



  </div>

      
  );
}
