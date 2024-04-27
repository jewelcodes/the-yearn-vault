import React from 'react';
import './Home.css';

function Home() {
    return (
        <>
            <section className="home-banner">
                <h1>Yearning?<br />Know what you wanna hear?<span className="home-flash">|</span></h1>
                <div className="phone"></div>
            </section>
            <section className="home-description">
                <div className="type"></div>
                <h1>The Yearning Vault was created for those of us who yearn for closure.</h1>
            </section>
        </>
    );
}

export default Home;