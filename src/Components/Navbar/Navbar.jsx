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

              <li>
                <a href="#home">HOME</a>
              </li>

              <li>
                <a href="#about">ABOUT</a>
              </li>

              <li>
                <a href="#skills">SKILLS</a>
              </li>

              <li>
                <a href="#project">PROJECTS</a>
              </li>

              <li>
                <a href="#journey">JOURNEY</a>
              </li>

              <li>
                <a href="#github">GITHUB</a>
              </li>

              <li>
                <a href="#connect">CONTACT</a>
              </li>

            </ul>

          </div>

        </nav>
      </header>
    </>
  )
}

export default Navbar