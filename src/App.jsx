import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Project from './components/Project/Project'
import Journey from './components/Journey/Journey'
import GitHub from  './components/GitHub/GitHub'
import Connect from './components/Connect/Connect'


function App() {

  return (
    <>
      <Navbar />

      <main>

        <Hero />
        <About />
        <Skills />
        <Project />
        <Journey />
        <GitHub />
        <Connect />

      </main>

    </>
  )
}

export default App;