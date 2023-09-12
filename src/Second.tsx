import { PopupMe } from "morabaa-provider";
import React from "react";

const PopupExample = () => {
  const [title, setTitle] = React.useState("Am I a popup?");
  return (
    <div className="test-container">
      <input className="test-input" value={title} onChange={(e) => setTitle(e.target.value)} />
      <p className="test-button" onClick={() => PopupMe(<PopupChild title={title} />)}>
        Open Popup
      </p>
    </div>
  );
};

export default PopupExample;

const PopupChild = ({ title }: PopupChildProps) => {
  return (
    <div className="test-col">
      <p className="test-label-red"> {title} </p>
    </div>
  );
};

interface PopupChildProps {
  title: string;
}
