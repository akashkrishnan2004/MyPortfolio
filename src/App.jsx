import "./App.css";
import AppRoute from "./AppRoute";

import { BackgroundRippleEffect } from "./Ui/background-ripple-effect";
// import { BackgroundRippleEffectDemo } from "./Components/Ui/BackgroundRippleEffectDemo";


function App() {
  return (
    <div className="bg-gray-900">
      
        {/* <DottedGlowBackground /> */}
        {/* <SquaresBackground /> */}
        {/* <BackgroundRippleEffectDemo/> */}
        {/* <BackgroundRippleEffect/> */}
        
        <AppRoute />
    </div>
  );
}

export default App;
