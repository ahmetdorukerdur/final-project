import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/home.css';
import Mobile from '../images/mobile application.jpeg';
import Software from '../images/software development.jpeg';

const Home = () => {
  return (
    <Container>
      <Row className='px-4 my-5'>
        <Col sm={7}>
          <h2>Paksa Software Service</h2>
        </Col>
        <Col sm={8}>
          <h3>All you needs for software...</h3>
        </Col>
        <Col sm={9}>
          <span>It doesn't matter if you are a corporate company, SME or a brand new venture at the beginning of the road! Paksa Software works systematically to bring your brand and project together with the trends of the digital world by using the latest technologies. Are you ready to get ahead of your competitors with the special software solutions we offer you?</span>
        </Col>
      </Row>
      <Row>
        <div className='card h-100'>
          <img className='card-img-top' src={Mobile} />
          <div className='card-body'>
            <h5 className='card-title'>Mobile Applications</h5>
            <p className='card-text'>We develop hybrid and native mobile applications for you to take part in the mobile world professionally.</p>
          </div>
        </div>
        <div className='card h-100'>
          <img className='card-img-top' src={Software} />
          <div className='card-body'>
            <br/>
            <br/>
            <h5 className='card-title'>Software Development</h5>
            <p className='card-text'>We produce custom professional software solutions for all your software demands.</p>
          </div>
        </div>
      </Row>
    </Container>
  )
}

export default Home;