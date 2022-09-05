import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiLinktree} from 'react-icons/si'
import {AiFillTwitterSquare} from 'react-icons/ai'
import Typewriter from 'typewriter-effect';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/paslu/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/yoguill" target="_blank"><FaGithub/></a>
        <a href="https://twitter.com/BCinglante" target="_blank"><AiFillTwitterSquare/></a>
        <a href="https://linktr.ee/guillaume_roche" target="_blank"><SiLinktree/></a>
    </div>
  )
}

export default HeaderSocials