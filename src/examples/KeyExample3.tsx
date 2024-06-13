import React, { useEffect, useState, useCallback, memo } from "react";

export const KeyExample3 = () => {
  const [comp, setComp] = useState(<></>);
  const [state, setState] = useState(false);

  const updateHandler = useCallback((state: boolean) => {
    return state ? <Counter title="first" /> : <Counter title="second" />;
    // setComp(state ? <Counter title="first" /> : <Counter title="second" />);
  }, []);

  useEffect(() => {
    updateHandler(state);
  }, [state]);

  return <div onClick={() => setState(!state)}>{updateHandler(state)}</div>;
  // return <div onClick={() => setState(!state)}>{comp}</div>;
};

type Props = {
  title: string
}

const Counter: React.FC<Props> = ({ title }) => {
  const [count, setCount] = useState(0);

  return (
      <>
        <h2>Keys / Condition Rendering </h2>
        <div style={{userSelect: 'none'}} onClick={() => setCount(count + 1)}>
          <strong>{title}: </strong>
          <span>{count}</span>
        </div>
      </>
  );
}
