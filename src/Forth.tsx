import { PopupMe } from "morabaa-provider";
import React from "react";

const animations = [
  "auto",
  "width",
  "height",
  "width-height",
  "scale-x",
  "scale-y",
  "scale-both",
  "slide-bottom",
  "slide-top",
  "slide-left",
  "slide-right",
  "fade",
  "none",
];

const PopupExample = () => {
  const [animation, setAnimation] = React.useState<any>("auto");

  return (
    <div className="test-container">
      <p className="test-label-gray">
        Current Animtaion is: <span className="test-label-red"> {animation} </span>
      </p>

      <div className="test-wrap">
        {animations.map((anim) => (
          <div className={`test-button ${animation === anim ? "" : "bg-white"}`} key={anim} onClick={() => setAnimation(anim)}>
            {anim}
          </div>
        ))}
      </div>

      <p className="test-button" onClick={(e) => PopupMe(<PopupChild animation={animation} />, { target: e.target as any, animation })}>
        Relative to me
      </p>

      <p className="test-button" onClick={() => PopupMe(<PopupChild animation={animation} />, { animation })}>
        Relative to body
      </p>
    </div>
  );
};

export default PopupExample;

const PopupChild = ({ animation }: PopupChildProps) => {
  return (
    <div className="test-col min-w-max">
      <p className="test-label-red">
        <span className="test-label-gray">animation: </span>
        {animation}
      </p>
    </div>
  );
};

interface PopupChildProps {
  animation: string;
}
