import React from "react";
import MessageEditor from "../../components/MessageEditor";
import "./Submit.css";

export default function Submit() {
    return (
        <section className="sec">
            <h1>What do you need to hear?</h1>
            <div className="v-spacer" style={{height:"1.5em"}} />
            <form>
                <MessageEditor color="blue" />
            </form>
        </section>
    );
}