import React from "react";
import { Link } from "react-router-dom";
import "./Submissions.css";
import Message from "../../components/Message";

export default function Submissions() {
    return (
        <section className="sec">
            <h1>The Yearn Vault</h1>
            {/* TODO: implement a search function here */}
            
            <div className="submissions-container">
                <div>
                    <Message color="message-blue" text="test message" sender="someone" />
                </div>
            </div>
        </section>
    );
}
