import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Project1 from '../assets/e-commerce.png';
import Project2 from '../assets/kyrianagro.png';
import Project3 from '../assets/cargosite.png';
import Project4 from '../assets/portfolio-site.png';
import Project5 from '../assets/e-commerceTasteHaven.png';

const ProjectCard = ({ imgSrc, title, description, link }) => (
  <div className="card mt-3" style={{ width: '20rem' }}>
    <img src={imgSrc} className="card-img-top rounded-2" style={{ filter: 'brightness(50%)', height: '13rem' }} alt={title} />
    <div
      className="center-wrapper"
      style={{
        position: 'absolute',
        top: '60%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
    <div className="center bg-light rounded-4 card-hover" style={{ 
      color: 'white', 
      padding: '10px', 
      textAlign: 'center',
      width: '12rem',
      height: '8rem'
    }}>
      <div className="d-flex gap-3 justify-content-center">
        <div>
          <h5 className="text-dark fw-bold">{title}</h5>
          <p className="text-dark">{description}</p>
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', textDecoration: 'none' }} className="pt-4">
          <div style={{ 
            width: '50px', 
            height: '50px', 
            borderRadius: '50%', 
            backgroundColor: 'white', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            boxShadow: '0px 5px 5px rgba(2, 2, 0, 5)', 
            border: '1px solid black'
          }} className="hover-effect2">
            <i className="fa-solid fa-location-arrow" style={{ fontSize: '24px', color: 'black' }}></i>
          </div>
        </a>
      </div>
    </div>
    </div>
  </div>
);

const ShowMore = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const projects = [
    { imgSrc: Project1, title: 'Ecommerce-site', description: 'Full-stack project', link: 'https://my-e-commerce-frontend-phi.vercel.app/' },
    { imgSrc: Project2, title: 'Agriculture-site', description: 'Full-stack project', link: 'https://kyrianagroventures.com/' },
    { imgSrc: Project3, title: 'Cargo-site', description: 'Frontend project', link: 'https://cargo-site.netlify.app' },
    { imgSrc: Project4, title: 'Portfolio-site', description: 'Full-stack', link: '#' },
    { imgSrc: Project5, title: 'Cafe-site', description: 'Frontend project', link: 'https://e-commerce-ozy.netlify.app/' },
  ];

  return (
    <>
      <div className="d-flex gap-2 flex-wrap justify-content-center">
        {projects.slice(0, isExpanded ? projects.length : 3).map((project, index) => (
          <ProjectCard 
            key={index} 
            imgSrc={project.imgSrc} 
            title={project.title} 
            description={project.description} 
            link={project.link} 
          />
        ))}
      </div>
      <div className="custom-width2" style={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant="link" onClick={toggleExpand} className="btn text-light rounded-pill border-white p-3 mt-3 hover-effect" style={{ border: '2px solid white', backgroundColor: 'transparent', textDecoration: 'none' }}>
          {isExpanded ? 'Show Less' : 'Show More'} <i className="fa-solid fa-arrow-up"></i>
        </Button>
      </div>
    </>
  );
};

export default ShowMore;
