import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <section className="home-banner">
                <h1>Yearning?<br />Know what you wanna hear?<span className="home-flash">|</span></h1>
                <div className="phone"></div>
            </section>
            <section className="home-description">
                <div className="type"></div>
                <h1>The Yearn Vault was created for those of us who yearn for closure.</h1>
            </section>
            <section className="home-works">
                <h1>How it works</h1>
                <h2>Anonymously submit what you wish you were told, optionally with their name. Read everyone else's affirmations and let them see yours.</h2>
                <Link to="/submit" className="button button-default">Submit Your Own</Link>
                <div className="h-spacer" style={{width:"1em"}} />
                <Link to="/submissions" className="button">Read the Archive</Link>
                <div className="v-spacer" style={{height:"2em"}} />
                <Link to="/privacy">Privacy Statement</Link>
            </section>
        </>
    );
}

export default Home;