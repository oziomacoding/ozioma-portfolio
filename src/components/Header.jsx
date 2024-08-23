import React, { useEffect, useState } from 'react';
import Logo from '../assets/logo.png'


function Header() {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); //state for dropdown visibility


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Adjust scroll value as needed
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  //.................closing dropdown in small screen............

  // const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen); // Toggle dropdown state
  const closeDropdown = () => setIsOpen(false); // Close dropdown

  return (
    <>
    
<nav className={`navbar navbar-expand-lg pt-3 sticky-top mb-5 ${isScrolled ? 'scrolled' : ''}`}>
  <div className="container">
    <a className="navbar-brand" href="/"><img src={Logo} alt="logo" className="img-fluid" style={{ width: '150px', height: 'auto' }}/></a>
    <button className="navbar-toggler border border-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded={isOpen ? "true" : "false"} aria-label="Toggle navigation" onClick={toggleDropdown}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
    <div className=" remove border-white rounded-pill px-3 py-2 mx-auto " style={{ border: '2px solid white', backgroundColor: 'transparent' }}>
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="/" onClick={closeDropdown}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#about-me" onClick={closeDropdown}>About Me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#services" onClick={closeDropdown}>Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#my-work" onClick={closeDropdown}>My Work</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#contact-me" onClick={closeDropdown}>Contact Me</a>
        </li>
      </ul>
    </div>
    
    <a href="#contact-me" className="text-decoration-none">
    <button type="button" className="btn text-light rounded-pill border-white p-3 d-none d-lg-block"style={{ border: '2px solid white', backgroundColor: 'transparent' }}>Contact <i className="fa-solid fa-arrow-up-right-from-square text-light px-1"></i></button>
    </a>

    </div>
  </div>
</nav>

    </>
  )
}

export default Header