import { PopupMe } from "morabaa-provider";
import React from "react";

const placementsWithTarget = ["auto", "left", "top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right", "right", "none", "auto"];

const PopupExample = () => {
  const [placement, setPlacement] = React.useState<any>("auto");
  return (
    <div className="test-container bg-red bg-prim border-cyan">
      <h1 className="test-label-gray">Placements with target</h1>
      <div
        className={`test-button ${placement === "inside" ? "" : "bg-white"}`}
        key={"inside"}
        onClick={(e) => {
          setPlacement("inside");
          PopupMe(<PopupChild placement={"inside"} />, { target: e.target as any, placement: "inside" });
        }}>
        {"inside"}
      </div>
      <div className="test-wrap gap">
        {placementsWithTarget.map((plac: any) => (
          <div
            className={`test-button ${placement === plac ? "" : "bg-white"}`}
            key={plac}
            onClick={(e) => {
              setPlacement(plac);
              PopupMe(<PopupChild placement={plac} />, { target: e.target as any, placement: plac });
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
      <p className="test-label-red">
        <span className="test-label-gray"> placement: </span>
        {placement}
      </p>
    </div>
  );
};

interface PopupChildProps {
  placement: string;
}
