import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Submissions.css";
import Message from "../../components/Message";
import LoadMore from "../../components/LoadMore";
import { get } from "../../wrapper/wrapper";

export default function Submissions() {
    let [page, setPage] = useState(0);
    let [messages, setMessages] = useState([]);
    let [loading, setLoading] = useState(false);
    let [button, setButton] = useState(null);
    let [last, setLast] = useState(false);

    const nextPage = () => {
        if(!last) setPage(page+1);
    };

    const loadPage = async () => {
        if(loading) {
            console.log("attempt to loadPage when already in progress");
            return;
        }

        setLoading(true);
        setButton(null);

        console.log("fetching page " + page);
        
        // fetch from the API
        let response = await get("search", String(page));
        if(!response.ok) {
            // TODO: ERROR HANDLING HERE
        } else {
            // fetch the messages one by one
            console.log(response);

            for(let i = 0; i < response.messages.length; i++) {
                //console.log("adding " + response.messages[i]);
                let messageData = await get("read", response.messages[i]);
                if(messageData.ok) {
                    messages.push(
                        <div key={response.messages[i]}>
                            <Link to={response.messages[i]}>
                                <Message color={messageData.color} text={messageData.message} sender={messageData.sender} />
                            </Link>
                        </div>
                    );
                    /*setMessages([...messages, (
                        <div key={response.messages[i]}>
                            <Link to={response.messages[i]}>
                                <Message color={messageData.color} text={messageData.message} sender={messageData.sender} />
                            </Link>
                        </div>
                    )]);*/
                }
            }

            // check if a button is necessary
            if(page < response.pages-1) {
                setButton(
                    <LoadMore handler={() => nextPage()} />
                );
            } else {
                setLast(true);
                setButton(
                    <p style={{textAlign: "center", textAlignLast: "center"}}>Looks like you've reached the beginning.</p>
                );
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

            {button}
        </section>
    );
}
