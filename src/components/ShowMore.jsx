import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Project1 from '../assets/e-commerce.png'
import Project2 from '../assets/kyrianagro.png'
import Project3 from '../assets/cargosite.png'
import Project4 from '../assets/e-commerceTasteHaven.png'



const ShowMore = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
    <div className="d-flex gap-2 flex-wrap justify-content-center ">

    <div className="card mt-3" style={{width: '20rem'}}>
  <img src={Project1} className="card-img-top rounded-2" style={{ filter: 'brightness(50%)', height:'13rem' }} alt="..."/>
  <div className='center bg-light rounded-4 card-hover'   style={{ 
         position: 'absolute', 
         top: '60%', 
         left: '50%', 
         transform: 'translate(-50%, -50%)', 
         color: 'white', 
         padding: '10px', 
         textAlign: 'center',
         width: '12rem',
         height: '8rem'
       }}>
        <div className="d-flex  gap-3 justify-content-center">
          <div className="div">
          <h5 className='text-dark fw-bold'>Ecommerce-site </h5>
          <p className='text-dark'>Full-stack project</p>
          </div>
  
  <a href="https://my-e-commerce-frontend-phi.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', textDecoration: 'none' }} className='pt-4'>
  <div style={{ 
          width: '50px', 
          height: '50px', 
          borderRadius: '50%', 
          backgroundColor: 'white', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          // boxShadow: '0px 0px 10px rgba(0, 0, 0, 1)',
          boxShadow: '0px 5px 5px rgba(2, 2, 0, 5)', // Adjusted shadow
          border: '1px solid black' // Optional border to enhance visibility
        }} className='hover-effect2' >
          <i className="fa-solid fa-location-arrow" style={{ fontSize: '24px', color: 'black' }}></i>
        </div>
      </a>
  </div>
  </div>
  {/* <p>https://cargo-site.netlify.app</p> */}
  {/* <p>https://my-e-commerce-frontend-phi.vercel.app/</p> */}
  {/* <p>https://kyrianagroventures.com/</p> */}
  {/* <p>https://e-commerce-ozy.netlify.app/</p> */}
  {/* <p>my portfolio</p> */}
  
</div>
{/* second card */}
<div className="card mt-3" style={{width: '20rem'}}>
  <img src={Project2} className="card-img-top rounded-2 " style={{ filter: 'brightness(50%)', height:'13rem' }} alt="..."/>
  <div className='center bg-light rounded-4'   style={{ 
         position: 'absolute', 
         top: '60%', 
         left: '50%', 
         transform: 'translate(-50%, -50%)', 
         color: 'white', 
         padding: '10px', 
         textAlign: 'center',
         width: '12rem',
         height: '8rem'
       }}>
        <div className="d-flex  gap-3 justify-content-center ">
          <div className="div">
          <h5 className='text-dark fw-bold'>Agriculture-site </h5>
          <p className='text-dark'>Full-stack project</p>
          </div>
  
  <a href="https://kyrianagroventures.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', textDecoration: 'none' }} className='pt-4'>
  <div style={{ 
          width: '50px', 
          height: '50px', 
          borderRadius: '50%', 
          backgroundColor: 'white', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          // boxShadow: '0px 0px 10px rgba(0, 0, 0, 1)',
          boxShadow: '0px 5px 5px rgba(2, 2, 0, 5)', // Adjusted shadow
          border: '1px solid black' // Optional border to enhance visibility
        }} className='hover-effect2'>
          <i className="fa-solid fa-location-arrow" style={{ fontSize: '24px', color: 'black' }}></i>
        </div>
      </a>
  </div>
  </div>
  {/* <p>https://cargo-site.netlify.app</p> */}
  {/* <p>https://my-e-commerce-frontend-phi.vercel.app/</p> */}
  {/* <p>https://kyrianagroventures.com/</p> */}
  {/* <p>https://e-commerce-ozy.netlify.app/</p> */}
  {/* <p>my portfolio</p> */}
  
</div>
{/* third card */}

<div className="card mt-3" style={{width: '20rem'}}>
  <img src={Project3} className="card-img-top rounded-2" style={{ filter: 'brightness(50%)', height:'13rem' }} alt="..."/>
  <div className='center bg-light rounded-4'   style={{ 
         position: 'absolute', 
         top: '60%', 
         left: '50%', 
         transform: 'translate(-50%, -50%)', 
         color: 'white', 
         padding: '10px', 
         textAlign: 'center',
         width: '12rem',
         height: '8rem'
       }}>
        <div className="d-flex  gap-3 justify-content-center">
          <div className="div">
          <h5 className='text-dark fw-bold'>Cargo-site </h5>
          <p className='text-dark'>Frontend project</p>
          </div>
  
  <a href="https://cargo-site.netlify.app" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', textDecoration: 'none' }} className='pt-4'>
  <div style={{ 
          width: '50px', 
          height: '50px', 
          borderRadius: '50%', 
          backgroundColor: 'white', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          // boxShadow: '0px 0px 10px rgba(0, 0, 0, 1)',
          boxShadow: '0px 5px 5px rgba(2, 2, 0, 5)', // Adjusted shadow
          border: '1px solid black' // Optional border to enhance visibility
        }} className='hover-effect2'>
          <i className="fa-solid fa-location-arrow" style={{ fontSize: '24px', color: 'black' }}></i>
        </div>
      </a>
  </div>
  </div>
  {/* <p>https://cargo-site.netlify.app</p> */}
  {/* <p>https://my-e-commerce-frontend-phi.vercel.app/</p> */}
  {/* <p>https://kyrianagroventures.com/</p> */}
  {/* <p>https://e-commerce-ozy.netlify.app/</p> */}
  {/* <p>my portfolio</p> */}
  
