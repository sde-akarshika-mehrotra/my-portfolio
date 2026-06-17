import './Hero.css'

function Hero() {

    return (
        <>
            <section className="hero-section">
                <div className="left-section">

                    <h2>Hy, I am</h2>
                    <h1 className="purple">Akarshika Mehrotra</h1>
                    <h3 className="purple">Building Towards AI Engineering | Growing Through Code</h3>
                    <p>Turning ideas into real-world applications with full-stack development and a growing focus on AI
                        & intelligent systems.</p>

                    <div className="buttons">
                        <button className="btn1">View Projects - </button>
                        <button className="btn">Github</button>
                        <button className="btn">Contact me</button>
                    </div>
                </div>

                <div className="right-section">
                    <img className="" src="developer_img.png" alt="developer-img" />
                </div>
            </section>


        </>
    )
}

export default Hero