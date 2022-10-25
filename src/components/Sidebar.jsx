import '../styles/components/sidebar.sass'
import React from 'react'
import Avatar from '../img/eu.jpeg'
import SocialNetwork from './SocialNetwork'
import InformationContainer from './InformationContainer'

const Sidebar = () => {
  return (
    <aside id='sidebar'>
      <img src={ Avatar } alt="Henrique Neubert" />
      <p className='title'>Desenvolvedor</p>
      <SocialNetwork />
      <InformationContainer />
      <a href="" className='btn'>
        Download Curriculo
      </a>
    </aside>
  )
}

export default Sidebar