import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Journey from './components/Journey/Journey'
import Connect from './components/Connect/Connect'


function App() {

  return (
    <>
      <Navbar />

      <main>

        <Hero />
        <About />
        <Skills />
        <Journey />
        <Connect />

      </main>

    </>
  )
}

export default App;