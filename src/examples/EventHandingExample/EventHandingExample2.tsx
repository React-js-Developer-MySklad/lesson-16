import React, {FC} from "react";
import './EventHandingExample.css'

export const EventHandingExample2: FC = () => {
  const onMouseEnter = (e: React.MouseEvent<HTMLElement>) =>
      console.log("onMouseEnter", e.currentTarget, e.target);
  const onMouseOver = (e: React.MouseEvent<HTMLElement>) =>
      console.log("onMouseOver", e.currentTarget, e.target);

  const onMouseLeave = (e: React.MouseEvent<HTMLElement>) =>
      console.log("onMouseLeave", e.currentTarget, e.target);
  const onMouseOut = (e: React.MouseEvent<HTMLElement>) =>
      console.log("onMouseOut", e.currentTarget, e.target);

  return (
      <>
        <h2>Events / Bubbling</h2>
        <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
            onClick={e => {console.log(e.target, e.currentTarget)}}
            className="event-handing__wrapper"
        >
          <div className="event-handing__parent">
            <div className="event-handing__target"/>
          </div>
        </div>
      </>
  );
}