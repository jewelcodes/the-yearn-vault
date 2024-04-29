import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./SubmissionDetails.css";
import Message from "../../components/Message";
import { get } from "../../wrapper/wrapper";

export default function SubmissionDetails() {
    const location = useLocation();
    const id = location.pathname.split("/")[2];

    let [message, setMessage] = useState({color: null, message: null, sender: null, timestamp:null});

    const load = async () => {
        let response = await get("read", id);
        if(!response || !response.ok) {
            setMessage(null);
        } else {
            setMessage(response);
        }
    };

    const timeString = (timestamp:any) => {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let ts = new Date(timestamp);
        let now = new Date();
        let d = (now.getTime() - ts.getTime()) / 1000;  // to seconds

        if(d < 300) {
            // less than 5 mins
            return "just now";
        } else if(d < 900) {
            // less than 15 mins
            return "a few minutes ago";
        } else if(d < 3600) {
            // less than an hour
            return Math.round(d/60) + " minutes ago";
        } else if(d < 86400) {
            // a day
            let h = Math.round(d/3600);
            if(h == 1) return "an hour ago";
            else return h + " hours ago";
        } else {
            return ts.getDate() + " " + months[ts.getMonth()] + " " + ts.getFullYear();
        }
    };

    useEffect(() => {
        load();
    }, [location]);

    if(message) {
        return (
            <section className="sec">
                <div className="submission-details">
                    <Message details color={message.color} text={message.message} sender={message.sender} />

                    <div className="v-spacer" style={{height: "2em"}} />
                    <p>
                        From <strong>{message.sender}</strong><br />
                        <small>Posted {timeString(message.timestamp)}</small>
                    </p>
                    <p>{message.message}</p>
                </div>
            </section>
        )
    } else {
        return (
            <section className="sec">
                <h1>That post doesn't exist :(</h1>
                <div className="v-spacer" style={{height: "2em"}} />
                <p>You can <Link to="/">go back home</Link> and look at something else instead.</p>
            </section>
        );
    }
}