// import { BrowserRouter } from "react-router-dom";
import "./App.css";
// import { HookInMotion } from './components/motionhook'
// import Navbar from "./components/ui/navbar";
import { AnimatedText } from "./components/animated-text";

// import Entry from './components/entry'
// import Exit from './components/exit'

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      {/* <Entry /> */}
      {/* <Exit /> */}
      <AnimatedText />
    </div>

    // <HookInMotion />
    // <BrowserRouter>
    //   <Navbar />
    // </BrowserRouter>
  );
}

export default App;
