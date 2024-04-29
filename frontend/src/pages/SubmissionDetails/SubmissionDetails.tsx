import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./SubmissionDetails.css";
import Message from "../../components/Message";
import { get } from "../../wrapper/wrapper";

export default function SubmissionDetails() {
    const location = useLocation();
    const id = location.pathname.split("/")[2];

    return (
        <section className="sec">
            <div className="submission-details">
                <Message details color="message-blue" text="test" sender="sender" />
            </div>
        </section>
    )
}