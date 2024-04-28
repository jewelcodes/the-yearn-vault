import React, { useEffect, useState } from "react";
import "./Message.css";
import "./MessageEditor.css";

export default function MessageEditor(props:any) {
    let c = "message message-preview ";
    
    let [ color, setColor ] = useState("message-blue");

    const preventLineBreak = (e:any) => {
        //console.log(e);
        if(e.code === "Enter") {
            e.preventDefault();
            return false;
        }

        return true;
    };

    return (
        <>
            <input id="color" type="hidden" value={color} />
            <input id="sender" required minLength={2} maxLength={20} placeholder="Who do you need to hear it from?" type="text" className="message-sender-input" />
            <div className={c+color}>
                <textarea id="message" required minLength={8} maxLength={100} placeholder="What do you need to hear?" className="message-text" onKeyDown={preventLineBreak} />
            </div>
            
            <div className="color-picker">
                <div className="color-blue" onClick={() => {setColor("message-blue")}}></div>
                <div className="color-red" onClick={() => {setColor("message-red")}}></div>
                <div className="color-purple" onClick={() => {setColor("message-purple")}}></div>
                <div className="color-orange" onClick={() => {setColor("message-orange")}}></div>
                <div className="color-green" onClick={() => {setColor("message-green")}}></div>
            </div>
        </>
    );
}
