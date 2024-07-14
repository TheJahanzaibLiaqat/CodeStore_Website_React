import icons from "/images/icons.png"
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

const Cards = () => {
  useEffect(()=>{
    Aos.init({duration:"1500"});
  },[])
  return (
    <div className="md:flex max-w-screen-xl mx-auto my-20 md:my-28" id="feature">
      <div className="md:w-[30vw]">
        <div className="font-bold text-center md:text-start mx-3 md:mx-0  text-5xl md:text-3xl md:w-[15vw]">Why we are better than others</div>
        <p className="md:text-justify text-center md:my-0 my-6 md:mx-0 mx-3 md:w-[20vw]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus quos dignissimos ea maxime quam, obcaecati, eveniet
          dolore doloremque
        </p>
      </div>

      <div className="md:flex md:gap-12">
        <div data-aos="fade-up-right" className="cursor-pointer shadow-purple-500 hover:bg-gray-100 shadow-lg md:mt-0 mt-14 border mx-5 md:mx-0 border-gray-200 h-[55vh] md:h-[50vh] md:w-[20vw] rounded-lg">
            <img src={icons} alt="icons" className="h-[30vh] mx-auto w-[90vw] md:w-[20vw] py-0" />
            <div className="font-bold text-4xl md:text-2xl ms-6 w-5  ">
                Conventient study schedule
            </div>
        </div>

        <div data-aos="fade-up" className="cursor-pointer shadow-lg shadow-purple-500 hover:bg-gray-100 md:mt-16 mt-14 border mx-5 md:mx-0 border-gray-200 h-[55vh] md:h-[50vh] md:w-[20vw] rounded-lg">
            <img src={icons} alt="icons" className="h-[30vh] mx-auto w-[90vw] md:w-[20vw] py-0" />
            <div className="font-bold text-4xl md:text-2xl ms-6 w-5  ">
                Conventient study schedule
            </div>
        </div>


        <div data-aos="fade-up-right" className="cursor-pointer hover:bg-gray-100 shadow-lg shadow-purple-500 md:mt-0 mt-14 border mx-5 md:mx-0 border-gray-200 h-[55vh] md:h-[50vh] md:w-[20vw] rounded-lg">
            <img src={icons} alt="icons" className="h-[30vh] mx-auto w-[90vw] md:w-[20vw] py-0" />
            <div className="font-bold text-4xl md:text-2xl ms-6 w-5  ">
                Conventient study schedule
            </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
