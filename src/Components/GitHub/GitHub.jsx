function GitHub() {
    const username = "sde-akarshika-mehrotra" 

    return (
        <section className="github-section">
            
            <h2>GitHub Stats</h2>

            <div className="github-container">
                {/* Overall Stats */}
                <img
                    src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true`}
                    alt="GitHub Stats"
                />

                {/* Contribution Streak */}
                <img
                    src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=tokyonight&hide_border=true`}
                    alt="GitHub Streak"
                />

                {/* Top Languages */}
                <img
                    src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true`}
                    alt="Top Languages"
                />
            </div>
        </section>
    )
}

export default GitHub