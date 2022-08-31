import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FiTwitter} from 'react-icons/fi'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'

function contact() {
  return (
    <section id='contact'>
      <h5>Entrer en contact</h5>
      <h2>Me Contacter</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>g.roche.pro@gmail.com</h5>
            <a href="mailto:g.roche.pro@gmail.com">Envoyer un message</a>
          </article>
          <article className="contact__option">
            <AiOutlineLinkedin className='contact__option-icon' />
            <h4>LinkedIn</h4>
            <h5>Guillaume Roche</h5>
            <a href="https://www.linkedin.com/in/paslu/">Envoyer un message</a>
          </article>
          <article className="contact__option">
            <FiTwitter className='contact__option-icon' />
            <h4>Twitter</h4>
            <h5></h5>
            <a href="https://twitter.com/BCinglante">Envoyer un message</a>
          </article>
        </div>
        {/* END OF CONTACT */}
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message'></textarea> 
          <button type='submit' className='btn btn-primary'>Envoyer un message</button>
        </form>
      </div>
    </section>
  )
}

export default contact