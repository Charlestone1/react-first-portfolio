import React, { useContext, useRef, useState } from 'react'
import "./contact.css"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import Phone from "../../img/phone.png"
import Twitter from "../../img/twitter.png"
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../context'

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false); 
    const theme = useContext(ThemeContext); 
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_dlu6b7v', 'template_lycj6vc', formRef.current, 'OJ6SVH1ceJbsACGjx')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
    }
  return (
      <div className='c'>
          <div className="c-bg"></div>
          <div className="c-wrapper">
              <div className="c-left">
                  <h1 className="c-title">
                      Let's discuss your project
                  </h1>
                  <div className="c-info">
                      <div className="c-info-item">
                          <img src={Phone} alt="" className='c-icon' />
                          +234 706 6270 034
                      </div>
                      <div className="c-info-item">
                          <img src={Twitter} alt="" className='c-icon' />
                          <a href="http://www.twitter.com/CharlesOriih" target="_blank" rel="noopener noreferrer">@CharlesOriih</a>
                      </div>
                      <div className="c-info-item">
                          <img src={Email} alt="email" className='c-icon' />
                          charlesorih@gmail.com
                      </div>
                      <div className="c-info-item">
                          <img src={Address} alt="location" className='c-icon' />
                          234 King Street, Victoria Island, Lagos. Nigeria
                      </div>
                  </div>
              </div>
              <div className="c-right">
                  <p className="c-desc">
                      <b>What's your story?</b> Get in touch. Always available for freelancing if the right project comes along.
                  </p>
                  <form ref={formRef} onSubmit={handleSubmit}>
                      <input style={{backgroundColor:darkMode && "#333"}} type="text" placeholder='Name' name="user_name" />
                      <input style={{backgroundColor:darkMode && "#333"}} type="text" placeholder='Subject' name="user_subject" />
                      <input style={{backgroundColor:darkMode && "#333"}} type="email" placeholder='Email' name="user_email" />
                      <textarea style={{backgroundColor:darkMode && "#333"}} name="message" rows="5" placeholder='Message' />
                      <button type="submit">Submit</button>
                      {done && "Thanks For Contacting"}
                  </form>
              </div>
          </div>
    </div>
  )
}

export default Contact