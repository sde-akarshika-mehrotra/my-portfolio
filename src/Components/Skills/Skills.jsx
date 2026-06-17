import './Skills.css'

function Skills() {

    return (
        <>
            <section className="skill-section">
                <h2>Skills and Technologies</h2>

                <div className="skills-container">
                    <div className="cards-className">
                        <h3>Languages</h3>

                        <div className="icons">


                            <div className="item">
                                <i className="devicon-java-plain colored"></i>
                                <p>Java</p>
                            </div>

                            <div className="item">
                                <i className="devicon-python-plain colored"></i>
                                <p>Python</p>
                            </div>

                            <div className="item">
                                <i className="devicon-c-plain colored"></i>
                                <p>C</p>
                            </div>

                            <div className="item">
                                <i className="devicon-javascript-plain colored"></i>
                                <p>JavaScript</p>
                            </div>


                        </div>
                    </div>

                    <div className="cards">
                        <h3>Core CS</h3>
                        <ul>
                            <li>OOPS Basics</li>
                            <li>Conditionals and Loops</li>
                            <li>Exceptional Handling</li>
                            <li>File Handling</li>
                        </ul>
                    </div>

                    <div className="cards-className">
                        <h3>Tools</h3>

                        <div className="icons">

                            <div className="item">
                                <i className="devicon-git-plain colored"></i>
                                <p>Git</p>
                            </div>

                            <div className="item">
                                <i className="devicon-github-original"></i>
                                <p>GitHub</p>
                            </div>

                            <div className="item">
                                <i className="devicon-vscode-plain colored"></i>
                                <p>VS Code</p>
                            </div>

                        </div>


                    </div>
                    <div className="cards">
                        <h3>Currently Learning</h3>

                        <ul>
                            <li>Data Structure and Algorithms</li>
                            <li>Web Development</li>
                            <li>Artificial Intelligence</li>
                        </ul>

                    </div>

                </div>
            </section>





        </>
    )
}

export default Skills