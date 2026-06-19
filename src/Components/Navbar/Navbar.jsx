import { Link } from 'react-router-dom' 
import './Navbar.css'

function Navbar() {
  return (
    <>
      <header>
        <nav>
          <div className="left">
            Akarshika
          </div>
          <div className="right">
            <ul>
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/about">ABOUT</Link></li>
              <li><Link to="/skills">SKILLS</Link></li>
              <li><Link to="/journey">JOURNEY</Link></li>
              <li><Link to="/contact">CONTACT</Link></li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar