import React, { useState } from "react";
import MessageEditor from "../../components/MessageEditor";
import "./Submit.css";
import { Link } from "react-router-dom";
import { post } from "../../wrapper/wrapper";

export default function Submit() {
    let [append, setAppend] = useState(<input type="submit" value="Submit" className="button button-default submit" />);

    const submitForm = async (e:any) => {
        // construct request body
        const sender = e.target.elements.sender.value;
        const message = e.target.elements.message.value;
        const color = e.target.elements.color.value;
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

        let body = "sender=" + sender;
        body += "&message=" + message;
        body += "&color=" + color;
        body += "&timezone=" + timezone;

        // now make the request
        let response = await post("submit", body);
        if(!response || !response.ok) {
            setAppend(
                <p>We weren't able to post your message. Please check your internet connection or try refreshing the page.</p>
            );
        } else {
            setAppend(
                <p style={{textAlign: "center", textAlignLast: "center"}}>Your message was posted. <Link to={"/submissions/" + response.id}>You can view it now</Link>.</p>
            );
        }
    };

    return (
        <section className="sec">
            <form onSubmit={(e) => {
                e.preventDefault();
                submitForm(e);
                return false;
            }}>
                <MessageEditor color="blue" />
                <p className="disclaimer"><strong>Disclaimer:</strong> By clicking submit below, you acknowledge that you have read and agree to the <Link to="/privacy">privacy statement</Link>. You also agree to not abuse the platform by posting identifying content (i.e. usernames, phone numbers, etc.), spamming, or posting NSFW content.</p>
                {append}
            </form>
        </section>
    );
}