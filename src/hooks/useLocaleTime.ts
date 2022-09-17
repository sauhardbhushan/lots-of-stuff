import {useEffect, useState} from "react";

export default function useLocaleTime(locale: string) {
    const [time, setTime] = useState(new Date().toLocaleTimeString(locale));

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date().toLocaleTimeString(locale)), 1000);
        return () => clearInterval(timer);
    }, [])

    return time;
}
