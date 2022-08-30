import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
    <section id='services'>
      <h5>Ce que je peut offrir</h5>
      <h2>Services</h2>
      <div className='container services__container'>
        <article className="service">
          <div className="service__head">
            <h3>C#/ASP.NET & SQL Server</h3>
          </div>
          <ul className='service__list'>
            <li>
            <BiCheck className='service__list-icon' />
            <p>Refonte d'une application sous ASP.NET core 6 avec Blazor en utilisant Radzen.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon' />
            <p>Developpement d’une application d’habilitation des utilisateurs à partir d’une API.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon' />
            <p>Conception d’outils de génération automatique de rapport de base de données (SSIS,SSRS).</p>
            </li>
            <li>
            <BiCheck className='service__list-icon' />
            <p>Conception de procédures stockées et mise en place d’un datawarehouse (Cube de données SSAS).</p>
            </li>
            <li>
            <BiCheck className='service__list-icon' />
            <p>Maintien et amélioration d’une application comptable critique.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon' />
            <p>Gestion des bases de données clients niveau avancé.</p>
            </li>
          </ul>       
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Blockchain Solidity/React</h3>
          </div>
          <ul className='service__list'>
            <li>
            <BiCheck className='service__list-icon' />
            <p>Creation de SmartContract.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon' />
            <p>Creation d'un site de mint appelant SmartContract.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon' />
            <p>Creation d'une collection de NFT.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon' />
            <p>Passation des failles Ethernauts d'OpenZeppelin.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon' />
            <p>Creation d'un mini jeu de A a Z utilisant la blockchain, gestion d'une communauté.</p>
            </li>
          </ul>       
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Gestion de Projet</h3>
          </div>
          <ul className='service__list'>
            <li>
            <BiCheck className='service__list-icon' />
            <p>Travaille souvent en équipe.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon' />
            <p>Utilisation de methodes agiles (SCRUM).</p>
            </li>
            <li>
            <BiCheck className='service__list-icon' />
            <p>Macro Chiffrage.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon' />
            <p>Gestion de tickets.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon' />
            <p>Relation Client.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon' />
            <p>Documentations.</p>
            </li>
          </ul>       
        </article>   
      </div>
    </section>
  )
}

export default services