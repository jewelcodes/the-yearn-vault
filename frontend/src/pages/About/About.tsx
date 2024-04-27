import React from "react";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <section className="sec">
            <h1>The Yearn Vault</h1>
            <h2>&ldquo;The best way to get over a woman is to turn her into literature.&rdquo; &mdash; Henry Miller (according to 500 Days of Summer)</h2>
            <p>While I'm not particularly gifted in the creative writing area, I like to think I'm at least a better-than-average coder, and that's exactly how the Yearn Vault was born &ndash; this project is dedicated to everyone I ever loved.</p>
            <p>Owing to <a href="https://theunsentproject.com/">the Unsent Project</a> as inspiration after submitting a message there for the first time, I thought of why not doing the exact opposite of that &ndash; that is, an archive of text messages you wish you had received rather than sent, but never did. I could very easily imagine myself submitting multiple entries if such a project existed, so I thought others might relate too. After a bit of searching, I did not find any such project, so decided to create it myself.</p>
            <p>That's really all this project is. From one yearner, to another.</p>
            <p>If you want to contact me personally, my up-to-date contact information is kept on <a href="https://jewelcodes.io/">my blog</a>. Consider <Link to="/support">buying me a coffee</Link> if you liked this.</p>
        </section>
    )
}
