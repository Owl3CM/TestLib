import { PrintMe } from "morabaa-provider";

const PrintExample = () => {
  return (
    <div className="test-container">
      <p
        className="test-button"
        onClick={() =>
          PrintMe({
            Component: PopupChild,
          })
        }>
        Print
      </p>
    </div>
  );
};

export default PrintExample;

const PopupChild = () => {
  return (
    <div className="test-col">
      <p className="test-label-red"> Hello World </p>
    </div>
  );
};
