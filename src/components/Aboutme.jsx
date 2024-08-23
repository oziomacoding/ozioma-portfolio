import React from 'react'
import Fullozioma from '../assets/ozioma.jpg'
import vscode from '../assets/vscode icon.png'
import django from '../assets/django icon.png'
import figma from '../assets/figma icon.png'
import git from '../assets/git icon.png'
import mongodb from '../assets/mongodb icon.png'
import bootstrap from '../assets/bootstrap icon.png'


function Aboutme() {
    return (
        <>
            <div id="aboutme" className="container text-center text-light pt-5 pb-5">
                <div className="custom-width" >
                    <p>Introduction</p>
                    <h2 className='' style={{ marginTop: '0px', fontFamily: 'Platypi, serif' }}>About Me</h2>
                </div>


            </div>
            <div className="custom-width2 pt-5 pb-5">
                <div className="row ">
                    <div className=" col-12 col-lg-5 ">
                        <div className="position-relative">
                            <img src={Fullozioma} alt="" className="img-fluid rounded-5 mx-auto d-block" style={{ width: '100%', maxWidth: '400px', height: 'auto' }} />
                      
                        </div>
                    </div>
                    <div className=" col-12 col-lg-7 text-light">
                        <p className='pb-3 mt-3 mt-lg-0'>I am a dedicated Full-Stack Developer with 9 months of hands-on experience. I have had the opportunity to collaborate with an organization as an intern, where I gained valuable insights and honed my coding skills.</p>
                        <div className="row">
                            <div className="col-md-4 mb-4 mb-md-0">
                                <div className="card text-light h-100 custom-card card-hover" style={{ border: '2px solid white', backgroundColor: 'transparent' }}>
                                    <div className="card-body">
                                        <i className="fa-solid fa-code text-light fa-2x" style={{ width: '100%' }}></i>
                                        <h5 className="card-title pt-4 ">Languages</h5>
                                        <p className="card-text pt-4">HTML, CSS, JavaScript, React Js, Python.</p>
                                    </div>
                                </div>
                            </div>

                            <div className=" col-md-4 mb-4 mb-md-0">
                                <div className="card text-light  h-100 custom-card card-hover" style={{ border: '2px solid white', backgroundColor: 'transparent' }}>
                                    <div className="card-body">
                                        <i className="fa-solid fa-graduation-cap text-light fa-2x" style={{ width: '100%' }}></i>
                                        <h5 className="card-title pt-4 ">Certification</h5>
                                        <p className="card-text pt-4">Completed a Full-Stack Development training program at Decent Job</p>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-md-4 mb-4 mb-md-0">
                                <div className="card text-light h-100 custom-card card-hover" style={{ border: '2px solid white', backgroundColor: 'transparent' }}>
                                    <div className="card-body">
                                        <i className="fa-solid fa-briefcase text-light fa-2x" style={{ width: '100%' }}></i>
                                        <h5 className="card-title pt-4">Projects</h5>
                                        <p className="card-text pt-4">Built more than 5 projects</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="pt-5">Tools I use</p>
                        <div className="d-flex flex-wrap gap-3">
                            <div className="card rounded-4" style={{ width: '3rem', height: '3rem', border: '2px solid white', backgroundColor: 'transparent' }}>
                                <img src={vscode} className="card-img-top img-fluid rounded-4" alt="..." />
                            </div>
                            <div className="card rounded-4" style={{ width: '3rem', height: '3rem', border: '2px solid white', backgroundColor: 'transparent' }}>
                                <img src={figma} className="card-img-top img-fluid rounded-4" alt="..." />
                            </div>
                            <div className="card rounded-4" style={{ width: '3rem', height: '3rem', border: '2px solid white', backgroundColor: 'transparent' }}>
                                <img src={django} className="card-img-top img-fluid rounded-4" alt="..." />
                            </div>
                            <div className="card rounded-4" style={{ width: '3rem', height: '3rem', border: '2px solid white', backgroundColor: 'transparent' }}>
                                <img src={bootstrap} className="card-img-top img-fluid rounded-4" alt="..." />
                            </div>
                            <div className="card rounded-4" style={{ width: '3rem', height: '3rem', border: '2px solid white', backgroundColor: 'transparent' }}>
                                <img src={git} className="card-img-top img-fluid rounded-4" alt="..." />
                            </div>
                            <div className="card rounded-4" style={{ width: '3rem', height: '3rem', border: '2px solid white', backgroundColor: 'transparent' }}>
                                <img src={mongodb} className="card-img-top img-fluid rounded-4" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Aboutme