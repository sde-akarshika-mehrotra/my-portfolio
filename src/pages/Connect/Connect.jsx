import './Connect.css'

function Connect() {
    const contacts = [
        {
            icon: "fa-solid fa-envelope",
            label: "Email",
            display: "akarshikamehrotra44@gmail.com",
            href: "mailto:akarshikamehrotra44@gmail.com"
        },
        {
            icon: "devicon-linkedin-plain colored",
            label: "LinkedIn",
            display: "akarshika-mehrotra",
            href: "https://www.linkedin.com/in/akarshika-mehrotra-8b25a5356"
        },
        {
            icon: "devicon-github-original",
            label: "GitHub",
            display: "sde-akarshika-mehrotra",
            href: "https://github.com/sde-akarshika-mehrotra"
        },
        {
            icon: "fa-brands fa-x-twitter",
            label: "X (Twitter)",
            display: "@AkarshikaM00612",
            href: "https://x.com/AkarshikaM00612"
        }
    ]

    return (
        <section className="connect-section">
            <div className="connect-container">

                <div className="left-connect">
                    <h3>Let's Connect</h3>
                    <p>"Actively seeking opportunities, collaborations, and growth through shared learning experiences."</p>


                    <div className="contacts">
                        {contacts.map((c, i) => (
                            <a href={c.href} target="_blank" rel="noreferrer" className="contact-card" key={i}>
                                <i className={c.icon}></i>
                                <div>
                                    <span className="contact-label">{c.label}</span>
                                    <span className="contact-display">{c.display}</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>


                <div className="contact-form">
                    <h3>Send Message</h3>

                    <input
                        type="text"
                        placeholder="Enter your name"
                    />

                    <input
                        type="email"
                        placeholder="Enter your email"
                    />

                    <textarea
                        placeholder="Enter your message"
                        rows="5"
                    ></textarea>


                    <button>
                        Send
                    </button>
                </div>

            </div>
        </section>
    )
}

export default Connect