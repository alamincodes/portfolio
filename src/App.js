import { useState } from "react";
import "./App.css";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  const [isMenuShown, setIsMenuShown] = useState(false);
  return (
    <div className="">
      <Navbar isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown}/>
      <About />
      <Skills/>
      <Projects/>
      <ContactForm/>
    </div>
  );
}

export default App;
