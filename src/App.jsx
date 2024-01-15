import React from "react";
import NavBar from './components/NavBar'
import { Hero } from "./components/Hero";
// import Featured from "./components/Featured";
import HeroLog from "./components/Hero-Log";
import HeroTimer from "./components/Hero-Timer";
import Footer from "./components/Footer";

function App() {
  return (
    
    <>
      <NavBar/>
      <Hero />
      <HeroLog />
      <HeroTimer />
      <Footer />

      
    </>
  );
}

export default App;
