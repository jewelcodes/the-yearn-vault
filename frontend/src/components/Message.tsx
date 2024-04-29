import React from "react";
import "./Message.css";

export default function Message(props:any) {
    let classContainer = "message " + props.color;
    if(props.details) classContainer += " message-details";
    
    let classSender = "message-sender ";
    if(props.details) classSender += "message-sender-details";

    return (
        <>
            <div className={classSender}>{props.sender}</div>
            <div className={classContainer}>
                <p className="message-text">{props.text}</p>
            </div>
        </>
    );
}
