import { PopupMe } from "morabaa-provider";

const PopupExample = () => {
  return (
    <div className="test-container">
      <p className="test-button" onClick={() => PopupMe(<PopupChild title="Am Relative to body " />)}>
        Relative to body
      </p>
      <p
        className="test-button"
        onClick={(e) =>
          PopupMe(<PopupChild title={"Am Relative to target"} />, {
            target: e.target as any,
          })
        }>
        Relative to me
      </p>
    </div>
  );
};

export default PopupExample;

const PopupChild = ({ title }: PopupChildProps) => {
  return (
    <div className="test-col min-w-max">
      <p className="test-label-red"> {title} </p>
    </div>
  );
};

interface PopupChildProps {
  title: string;
}
