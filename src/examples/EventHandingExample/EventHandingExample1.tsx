import React, { FC, useEffect } from "react";
import "./EventHandingExample.css";

export const EventHandingExample1: FC = () => {
    const onClick = (event: React.SyntheticEvent<HTMLDivElement>) => {
        event.stopPropagation();
        console.log("3", "перехват");
    };

    return (
        <>
            <h2>Events</h2>
            <div
                onClickCapture={(event) => {
                    console.log(1, "погружение");
                }}
                onClick={(event) => {
                    console.log(5, "всплытие");
                }}
                className="event-handing__wrapper"
            >
                <div
                    onClickCapture={() => console.log(2, "погружение")}
                    onClick={(event) => {
                        console.log(4, "всплытие");
                    }}
                    className="event-handing__parent"
                >
                    <div onClick={onClick} className="event-handing__target">
                        Hello world
                    </div>
                </div>
            </div>
        </>
    );
};