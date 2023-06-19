import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Agency from '../images/web design agency.webp';
import Integration from '../images/integration services.jpeg';
import ECommerce from '../images/e-commerce.jpg';

const Services = () => {
  return (
    <Container>
      <Row className='all-cards px-4 my-5'>
        <div className='card h-100 col-4'>
          <img className='card-img-top' src={Agency} />
          <div className='card-body'>
            <h5 className='card-title'>Web Design Agency</h5>
            <p className='card-text'>We professionally prepare the front of your corporate, personal and private websites.</p>
          </div>
        </div>
        <div className='card h-100 col-4'>
          <img className='card-img-top' src={Integration} />
          <div className='card-body'>
            <h5 className='card-title'>Integration Services</h5>
            <p className='card-text'>We enable you to manage your integration processes with Paksa Software Stock from a single point.</p>
          </div>
        </div>
        <div className='card h-100'>
          <img className='card-img-top' src={ECommerce} />
          <div className='card-body'>
            <br/>
            <h5 className='card-title'>E-Commerce</h5>
            <p className='card-text'>We offer you quality e-commerce solutions to bring your products to wider markets.</p>
          </div>
        </div>
      </Row>
    </Container>
  )
}

export default Services;