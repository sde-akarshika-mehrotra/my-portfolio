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
                            <li> <a href="#">HOME</a> </li>
                            <li> <a href="#">ABOUT</a> </li>
                            <li> <a href="#">SKILLS</a> </li>
                            <li> <a href="#">PROJECTS</a> </li>
                            <li> <a href="#">JOURNEY</a> </li>
                            <li> <a href="#">GITHUB</a> </li>
                            <li> <a href="#">CONTACT</a> </li>
                        </ul>
                    </div>
                </nav>
            </header>

        </>
    )
}

export default Navbar