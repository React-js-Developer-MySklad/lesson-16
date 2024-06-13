import { useState } from "react";
import { createPortal } from "react-dom";
import { ModalContentBlack } from "../components";
import { ModalContentGray } from "../components";

const appElement = document.getElementsByClassName("App");

export const PortalExample = () => {
  const [isBlackModalShown, setIsBlackModalShown] = useState(false);
  const [isGrayModalShown, setIsGrayModalShown] = useState(false);

  return (
    <div
      onClick={() => {
        console.log("всплытие после клика на портал");
      }}
    >
      <button onClick={() => setIsBlackModalShown(true)}>
        Show Black modal using a portal
      </button>
      <button onClick={() => setIsGrayModalShown(true)}>
        Show Gray modal using a portal
      </button>
      {isBlackModalShown &&
        createPortal(
          <ModalContentBlack
            onClose={() => {
              setIsBlackModalShown(false);
            }}
          />,
          // appElement[0],
          document.body,
        )}

      {isGrayModalShown &&
        createPortal(
          <ModalContentGray
            onClose={() => {
              setIsGrayModalShown(false);
            }}
          />,
          document.body,
        )}
    </div>
  );
};
