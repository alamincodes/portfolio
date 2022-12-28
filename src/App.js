import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
  const [isMenuShown, setIsMenuShown] = useState(false);
  return (
    <div className="">
      <Navbar isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown}/>
      <About />
      <Skills/>
    </div>
  );
}

export default App;
