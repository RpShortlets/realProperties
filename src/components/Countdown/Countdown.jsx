import React, { useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import useMediaQuery from "../../hooks/useMediaQuery/useMediaQuery";

const minuteSeconds = 67;
const hourSeconds = 3600;


const timerProps = {
    isPlaying: true,
    size: 120,
    strokeWidth: 6
};

const renderTime = (dimension, time) => {
    return (
        <div className="time-wrapper">
        <div className="time">{time}</div>
        <div>{dimension}</div>
        </div>
    );
};

const Countdown = () => {
    const Query = useMediaQuery("(min-width: 561px)")
    const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
    const endTime = stratTime + 243248; // use UNIX timestamp in seconds

    const remainingTime = endTime - stratTime;
    const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;

    useEffect(() => {
        const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
        console.log(getTimeMinutes(remainingTime));
    }, [remainingTime])

    
    return (
        <CountdownCircleTimer
            {...timerProps}
            colors="#2193B0"
            duration={hourSeconds}
            initialRemainingTime={remainingTime % hourSeconds}
            size={Query ? '220' : '120'}
            strokeWidth="16"
            strokeLinecap="butt"

        >
            {({ elapsedTime, color }) => (
            <span style={{ color }}>
                {renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))}
            </span>
            )}
        </CountdownCircleTimer>
    )
};

export default Countdown;







