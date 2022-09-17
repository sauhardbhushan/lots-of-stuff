import * as React from 'react'
import {useEffect, useState} from "react";

import './Clock.css'

export default function Clock(){

    const [time, setTime] = useState(new Date().toLocaleTimeString('en-GB'));

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date().toLocaleTimeString('en-GB')), 100000);
        return () => clearInterval(timer);
    }, [])


    return (
        <>
            <div className="clock">
                <p>{time}</p>
            </div>
        </>
    )

}
