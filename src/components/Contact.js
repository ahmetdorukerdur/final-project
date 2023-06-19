import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/contact.css';

const Contact = () => {
  return (
    <section className='section py-5'>
      <div className='container'>
        <div className='card shadow w-100'>
          <div className='card-body'>
            <div className='row sm-6'>
              <div className='col-md-6'>
                <h1>Contact Us</h1>
                <hr />
                <div className='form-group'>
                  <label className='mb-1'>Full Name</label>
                  <input type='text' className='form-control' name='' placeholder='Enter your full name' />
                </div>
                <div className='form-group'>
                  <label className='mb-1'>Phone number</label>
                  <input type='text' className='form-control' name='' placeholder='Enter your phone number' />
                </div>
                <div className='form-group'>
                  <label className='mb-1'>Email address</label>
                  <input type='text' className='form-control' name='' placeholder='Enter your email address' />
                </div>
                <div className='form-group'>
                  <label className='mb-1'>Message</label>
                  <textarea rows='3' className='form-control' name='' placeholder='Type your message' />
                </div>
                <div className='form-group py-3'>
                  <button type='button' className='btn btn-primary shadow w-100 bg-dark'>Send Message</button>
                </div>
              </div>
              <div className='col-md-6 border-start'>
                <div className='address'>
                  <i className='bi bi-house'></i>
                  <span>Akşemsettin Mahallesi, Sezai Karakoç Caddesi No:21 34510 Esenyurt/İstanbul</span>
                </div>
                <div className='address'>
                  <i className='bi bi-telephone'></i>
                  <span>+90 850 010 0101</span>
                </div>
                <div className='address'>
                  <i className='bi bi-inbox'></i>
                  <span>info@paksasoftware.com</span>
                </div>
                <div className='address'>
                  <i className='bi bi-link'></i>
                  <a href='/services'>Our Services</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;