import React from 'react'
import ShowMore from './ShowMore2'; // Make sure this path is correct



function Mywork() {
  return (
    <>
  <div id="aboutme" className="container text-center text-light pt-5 pb-5">
                <div className="custom-width" >
                    <p>My portfolio</p>
                    <h2 className='' style={{ marginTop: '0px', fontFamily: 'Platypi, serif' }}>My latest work</h2>
                    <p>Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise.</p>
                </div>


            </div>
            <div className="custom-width2 pb-5">
              
<ShowMore />

            </div>
    </>
  )
}

export default Mywork