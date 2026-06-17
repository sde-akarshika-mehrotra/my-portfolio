import './About.css'

function About() {

    return (
        <>


            <section className="about-section">
                <div className="left-about">
                    <h2>About me</h2>
                    <p> I am a CSE student focused on building a strong foundation in programming, Data Structures &
                        Algorithms and AI.</p>
                    <p>I enjoy turning concepts into projects and sharing my learning journey publicly.</p>

                    <div className="about-buttons">
                        <button>
                            <strong>Location</strong><br />
                            Lucknow, India
                        </button>
                        <button>
                            <strong>Education</strong><br />
                            B.tech CSE
                        </button>
                        <button>
                            <strong>Focus</strong><br />
                            AI Engineer
                        </button>
                        <button>
                            <strong>Goal</strong><br />
                            Make impact
                        </button>
                    </div>
                </div>

                <div className="right-about">
                    <img className="" src="developer_2.png" alt="developer-img" />
                </div>
            </section>



        </>
    )
}

export default About