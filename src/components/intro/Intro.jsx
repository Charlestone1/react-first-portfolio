import React from 'react'
import "./intro.css"
import Mandem from "../../img/mandem.png"

const Intro = () => {
  return (
      <div className='i'>
          <div className="i-left">
              <div className="i-left-wrapper">
                  <h2 className='i-intro' >Hello my name is </h2>
                  <h1 className='i-name' >Charles Oriih </h1>
                  <div className="i-title">
                      <div className="i-title-wrapper">
                          <div className="i-title-item">
                              Web Developer
                          </div>
                          <div className="i-title-item">
                              UI/UX Designer
                          </div>
                          <div className="i-title-item">
                              React.js Developer
                          </div>
                          <div className="i-title-item">
                              Great Thinker
                          </div>
                      </div>
                  </div>
                  <p className="i-desc">
                      I design and develop  <b>Responsive Websites</b> with great user ineterface for my clients. I specialize in creating stylish, modern Websites and online stores.
                  </p>
              </div>
          </div>
          <div className="i-right">
              <div className="i-bg"></div>
              <img src={Mandem} alt="man" className='i-img' />
          </div>
    </div>
  )
}

export default Intro