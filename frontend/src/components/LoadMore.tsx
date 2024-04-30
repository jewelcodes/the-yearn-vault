import React, { useEffect, useRef, useState } from "react";
import useIntersection from "../hooks/useIntersection";

export default function LoadMore(props:any) {
    const ref = useRef(null);
    const visible = useIntersection(ref, "0px");

    useEffect(() => {
        if(visible) {
            props.handler();
        }
    }, [visible]);
    
    return (
        <button ref={ref} className="button button-default">Loading more...</button>
    );
}