import { BrowserRouter } from "react-router-dom";
import "./App.css";
// import { HookInMotion } from './components/motionhook'
import Navbar from "./components/ui/navbar";

// import Entry from './components/entry'
// import Exit from './components/exit'

function App() {
  return (
    // <div className='h-screen flex items-center justify-center'>
    //   {/* <Entry /> */}
    //   {/* <Exit /> */}
    // </div>

    // <HookInMotion />
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
