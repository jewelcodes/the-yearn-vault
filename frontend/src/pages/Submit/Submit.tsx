import React from "react";
import MessageEditor from "../../components/MessageEditor";
import "./Submit.css";
import { Link } from "react-router-dom";

export default function Submit() {
    const submitForm = async () => {
        // TODO
    };

    return (
        <section className="sec">
            <form onSubmit={(e) => {
                e.preventDefault();
                submitForm();
                return false;
            }}>
                <MessageEditor color="blue" />
                <p className="disclaimer"><strong>Disclaimer:</strong> By clicking submit below, you acknowledge that you have read and agree to the <Link to="/privacy">privacy statement</Link>. You also agree to not abuse the platform by posting identifying content (i.e. usernames, phone numbers, etc.), spamming, or posting NSFW content.</p>
                <input type="submit" value="Submit" className="button button-default submit" />
            </form>
        </section>
    );
}