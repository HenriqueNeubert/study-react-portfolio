import '../styles/components/sidebar.sass'
import React from 'react'
import Avatar from '../img/eu.jpeg'

const Sidebar = () => {
  return (
    <aside id='sidebar'>
      <img src={ Avatar } alt="Henrique Neubert" />
      <p className='title'>Desenvolvedor</p>
      <p>Redes sociais</p>
      <p>Informações de contato</p>
      <a href="" className='btn'>
        Download Curriculo
      </a>
    </aside>
  )
}

export default Sidebar