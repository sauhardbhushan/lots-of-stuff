import {useEffect, useRef, useState} from "react";

export default function useIntersectionObserver(ref: any) {

    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;
            setIsVisible(entry.isIntersecting);
        });

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        }
    }, [ref]);

    return isVisible;
}
