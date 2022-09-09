import React from 'react'
import Spline from '@splinetool/react-spline';
import "./Remote.css"
import {RiTeamLine} from 'react-icons/ri'
import {SiFreelancer} from 'react-icons/si'
import {BsBuilding} from 'react-icons/bs'
import {BiUser} from 'react-icons/bi'




function Remote() {
  return (
    <section id='Remote'>
      <h5>Disponible</h5>
      <h2>En Remote et en Agence</h2>
      <div className=" container remote__container">
        <div className='remote__content'>
          <ul className='remote__list'>
            <li>
              <RiTeamLine className='remote__list-icon' />
              <p className='remote__text'>En Équipe</p>
            </li>
            <li>
              <BiUser className='remote__list-icon' />
              <p className='remote__text'>En Solo</p>
            </li>
            <li>
              <BsBuilding className='remote__list-icon' />
              <p className='remote__text'>En Agence</p>
            </li>
            <li>
              <SiFreelancer className='remote__list-icon' />
              <p className='remote__text'>En Remote</p>
            </li>
          </ul>
        </div>
        <div className='remote__spline'>
            <Spline scene="https://prod.spline.design/aMpR4NzfJAveiqvW/scene.splinecode" />
        </div>
      </div>
    </section>
  )
}

export default Remote