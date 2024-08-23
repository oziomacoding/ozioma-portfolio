import React from 'react'
import ReadMore from './ReadMore';
import fullstack from '../assets/fullstack icon.png'
import frontend from '../assets/frontend icon.png'
import backend from '../assets/backend.png'

function Services() {
  return (
    <>
 <div id="services" className="container text-center text-light pt-5 pb-5">
                <div className="custom-width" >
                    <p>What i offer</p>
                    <h2 className='' style={{ marginTop: '0px', fontFamily: 'Platypi, serif' }}>My services</h2>
                </div>


            </div>


<div className="services pt-5 pb-5">
  <div className="custom-width2 d-flex flex-wrap justify-content-center gap-4 ">
  <div className="card text-light  h-200 custom-card p-1 card-hover " style={{width: '18rem', border: '2px solid white', backgroundColor: 'transparent' }}>
  <div className="card-body">
    <div className=" bg-red rounded mx-auto d-block img-fluid rounded-circle shadow-4-strong">
    <img src={frontend} alt="" className="img-fluid pb-1" style={{ width: '50px', height: 'auto',display: 'block', marginLeft: 'auto', marginRight: 'auto' }}/>
    </div>
    <h5 className="card-title text-danger text-center">Frontend development</h5>
    
    <div className="card-text text-center">
    <ReadMore
            summary="I design responsive webpages that provide a seamless user experience across all devices. My work includes creating interactive and visually appealing interfaces,"
            details="ensuring that the design is both functional and aesthetically pleasing. I also focus on optimizing load times, implementing accessibility best practices, and ensuring cross-browser compatibility to deliver high-quality web applications that engage users effectively."
          />
      </div>
  </div>
</div>
<div className="card text-light  h-200 custom-card p-1 card-hover" style={{width: '18rem', border: '2px solid white', backgroundColor: 'transparent' }}>
  <div className="card-body">
    <div className=" bg-red rounded mx-auto d-block img-fluid rounded-circle shadow-4-strong">
    <img src={backend} alt="" className="img-fluid pb-1" style={{ width: '50px', height: 'auto',display: 'block', marginLeft: 'auto', marginRight: 'auto' }}/>
    </div>
    <h5 className="card-title text-danger text-center">Backend development</h5>
    
    <div className="card-text text-center">
    <ReadMore
            summary="I develop robust and scalable server-side applications using modern backend technologies. My expertise includes designing and managing databases, creating and integrating APIs, and ensuring the security and performance of web applications."
            details="I also implement authentication systems, manage server configurations. My goal is to build reliable systems that support seamless frontend experiences and handle complex data processing efficiently."
          />
      </div>
  </div>
</div>
<div className="card text-light  h-200 custom-card p-1 card-hover" style={{width: '18rem', border: '2px solid white', backgroundColor: 'transparent' }}>
  <div className="card-body">
    <div className=" bg-red rounded mx-auto d-block img-fluid rounded-circle shadow-4-strong">
    <img src={fullstack} alt="" className="img-fluid pb-1" style={{ width: '50px', height: 'auto',display: 'block', marginLeft: 'auto', marginRight: 'auto' }}/>
    </div>
    <h5 className="card-title text-danger text-center">Full-stack services</h5>
    
    <div className="card-text text-center">
    <ReadMore
            summary="I offer comprehensive full-stack development services. I design and implement responsive user interfaces, manage server-side logic, and integrate robust APIs to create seamless, end-to-end web applications."
            details="My expertise includes deploying and maintaining applications on cloud platforms and ensuring the application is secure, scalable, and optimized for performance. I provide a holistic approach to development, delivering complete solutions that meet the needs of both users and businesses"
          />
      </div>
    
  </div>
</div>
  </div>
</div>
    </>
  )
}

export default Services