import React from "react";
import "./Message.css";
import "./MessageEditor.css";

export default function MessageEditor(props:any) {
    let c = "message message-preview ";
    let color = "message-blue";

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
            <input type="text" className="message-sender-input" />
            <div className={c+color}>
                <textarea maxLength={111} placeholder="What do you need to hear?" className="message-text" onKeyDown={preventLineBreak} />
            </div>
        </>
    );
}
