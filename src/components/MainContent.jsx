import '../styles/components/maincontent.sass'
import AboutContainer from './AboutContainer'
import TecnologiesContainer from './TecnologiesContainer'
import ProjectContainer from './ProjectContainer'
import React from 'react'

const MainContent = () => {
  return (
    <main id='main-content'>
      <AboutContainer />
      <TecnologiesContainer />
      <ProjectContainer />
    </main>
  )
}

export default MainContent