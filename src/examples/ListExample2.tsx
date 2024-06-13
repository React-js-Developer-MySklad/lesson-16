import {MouseEvent, useState} from "react";

const values = ["1", "2", "3", "4", "5"];

export const ListExample2 = () => {
    return (
        <ul
            onClick={(event: MouseEvent<HTMLUListElement>) => {
                const target = event.target as HTMLUListElement;
                //console.log("event: ", target.getAttribute("data-test"));
                console.log("event: ", target.dataset.test);
            }}
        >
            {values.map((value) => (
                <li key={value}>
                    <button data-test={value}>{value}</button>
                </li>
            ))}

            {values.map((value) => (
                <li key={value}>
                    <button data-test={value}>{value}</button>
                </li>
            ))}


            {/*Будет ли работать?*/}
            {/*{values.forEach((value) => (*/}
            {/*  <li key={value}>*/}
            {/*    <button data-test={value}>{value}</button>*/}
            {/*  </li>*/}
            {/*))}*/}
        </ul>
    );
}
