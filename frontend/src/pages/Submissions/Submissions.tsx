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
    let [query, setQuery] = useState(null);

    const updateQuery = (e:any) => {
        /*setButton(
            <p style={{textAlign: "center", textAlignLast: "center"}}>...</p>
        );*/
        
        setMessages([]);
        setLast(false);

        const value = e.nativeEvent.target.value;
        if(!value || value === "") {
            setQuery(null);
        } else {
            setQuery(value);
        }

        setPage(0);
    };

    const nextPage = () => {
        if(!last) setPage(page+1);
    };

    const loadPage = async () => {
        if(loading) {
            console.log("attempt to loadPage when already in progress");
            return;
        }

        setLoading(true);
        //setButton(null);

        console.log("fetching page " + page + " query " + query);
        
        // fetch from the API
        let params = String(page);
        if(query) params += "/" + String(query);
        let response = await get("search", params);
        if(!response.ok) {
            setLast(true);
            if(query) {
                setButton(
                    <p style={{textAlign: "center", textAlignLast: "center"}}>No messages by {query} were found.</p>
                );
            } else {
                setButton(
                    <p style={{textAlign: "center", textAlignLast: "center"}}>Unable to fetch messages. Please check your internet connection.</p>
                );
            }
        } else {
            // fetch the messages one by one
            //console.log(response);
            let messagesTemp:any = [];

            for(let i = 0; i < response.messages.length; i++) {
                //console.log("adding " + response.messages[i]);
                //let messageData = await get("read", response.messages[i]);    // eliminate unnecessary requests
                messages.push(
                    <div key={response.messages[i].id}>
                        <Link to={response.messages[i].id}>
                            <Message
                                color={response.messages[i].color}
                                text={response.messages[i].message}
                                sender={response.messages[i].sender}
                            />
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

                //setMessages(messages.concat(messagesTemp));
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
    }, [query, page]);

    return (
        <section className="sec">
            <h1>The Yearn Vault</h1>
            <input type="text" autoComplete="off" placeholder="Search by author" className="search" onInput={updateQuery} />

            <div className="submissions-container">
                {messages}
            </div>

            {button}
        </section>
    );
}
