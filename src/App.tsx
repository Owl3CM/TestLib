import "./App.css";
import { ProviderContainer } from "morabaa-provider";
import { BrowserRouter } from "react-router-dom";
import TESTVIEW from "./PopupExample";

const App = () => {
  return (
    <BrowserRouter>
      {/* Your app code... */}
      <ProviderContainer />
      <TESTVIEW />
    </BrowserRouter>
  );
};

export default App;
