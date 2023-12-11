import { Route, Routes,Navigate } from "react-router-dom";

import './App.css'
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import CardSection from "./Components/CardSection";
import CarouselSection from "./Components/CarouselSection";
import AboutusSection from "./Components/AboutusSection";
import oneimg from './assets/1.jpg'
import twoimg from './assets/2.jpg'
import threeimg from './assets/3.jpg'
import fourimg from './assets/4.jpg'
import SubscribeLetter from "./Components/SubscribeLetter";
import Footer from "./Components/Footer";

function App() {

  return (
   
        <div>
          <Navbar/>
          <Slider oneimg={oneimg} twoimg={twoimg} threeimg={threeimg} fourimg={fourimg}/>
          <AboutusSection/>
          <CardSection/>
          <CarouselSection/>
          <SubscribeLetter/>
          <Footer/>
        </div>
  
  );
}

export default App;

