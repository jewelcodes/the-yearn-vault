import React from "react";
import { Link } from "react-router-dom";

export default function Support() {
    return (
        <section className="sec">
            <h1>Support the Project</h1>
            <div className="v-spacer" style={{height: "2em"}} />
            <p>If you like this project, please consider supporting it with as little as $10 to help maintain it and keep it running. The Yearn Vault will never show ads or share your data with third parties, so any funds will help keep the project alive, especially if its user base grows and inevitably costs more to maintain.</p>
            <p>
                <strong>Choose your preferred payment method:</strong>
                <ul>
                    <li><a href="https://www.patreon.com/TheYearnVault">Patreon</a></li>
                    <li><a href="https://ko-fi.com/theyearnvault">Ko-fi</a></li>
                </ul>
            </p>
            <p>Thank you for considering it! To see more of my projects, take a look at <a href="https://jewelcodes.io/">my blog</a>.</p>
        </section>
    )
}