</div>
{isExpanded && (
          <span>
            {' '}

            <div className="card mt-3" style={{width: '20rem'}}>
  <img src={Project4} className="card-img-top rounded-2" style={{ filter: 'brightness(50%)', height:'13rem' }} alt="..."/>
  <div className='center bg-light rounded-4'   style={{ 
         position: 'absolute', 
         top: '60%', 
         left: '50%', 
         transform: 'translate(-50%, -50%)', 
         color: 'white', 
         padding: '10px', 
         textAlign: 'center',
         width: '12rem',
         height: '8rem'
       }}>
        <div className="d-flex  gap-3 justify-content-center">
          <div className="div">
          <h5 className='text-dark fw-bold'>Cafe-site </h5>
          <p className='text-dark'>Frontend project</p>
          </div>
  
  <a href="#" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', textDecoration: 'none' }} className='pt-4'>
  <div style={{ 
          width: '50px', 
          height: '50px', 
          borderRadius: '50%', 
          backgroundColor: 'white', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          // boxShadow: '0px 0px 10px rgba(0, 0, 0, 1)',
          boxShadow: '0px 5px 5px rgba(2, 2, 0, 5)', // Adjusted shadow
          border: '1px solid black' // Optional border to enhance visibility
        }} className='hover-effect2'>
          <i className="fa-solid fa-location-arrow" style={{ fontSize: '24px', color: 'black' }}></i>
        </div>
      </a>
  </div>
  </div>
  {/* <p>https://cargo-site.netlify.app</p> */}
  {/* <p>https://my-e-commerce-frontend-phi.vercel.app/</p> */}
  {/* <p>https://kyrianagroventures.com/</p> */}
  {/* <p>https://e-commerce-ozy.netlify.app/</p> */}
  {/* <p>my portfolio</p> */}
  
</div>

{/* fifth  */}
<div className="card mt-3" style={{width: '20rem'}}>
  <img src={Project1} className="card-img-top rounded-2" style={{ filter: 'brightness(50%)', height:'13rem' }} alt="..."/>
  <div className='center bg-light rounded-4 card-hover'   style={{ 
         position: 'absolute', 
         top: '60%', 
         left: '50%', 
         transform: 'translate(-50%, -50%)', 
         color: 'white', 
         padding: '10px', 
         textAlign: 'center',
         width: '12rem',
         height: '8rem'
       }}>
        <div className="d-flex  gap-3 justify-content-center">
          <div className="div">
          <h5 className='text-dark fw-bold'>Ecommerce-site </h5>
          <p className='text-dark'>Full-stack project</p>
          </div>
  
  <a href="https://my-e-commerce-frontend-phi.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', textDecoration: 'none' }} className='pt-4'>
  <div style={{ 
          width: '50px', 
          height: '50px', 
          borderRadius: '50%', 
          backgroundColor: 'white', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          // boxShadow: '0px 0px 10px rgba(0, 0, 0, 1)',
          boxShadow: '0px 5px 5px rgba(2, 2, 0, 5)', // Adjusted shadow
          border: '1px solid black' // Optional border to enhance visibility
        }} className='hover-effect2' >
          <i className="fa-solid fa-location-arrow" style={{ fontSize: '24px', color: 'black' }}></i>
        </div>
      </a>
  </div>
  </div>
  {/* <p>https://cargo-site.netlify.app</p> */}
  {/* <p>https://my-e-commerce-frontend-phi.vercel.app/</p> */}
  {/* <p>https://kyrianagroventures.com/</p> */}
  {/* <p>https://e-commerce-ozy.netlify.app/</p> */}
  {/* <p>my portfolio</p> */}
  
</div>


</span>
)}
</div>
 <div className="custom-width2 " style={{ display: 'flex', justifyContent: 'center' }}>
<Button variant="link" onClick={toggleExpand} className="btn text-light rounded-pill border-white p-3 mt-3 hover-effect"style={{ border: '2px solid white', backgroundColor: 'transparent',textDecoration: 'none'}}>
        {isExpanded ? 'Show Less' : 'Show More'} <i className="fa-solid fa-arrow-up-right-from-square text-light px-2"></i>
      </Button>

      </div>

    </>
  );
};

export default ShowMore;
