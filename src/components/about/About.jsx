import React from 'react'
import Photograper from "../../img/kyle-loftus.jpg"
import Award from "../../img/award-best.jpg" 
import "./about.css"

const About = () => {
  return (
      <div className='a'>
          <div className="a-left">
              <div className="a-card bg"></div>
              <div className="a-card">
                  <img src={Photograper} alt="random" className='a-img'/>
              </div>
          </div>
          <div className="a-right">
              <h1 className="a-title">About Me</h1>
              <p className="a-sub">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nulla aliquam ullam reiciendis suscipit modi!
              </p>
              <p className="a-desc">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias velit commodi fugiat sequi at corporis quisquam minus ea ut, esse hic quae expedita culpa doloribus rem vero officia saepe odit eum in nam debitis illum voluptates rerum! Nisi, voluptates voluptate.
              </p>
              <div className="a-award">
                  <img src={Award} alt="award" className='a-award-image' />
                  <div className="a-award-texts">
                      <h4 className="a-award-title">International Design award</h4>
                      <p className="a-award-desc">
                          Lorem ipsum dolor sit amet consectetur adipisicing nihil volupt cumque.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default About