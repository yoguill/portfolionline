import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import {SiLinktree} from 'react-icons/si'
import {AiFillTwitterSquare} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Guillaume Roche</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#Remote">Disponibilités</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>


      <div className="footer__socials">
        <a href="https://linktr.ee/guillaume_roche"><SiLinktree /></a>
        <a href="https://www.linkedin.com/in/paslu/"><BsLinkedin /></a>
        <a href="https://twitter.com/BCinglante"><IoLogoTwitter /></a>
        <a href="https://github.com/yoguill"><FaGithub /></a>
      </div>

      <div className="footer__copyright"></div>
      <small>&copy; Thanks for share his project !</small>
    </footer>
  )
}

export default footer