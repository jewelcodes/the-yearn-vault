import React, { useEffect, useState } from "react";

export default function useIntersection(element, rootMargin) {
    let [visible, setVisible] = useState(false);

    useEffect(() => {
        const current = element?.current;
        const observer = new IntersectionObserver(([entry]) => {
            setVisible(entry.isIntersecting);
        }, { rootMargin });
        
        current && observer.observe(current);
        return () => current && observer.unobserve(current);
    });

    return visible;
}