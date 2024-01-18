import React from "react";
import NavBar from './components/NavBar'
import { Hero } from "./components/Hero";
// import Featured from "./components/Featured";
import HeroLog from "./components/Hero-Log";
import HeroTimer from "./components/Hero-Timer";
import Footer from "./components/Footer";
// import { Route, Routes, } from "react-router-dom";


function Splash() {
  return (
    
    <>
      
      <Hero />
      <HeroLog />
      <HeroTimer />
  

      
    </>
  );
}

export default Splash;
