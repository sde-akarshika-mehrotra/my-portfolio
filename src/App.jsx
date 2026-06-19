import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Hero from './pages/Hero/Hero'
import About from './pages/About/About'
import Skills from './pages/Skills/Skills'
import Project from './pages/Project/Project'
import Journey from './pages/Journey/Journey'
import GitHub from './pages/GitHub/GitHub'
import Connect from './pages/Connect/Connect'


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/project" element={<Project />} />
            <Route path="/journey" element={<Journey />} />
            <Route path="/github" element={<GitHub />} />
            <Route path="/connect" element={<Connnect />} />
          </Routes>


        </main>
      </BrowserRouter>

    </>
  )
}

export default App;