"use client"
import {Button} from "@/components/ui/button";
import {useEffect, useRef} from "react";

const DayList = () => {
    // Get current day in December (1-24)
    const getCurrentDay = () => {
        const today = new Date();
        const day = today.getDate();
        const month = today.getMonth(); // 0-based, so 11 = December

        // Return current day if in December and within advent calendar range
        if (month === 11 && day >= 1 && day <= 24) {
            return day;
        }
        return 12; // Default to day 1 if outside December or range
    };

    const currentDay = getCurrentDay();
    const currentDayRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        // Scroll the current day into view when component mounts
        if (currentDayRef.current) {
            currentDayRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center' // Centers the element horizontally
            });
        }
    }, []);

    return (
        <section className={"flex flex-nowrap gap-2 overflow-x-scroll pb-2 ms-0 me-0"}>
            {Array.from({length: 24}).map((_, index) => {
                const day = index + 1;
                const isCurrentDay = day === currentDay;

                return (
                    <Button
                        key={index}
                        variant={isCurrentDay ? "default" : "outline"}
                        className={isCurrentDay ? "font-bold" : ""}
                        ref={isCurrentDay ? currentDayRef : undefined}
                    >
                        Dag {day}
                    </Button>
                );
            })}
        </section>
    )
}

export default DayList;