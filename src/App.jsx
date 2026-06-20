import Navbar from './components/Navbar/Navbar'

import Hero from './pages/Hero/Hero'
import About from './pages/About/About'
import Skills from './pages/Skills/Skills'
import Project from './pages/Project/Project'
import Journey from './pages/Journey/Journey'
import GitHub from './pages/GitHub/GitHub'
import Connect from './pages/Connect/Connect'
import Story from './pages/Story/Story'
import Footer from './pages/Footer/Footer'


function App() {

  return (

    <>
      <Navbar />

      <main>

        <section id="home">
          <Hero />
        </section>


        <section id="about">
          <About />
        </section>


        <section id="skills">
          <Skills />
        </section>


        <section id="project">
          <Project />
        </section>


        <section id="journey">
          <Journey />
        </section>


        <section id="github">
          <GitHub />
        </section>


        <section id="connect">
          <Connect />
        </section>

        <section id="story">
          <Story />
        </section>

        <section id="footer">
          <Footer />
        </section>

      </main>

    </>
  )
}

export default App;