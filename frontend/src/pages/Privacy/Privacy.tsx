import React from "react";
import { Link } from "react-router-dom";

export default function Privacy() {
    return (
        <section className="sec">
            <h1>Privacy Statement</h1>
            <div className="v-spacer" style={{height: "2em"}} />
            <p>By using the Yearn Vault, you acknowledge that you have read and agree to the following terms. If you do not, please turn away.</p>
            <p>
                <strong>Data collected:</strong> The following anonymized data is collected from users upon making a submission.
                <ol>
                    <li><strong>The submission itself.</strong> The submission itself includes the name entered, the message content, and the color chosen for the submission.</li>
                    <li><strong>Time and timezone.</strong> The time of the submission as well as the timezone in which the user lives in is also collected and stored. This is purely for statistical purposes, where potentially in the future it may be used to correlate higher activity with a certain time of day. Note that the timezone is not visible to other users of the Yearn Vault.</li>
                </ol>
            </p>
            <p>
                <strong>Data storage:</strong> The data collected is stored in a database server located in Frankfurt, Germany.
            </p>
            <p>
                <strong>Data usage:</strong> The data collected is used only to provide the functionality of the Yearn Vault and potentially for personal statistical purposes. Your data is never sold to third parties.
            </p>
        </section>
    )
}
