"use client"
import {useEffect, useState} from "react";

const CountdownToNextDay = () => {
    const [timeLeft, setTimeLeft] = useState("");
    const calculateTimeLeft = () => {
        const now = new Date();
        const tomorrow = new Date();
        tomorrow.setHours(24, 0, 0, 0); // midnight next day

        const diff = tomorrow.getTime() - now.getTime();

        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
            2,
            "0"
        )}:${String(seconds).padStart(2, "0")}`;
    };

    useEffect(() => {
        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(() => {
            const now = new Date();

            // If it's exactly midnight, reset immediately
            if (
                now.getHours() === 0 &&
                now.getMinutes() === 0 &&
                now.getSeconds() === 0
            ) {
                setTimeLeft("24:00:00");
            } else {
                setTimeLeft(calculateTimeLeft());
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <span>{timeLeft}</span>
    )
}

export default CountdownToNextDay;