import React from 'react';
import { Col, Collapse, Container, Row } from 'react-bootstrap';
import '../styles/about.css';

const About = () => {
  return (
    <Container>
      <Row className='px-6 my-5'>
        <Col sm={7}>
          <h5><strong>About Us</strong></h5>
        </Col>
      </Row>
      <Row className='bottom-wrapper'>
        <Col sm={20}>
          <span>As Paksa Software; We produce solutions for the software projects you need with our experience and broad perspective.</span>
        </Col>
        <Col sm={20}>
          <span>Today, science and technology are developing rapidly. In line with these developments, our country is progressing rapidly towards becoming a technology society and is working on it.</span>
        </Col>
        <Col sm={20}>
          <span>As Paksa Software, we offer web design, software development, mobile application development, e-commerce solutions, outsourcing support and software consultancy solutions so that you can use these systems more effectively and efficiently in this rapidly developing process.</span>
        </Col>
        <Col sm={20}>
          <span>With almost all services sailing to the digital world, we produce software solutions for all your demands, from mobile application service to web development service.</span>
        </Col>
      </Row>
    </Container>
  )
}

export default About;