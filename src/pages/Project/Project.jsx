import './Project.css'

function Project() {

    return (
        <>
            <section className='project-section'>
                <h2>Projects</h2>

                <div className='project-container'>


                    <div className="card">
                        <h3>Quiz-game</h3>
                        <p>Console based quiz application in C language</p>
                        <div className="tag-container">
                            <span className="tag tag-tech">C</span>
                            <span className="tag tag-level">Beginner</span>
                        </div>
                        <a href="https://github.com/sde-akarshika-mehrotra/C_QuizGame" target="_blank">
                            <i className="devicon-github-original"></i>
                        </a>
                    </div>

                    <div className="card">
                        <h3>E-commerce clone</h3>
                        <p>Amazon-like website clone</p>
                        <div className="tag-container">
                            <span className="tag tag-tech">HTML</span>
                            <span className="tag tag-tech">CSS</span>
                            <span className="tag tag-tech">REACTJS</span>
                            <span className="tag tag-level">Beginner</span>
                        </div>
                        <a href="https://github.com/sde-akarshika-mehrotra/E-commerce" target="_blank">
                            <i className="devicon-github-original"></i>
                        </a>
                    </div>

                    <div className="card">
                        <h3>My-portfolio</h3>
                        <p>My personal portfolio to showcase my journey</p>
                        <div className="tag-container">
                            <span className="tag tag-tech">HTML</span>
                            <span className="tag tag-tech">CSS</span>
                            <span className="tag tag-tech">REACTJS</span>
                            <span className="tag tag-level">Intermediate</span>
                        </div>

                        <div className="project-links">
                            <a href="https://github.com/sde-akarshika-mehrotra/my-portfolio" target="_blank">
                                <i className="devicon-github-original"></i>
                            </a>
                        </div>
                    </div>


                    <div className="card">
                        <h3>Smart-Job-Tracker</h3>
                        <p>A web application that helps users organize, track, and manage their job applications efficiently.</p>
                        <div className="tag-container">
                            <span className="tag tag-tech">HTML</span>
                            <span className="tag tag-tech">CSS</span>
                            <span className="tag tag-tech">REACTJS</span>
                            <span className="tag tag-tech">NODEJS</span>
                            <span className="tag tag-tech">EXPRESSJS</span>
                            <span className="tag tag-tech">MONGODB</span>
                            <span className="tag tag-level">Intermediate</span>
                        </div>

                        <div className="project-links">
                            <a href="https://github.com/sde-akarshika-mehrotra/Smart-Job-Tracker" target="_blank">
                                <i className="devicon-github-original"></i>
                            </a>
                            <a
                                href="https://smart-job-tracker-sable.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </a>
                        </div>
                    </div>
                </div>


            </section>

        </>
    )
}

export default Project