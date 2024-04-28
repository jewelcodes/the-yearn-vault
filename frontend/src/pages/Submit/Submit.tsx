import React from "react";
import MessageEditor from "../../components/MessageEditor";
import "./Submit.css";

export default function Submit() {
    return (
        <section className="sec">
            <form>
                <MessageEditor color="blue" />
            </form>
        </section>
    );
}