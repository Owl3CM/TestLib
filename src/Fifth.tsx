import { PopupMe } from "morabaa-provider";
import React from "react";

const placementsWithBody = ["auto", "center", "top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right", "left", "right", "none"];

const PopupExample = () => {
  const [placement, setPlacement] = React.useState<any>("auto");
  return (
    <div className="test-container">
      <h1 className="test-label-gray">Placements with target</h1>
      <div className="test-wrap gap">
        {placementsWithBody.map((plac: any) => (
          <div
            className={`test-button ${placement === plac ? "" : "bg-white"}`}
            key={plac}
            onClick={() => {
              setPlacement(plac);
              PopupMe(<PopupChild placement={plac} />, { placement: plac });
            }}>
            {plac}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopupExample;

const PopupChild = ({ placement }: PopupChildProps) => {
  return (
    <div className="test-col min-w-max">
      <p className="test-label-red" style={{ textAlign: "center" }}>
        <span className="test-label-gray"> placement: </span>
        {placement}
      </p>
    </div>
  );
};

interface PopupChildProps {
  placement: string;
}
