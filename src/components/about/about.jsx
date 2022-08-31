import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

function about() {
  return (
    <section id='about'>
      <h5>A Savoir</h5>
      <h2>A Propos de moi</h2>
      <div className="container about__container">
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About Image" />
          </div>
        </div>  

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experiences</h5>
              <small>7+ Années Dev C#</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>Finances</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>20+ Livrés</small>
            </article>
          </div>
          <br/>
          <p>
           Salutation ! Je suis Guillaume Roche, 29ans, développeur C# depuis maintenant 7 ans, passioné de Web3 et des nouvelles technologies,
           je me forme actuellement sur les langages Blockchain tout en approfondissant mes connaissances en C#.
           <br/>Bonne visite !         
          </p>
          <br/>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>    
      </div>      
    </section>
  )
}

export default about