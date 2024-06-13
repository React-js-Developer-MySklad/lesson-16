import React, {useState} from "react";

type Props = {
    title: string
    initialCount?: number
}

const Counter: React.FC<Props> = ({ title, initialCount = 2 }) => {
    const [count, setCount] = useState(0);

    return (
        <div
            onClick={() => setCount(count + 1)}
            style={{ border: "5px solid red", padding: "10px" }}
        >
            <h1>{title}</h1>
            <p>{count}</p>
        </div>
    );
};

export const KeyExample2 = () => {
    const [isFirstCounter, setFirstCounter] = useState(false);

    return (
        <>
            <h2>Keys / Condition Rendering</h2>
            <div style={{userSelect: 'none'}}>
                {isFirstCounter ? (
                    <Counter title="First Counter"/>
                ) : (
                    <Counter title="Second  Counter"/>
                )}

                <hr/>

                <button onClick={() => setFirstCounter(!isFirstCounter)}>
                    toggle counter
                </button>
            </div>
        </>
    )
}
