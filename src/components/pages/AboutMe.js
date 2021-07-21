import React from 'react';
import { Image, Col,Row } from "react-bootstrap"

export default function AboutMe() {
  return (
       <>

<h2 id="about-me">About Jorge Soto</h2>
<Row>
    <Col xs={6} md={4}>
      <Image className="photo" src="/assets/images/foto.jpg" width="200" height="200" roundedCircle  />
    </Col>
  </Row>

  <p> 
    Hi!, let me introduce myself, It is a pleasure to show you who I am. The goal of this personal website is to tell the world that through tecnology I can help someone in any part of the world to build a web application project that can help them to achieve their goals to improve their lives personally or in their business managing.
  </p>
  <p>
    Please do not hesitate to reach me, I am already imaging, enjoying and developing that project that you have in mind.
    Below are the ways you can do it.
  </p>

</>

      
  );
}
