import './Journey.css'

function Journey() {

    return (
        <>

            <section className="journey-section">

                <h2>My Learning Journey</h2>

                <div className="timeline">

                    <div className="milestone">
                        <div className="circle"> <i className="fa-solid fa-seedling"></i> </div>
                        <h3>Started C</h3>
                        <p>April 2025</p>
                    </div>


                    <div className="milestone">
                        <div className="circle"> <i className="fa-solid fa-dumbbell"></i> </div>
                        <h3>Practiced Problems</h3>
                        <p>May 2025</p>
                    </div>


                    <div className="milestone">
                        <div className="circle"> <i className="fa-solid fa-code"></i> </div>
                        <h3>Learned HTML5, CSS3</h3>
                        <p>June 2025</p>
                    </div>


                    <div className="milestone">
                        <div className="circle"> <i className="fa-solid fa-laptop-code"></i> </div>
                        <h3>Learned JavaScript</h3>
                        <p>August 2025</p>
                    </div>


                    <div className="milestone">
                        <div className="circle"> <i className="fa-solid fa-rocket"></i> </div>
                        <h3>Ended with React</h3>
                        <p>November 2025</p>
                    </div>

                    <div className="milestone">
                        <div className="circle"> <i className="fa-solid fa-code-branch"></i> </div>
                        <h3>Git & Github</h3>
                        <p>December 2025</p>
                    </div>


                    <div className="milestone">
                        <div className="circle"> <i className="devicon-python-plain"></i> </div>
                        <h3>Python & Java</h3>
                        <p>Jan-Feb 2026</p>
                    </div>

                    <div className="milestone">
                        <div className="circle"> <i className="fa-solid fa-brain"></i> </div>
                        <h3>Started DSA</h3>
                        <p>May 2024</p>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Journey