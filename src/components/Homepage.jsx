import React from 'react'
import Typewriter from 'typewriter-effect';
import Halfozioma from '../assets/ozioma2.jpg'
import Resume from '../assets/PAULEEN_OZIOMA_RESUME.pdf'; // Adjust the path as needed
import AboutMe from './Aboutme';
import Services from './Services';
import MyWork from './Mywork';
import ContactMe from './Contactme';





function Homepage() {
  return (
    <>
      <div className="hero pb-5">
        <div className="container text-center text-light">
          <img src={Halfozioma} className="rounded mx-auto d-block img-fluid rounded-circle shadow-4-strong" alt="..." style={{ width: '150px', height: 'auto' }} />
          <p>Hi! I'm Ozioma Pauleen</p>
          <h1 className='pt-3 fw-bold' style={{ marginTop: '0px', fontFamily: 'Platypi, serif' }}>

            <Typewriter
              options={{
                strings: ['Full-stack Web Developer'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className='custom-width'>I am a full-stack developer from Nigeria.</p>
          <div className=" d-flex justify-content-center pt-4">
            <a href="#contact-me" className="text-decoration-none">
              <button type="button" className="btn text-dark rounded-pill btn-light custom-mixed-color p-3 mx-2"> Contact me<i className="fa-solid fa-arrow-right-from-bracket text-dark px-2"></i></button>
            </a>
            <a href={Resume} download className="btn text-dark rounded-pill btn-light p-3 mx-2">
              My resume <i className="fa-solid fa-arrow-down text-dark px-1"></i>
            </a>
          </div>


        </div>
      </div>

      <div>
        <section id="about-me" className='pt-5'>
          <AboutMe />
        </section>
        <section id="services" className='pt-5'>
          <Services />
        </section>
        <section id="my-work" className='pt-5'>
          <MyWork />
        </section>
        <section id="contact-me" className='pt-5'>
          <ContactMe />
        </section>
      </div>


    </>
  )
}

export default Homepage