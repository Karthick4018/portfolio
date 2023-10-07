import React from "react";
import { Navtop } from "./components/Navtop";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Bodybanner } from "./components/Bodybanner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <Navtop></Navtop>
      <Bodybanner></Bodybanner>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
  </div>
  );
}

export default App;
