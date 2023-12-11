import React from "react";
import bgimg from '../assets/45367.jpg';
import Slider from "./Slider";

const CarouselSection = () => {
  return (
    <div className="w-full block p-6 bg-white border border-gray-200 bg-cover bg-center h-400px" style={{ backgroundImage: "url(" + bgimg + ")" , height:"450px"}}>
      {/* carousel */}
        
        
        <div className="w-[800px] h-full border shadow mx-auto backdrop-blur-[10px]">
        <Slider/>
        </div>


    </div>
  );
};

export default CarouselSection;
