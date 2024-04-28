import React from "react";
import Message from "../../components/Message";

export default function Submit() {
    return (
        <section className="sec">
            <h1>Let it all out</h1>
            <Message preview={true} color="blue" />
        </section>
    );
}