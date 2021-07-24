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
     <a href='https://jorge-portfolio.s3.amazonaws.com/Jorge+Soto+Web+Development+_+Full+Stack+Resume+Updated+(1).pdf' target="_blank" rel="noreferrer">Download My Resume</a>
    </Card.Title>
    <Card border="dark">
    <Card.Header></Card.Header>
    <Card.Body>
      <Card.Title>Front End</Card.Title>
      <Card.Text>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>JQuery</li>
          <li>React JS</li>
          <li>Bootstrap</li>
          <li>Flexbox</li>
          <li>Handlebars</li>
        </ul>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card border="dark">
    <Card.Header></Card.Header>
    <Card.Body>
      <Card.Title>Backend End</Card.Title>
      <Card.Text>
      <ul>
          <li>Node Js</li>
          <li>Express</li>
          <li>Sequelize</li>
          <li>MySQL</li>
          <li>MVC Paradigm</li>
          <li>Heroku</li>
          <li>AWS</li>
          <li>Linux</li>
        </ul>
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
