import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Gallery from "./pages/gallery/Gallery";
import Plans from "./pages/plans/Plans";
import Trainers from "./pages/trainers/Trainers";
import NotFound from "./pages/notfound/NotFound";
import Navbar from "./pages/navbar/Navbar";
const App = () => {
  return (
    <div>
    <BrowserRouter>
        <Navbar/>
    </BrowserRouter>
        <Home/>
        <About/>
        <Contact/>
        <Gallery/>
        <Plans/>
        <Trainers/>
        <NotFound/>
        
    </div>
  )
}

export default App