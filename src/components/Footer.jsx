import React from 'react'
import Logo from '../assets/logo.png'


function Footer() {
  return (
    <>
    <div className="custom-width2 pt-5 text-center" >
<img src={Logo} alt="" className="img-fluid" style={{ width: '150px', height: 'auto' }}/>
<div className="mt-3">
                <a href="mailto:nakweoziomacoding@gmail.com" className='text-decoration-none text-light'>
                  <span className="me-3">
                    <i className="fa fa-envelope"></i>
                  </span>
                  nakweoziomacoding@gmail.com
                </a>
              </div>
              <div className="bg-light mt-5 mb-5 mx-auto" style={{maxWidth: '990px', height: '1px'}}></div>

              <div className='text-light'>
                <p>© 2024 Ozioma Nakwe. All rights reserved.</p>

              </div>
    </div>

    </>
  )
}

export default Footer