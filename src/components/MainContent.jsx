import '../styles/components/maincontent.sass'
import AboutContainer from './AboutContainer'
import TechnologiesContainer from './TechnologiesContainer'
import ProjectContainer from './ProjectContainer'
import React from 'react'

const MainContent = () => {
  return (
    <main id='main-content'>
      <AboutContainer />
      <TechnologiesContainer />
      <ProjectContainer />
    </main>
  )
}

export default MainContent