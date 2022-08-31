import React from 'react'
import './portfolio.css'
import img1 from '../../assets/portfolio1.jpg'
import img2 from '../../assets/portfolio2.jpg'
import img3 from '../../assets/portfolio3.jpg'
import img4 from '../../assets/portfolio4.jpg'
import img5 from '../../assets/portfolio5.jpg'
import img6 from '../../assets/portfolio6.jpg'


const data= [
  {
    id: 1,
    image: img1,
    title: 'Refonte application Web ASP.NET core 6 avec BLAZOR [PRIVATE]',
    github: 'https://github.com/yoguill',
    demo:'https://github.com/yoguill'
  },
  {
    id: 2,
    image: img2,
    title: "Création d'un site de Mint pour interagir avec un SmartContract en Solidity/React",
    github: 'https://opensea.io/collection/pengouinonblockchain',
    demo:'https://penguin-on-blockchain.web.app/'
  },
  {
    id: 3,
    image: img3,
    title: "Développement d'applications en C# ",
    github: 'https://github.com',
    demo:'https://github.com/yoguill/CreateWallet'
  },
  {
    id: 4,
    image: img4,
    title: "Creation d'une collection NFT via SmartContract en Solidity avec Hardhat",
    github: 'https://github.com/yoguill/Pengouin_On_Blokchain_SmartContract_deploy',
    demo:'https://opensea.io/collection/pengouinonblockchain'
  },
  {
    id: 5,
    image: img5,
    title: 'Création de mon CV sur une application en React.js',
    github: 'https://github.com/yoguill/portfolionline',
    demo:'https://github.com'
  },
  {
    id: 6,
    image: img6,
    title: 'Création de lot SSIS afin de generer rapport pour le client [PRIVATE]',
    github: 'https://github.com/yoguill',
    demo:'https://github.com/yoguill'
  }
]

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Mes derniers projets</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github,demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div> 
              </article>
            )
          })
        }     
      </div>
    </section>
  )
}

export default portfolio