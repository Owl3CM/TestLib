import { PopupMe } from "morabaa-provider";

const PopupExample = () => {
  return (
    <div className="test-container">
      <p className="test-button" onClick={() => PopupMe(<PopupChild />)}>
        Open Popup
      </p>
    </div>
  );
};

export default PopupExample;

const PopupChild = () => {
  return (
    <div className="test-col">
      <p className="test-label-red"> Hello World </p>
    </div>
  );
};
