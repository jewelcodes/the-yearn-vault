import React from "react";
import "./Message.css";

export default function Message(props:any) {
    let c = "message " + props.color;
    if(props.preview) c += "message-preview ";

    return (
        <div className={c}>
            <p className="message-text">{props.text}</p>
        </div>
    );
}
