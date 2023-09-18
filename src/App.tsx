import { ProviderContainer } from "morabaa-provider";
import { BrowserRouter } from "react-router-dom";
import TESTVIEW from "./PopupExample";
import Moon from "moon-style";
Moon.init();
Moon.setTheme("dark");
const App = () => {
  return (
    <div className="bg-new hover:[bg:#f0f3,p-xl,pt:100px] transition-200 fixed inset-0">
      <p className="text-red bg-lord hover:[bg-cyan,text-owl,p-xl] transition">hi</p>
    </div>
  );
  return (
    <BrowserRouter>
      {/* Your app code... */}
      <TESTVIEW />
      <ProviderContainer />
    </BrowserRouter>
  );
};

export default App;
