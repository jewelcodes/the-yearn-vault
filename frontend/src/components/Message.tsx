import React from "react";
import "./Message.css";

export default function Message(props:any) {
    let c = "message ";
    if(props.preview) c += "message-preview ";
    if(props.color === "blue") c += "message-blue";
    if(props.color === "purple") c += "message-purple";
    if(props.color === "red") c += "message-red";
    if(props.color === "green") c += "message-green";
    if(props.color === "orange") c += "message-orange";

    return (
        <div className={c}>
            <p className="message-text">{props.text}</p>
        </div>
    );
}
