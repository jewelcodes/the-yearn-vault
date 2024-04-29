import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Submissions.css";
import Message from "../../components/Message";
import { get } from "../../wrapper/wrapper";

export default function Submissions() {
    let [page, setPage] = useState(0);
    let [messages, setMessages] = useState([]);
    let [loading, setLoading] = useState(false);

    const loadPage = async () => {
        if(loading) {
            console.log("attempt to loadPage when already in progress");
            return;
        }

        setLoading(true);

        console.log("fetching page " + page);
        // fetch from the API
        let response = await get("search", String(page));
        if(!response.ok) {
            // TODO: ERROR HANDLING HERE
        } else {
            // fetch the messages one by one
            console.log(response);

            for(let i = 0; i < response.messages.length; i++) {
                console.log("adding " + response.messages[i]);
                let messageData = await get("read", response.messages[i]);
                if(messageData.ok) {
                    messages.push(
                        <div key={response.messages[i]}>
                            <Message color={messageData.color} text={messageData.message} sender={messageData.sender} />
                        </div>
                    );
                }
            }
        }

        setLoading(false);
    };

    useEffect(() => {
        if(!loading) loadPage();
    }, [page]);

    return (
        <section className="sec">
            <h1>The Yearn Vault</h1>
            {/* TODO: implement a search function here */}

            <div className="submissions-container">
                {messages}
            </div>
        </section>
    );
}