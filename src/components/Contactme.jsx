import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios'



function Contactme() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''

  });
  const [errors, setErrors] = useState({});
  const [captchaValue, setCaptchaValue] = useState(null);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Invalid email format';
    }

    if (!formData.message.trim()) {
      errors.message = 'message is required';
    }

    if (!captchaValue) {
      errors.captcha = 'Please verify that you are not a robot';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {

      try{
        const response = await axios.post('https://ozioma.kyrianagroventures.com/contact/postcontact/', {...formData, recaptcha_token: captchaValue});
        console.log('Form Submitted',response.data);
      alert('Message sent successfully');
      // console.log(formData); //delete later
      // page reload
      window.location.reload();
    }
    catch (error) {
      if (error.response) {
        console.error('Error response:', error.response.data);
      } else {
        console.error('Error:', error.message);
      }
      }
    }
  };

  const onCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  return (
    <>
      <div id="aboutme" className="container text-center text-light pt-5 pb-5">
        <div className="custom-width2" >
          <p>Connect with me</p>
          <div className="d-flex flex-wrap justify-content-center pb-5 pt-3">
            <div className="icon bg-lightdark rounded-2 mx-3 hover-effect mt-3" style={{ width: '100px', height: '50px' }}>
              <a href="tel:09137029216" className='text-decoration-none text-light ' target="_blank" rel="noopener noreferrer">
                <i className="fa fa-phone"></i>
                <p className=''>Call</p>
              </a>
            </div>

            <div className="icon bg-lightdark rounded-2 mx-3 hover-effect mt-3" style={{ width: '100px', height: '50px' }}>
              <a href="https://linkedin.com/oziomaleen" className='text-decoration-none text-light' target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin-in"></i>
                <p className=''>Linkedin</p>
              </a>
            </div>

            <div className="icon bg-lightdark rounded-2 mx-3 hover-effect mt-3 " style={{ width: '100px', height: '50px' }}>
              <a href="https://twitter.com/oziomaleen" className='text-decoration-none text-light' target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-x-twitter"></i>
                <p className=''>Twitter</p>
              </a>
            </div>

            <div className="icon bg-lightdark rounded-2 mx-3 hover-effect mt-3 " style={{ width: '100px', height: '50px' }}>
              <a href="https://wa.me/+2348101156717" className='text-decoration-none text-light' target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i>
                <p className=''>Whatsapp</p>
              </a>
            </div>

          </div>
          <h2 className='' style={{ marginTop: '0px', fontFamily: 'Platypi, serif' }}>Get in touch</h2>
          <p>I'd love to hear from you! If you have any questions, comments or feedback, please use the form below.</p>
        </div>


      </div>
      <form action="" className='text-center mb-5 custom-width2' onSubmit={handleSubmit}>
  <div className="row justify-content-center">
    <div className="col-12 col-md-5 mb-3">
      <input type="text" name="name" value={formData.name} placeholder='Enter your name' 
             className={`form-control rounded-2 px-2 py-3 border-light text-light ${errors.name && 'is-invalid'}`} 
             style={{ backgroundColor: '#0d1f48' }} onChange={handleChange} />
      {errors.name && <div className="invalid-feedback">{errors.name}</div>}
    </div>
    <div className="col-12 col-md-5 mb-3">
      <input type="email" name="email" value={formData.email} placeholder='Enter your email' 
             className={`form-control rounded-2 px-2 py-3 border-light text-light ${errors.email && 'is-invalid'}`} 
             style={{ backgroundColor: '#0d1f48' }} onChange={handleChange} />
      {errors.email && <div className="invalid-feedback">{errors.email}</div>}
    </div>
  </div>
  <div className="row justify-content-center">
    <div className="col-12 col-md-10">
      <textarea
        name="message"
        value={formData.message}
        placeholder="Enter your message"
        className={`form-control rounded-2 border-light text-light ${errors.message && 'is-invalid'}`}
        style={{ backgroundColor: '#0d1f48' }}
        rows="10"
        onChange={handleChange}>
      </textarea>
      {errors.message && <div className="invalid-feedback">{errors.message}</div>}
      
      <div className="mt-3">
        <ReCAPTCHA
          sitekey="6LfZtiwqAAAAADpGIPdTXRK20eNzSwOvLSoL52Kf"
          onChange={onCaptchaChange} />
        {errors.captcha && <div className="invalid-feedback d-block">{errors.captcha}</div>}
      </div>
    </div>
  </div>
  <div className="d-flex justify-content-center">
    <button className='btn btn-light rounded-pill border-white text-light p-3 mt-3 hover-effect' 
            style={{ border: '2px solid white', backgroundColor: 'transparent' }}>
      Submit now <i className="fa-solid fa-arrow-up-right-from-square text-light px-2"></i>
    </button>
  </div>
</form>

    </>
  );
}

export default Contactme;
