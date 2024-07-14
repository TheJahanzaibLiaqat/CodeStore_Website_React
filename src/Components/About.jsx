import about from "/images/About.png"
import abbout from "/images/abbout.png"

import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";



const About = () => {

    useEffect(()=>{
        Aos.init({duration:"1500"});
      },[])
  return (
    <div>
    <div className="container_1 md:flex" id="about">
      <div data-aos="fade-up-right" className="md:w-[50vw]">
        <img src={about} alt="" />
      </div>

      <div className="md:w-[40vw] mt-10">
        <div className="font-bold text-4xl text-center md:text-start mx-2 md:mx-0 md:w-[35vw] tracking-wider">We have been improving our product <span className="text-purple-700"> for many years </span></div>
        <p className="mt-5 mx-4 md:mx-0 text-center md:text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi minus
          dolorum recusandae id dolores vel minima reprehenderit tempora sequi
          laboriosam labore numquam.
        </p>
        <button data-aos="fade-up" className="mt-5 md:mx-0 mx-auto block bg-purple-700 text-white p-3 hover:bg-purple-800">Get Started</button>
      </div>
    </div>


<div className="container_2 md:flex mt-10 md:mt-0 mx-5 md:mx-0 md:flex-row-reverse mb-10">
      <div data-aos="fade-up-right" className="md:ps-24 md:w-[50vw]">
        <img src={abbout} alt="" />
      </div>

      <div className="md:w-[40vw] md:mt-28">
        <div className="font-bold text-4xl text-center md:text-start mx-2 md:mx-0 md:w-[35vw] tracking-wider">We have been improving our product <span className="text-purple-700"> for many years </span></div>
        <p className="mt-5 mx-4 md:mx-0 text-center md:text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi minus
          dolorum recusandae id dolores vel minima reprehenderit tempora sequi
          laboriosam labore numquam.
        </p>
        <button data-aos="fade-up" className="mt-5 md:mx-0 mx-auto block bg-purple-700 text-white p-3 hover:bg-purple-800">Get Started</button>
      </div>
    </div>


    </div>
  );
};

export default About;
