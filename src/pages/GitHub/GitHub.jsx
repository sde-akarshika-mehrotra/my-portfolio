import './GitHub.css'


function GitHub() {
    const username = "sde-akarshika-mehrotra"

    return (
        <section className="github-section">

            <h2>GitHub Stats</h2>

            <div className="github-container">

                <img
                    src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true&card_width=200`}
                    alt="GitHub Stats"
                />


                <img
                    src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true&card_width=200&langs_count=6`}
                    alt="Top Languages"
                />

                <img
                    src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=tokyonight&hide_border=true&card_width=200`}
                    alt="GitHub Streak"
                />

                <img
                    src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&bg_color=0d1117&color=ffffff&line=216e39&point=40c463&area=true&hide_border=true&area_color=216e39`}
                    alt="Contribution Graph"
                    className="contrib-graph"
                />

            </div>
        </section>
    )
}

export default GitHub