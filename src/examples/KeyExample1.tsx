import React, { useState } from "react";
import { Item } from "../components";

export const KeyExample1 = () => {
    const [count, setCount] = useState(0);

    return (
        <div >
            <button onClick={() => setCount(count + 1)}>add count</button>
            <Item key={count}>{`Count ${count}`}</Item>
            <Item key={count}>Count 2</Item>
            <Item key={count}>Count 3</Item>
            <Item key={count}>Count 4</Item>
        </div>
    );
}
