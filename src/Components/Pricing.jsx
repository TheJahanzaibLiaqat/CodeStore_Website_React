import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";


const Pricing = () => {

    useEffect(()=>{
        Aos.init({duration:"1500"});
      },[])
  return (
    <div id="pricing">
      <div  className="text-5xl font-bold text-center">Here are all our plans</div>
      <p className="mx-auto text-center mt-4 w-[70vw] md:w-[30vw]">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero adipisci
        nostrum inventore quas ex rem molestiae praesentium
      </p>

      <label className="flex justify-center gap-7 md:gap-10 md:w-[30vw] md:mx-auto items-center cursor-pointer mt-14 ">
        
        <input type="checkbox" value="" className="sr-only peer" />
        <span className="text-4xl font-bold">
          Monthly
        </span>
        <div className="relative w-11 h-6 bg-purple-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-700"></div>
        <span className="text-4xl font-bold me-[70px]">
         Year
        </span>
      </label>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 space-y-14 lg:space-y-0 grid-cols-1 my-16">
        <div className="border border-gray-200 rounded-2xl shadow-2xl mx-14">
          <div className="text-center font-bold text-2xl mt-5">Start</div>
          <p className="text-center mx-7 mt-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
            facilis velit sit ducimus
          </p>
          <h1 className="text-sm text-center mt-8"><span className="text-6xl text-purple-700 font-bold">50$</span>/month </h1>
          <ul className='list-outside justify-center list-disc ml-[70px] items-center mt-7'>
            <li className="marker:text-green-400 marker:text-5xl">Videos</li>
            <li className="marker:text-purple-400 marker:text-5xl ">Homework check</li>
            <li className="marker:text-red-400 marker:text-5xl ">Additional Task</li>
            <li className="marker:text-yellow-400 marker:text-5xl ">Monthly Conference</li>
            <li className="marker:text-amber-800 marker:text-5xl ">Personal advice from teachers</li>

          </ul>

          <button className="outline-purple-800 outline-1 outline block mx-auto mt-7 hover:bg-purple-700 hover:text-white mb-12 rounded-xl py-3 px-6 text-purple-700">Get Started</button>
        </div>


        <div data-aos="fade-up" className="border bg-purple-100 border-gray-200 rounded-2xl shadow-2xl mx-14">
          <div className="text-center font-bold text-2xl mt-5">Start</div>
          <p className="text-center mx-7 mt-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
            facilis velit sit ducimus
          </p>
          <h1 className="text-sm text-center mt-8"><span className="text-6xl text-purple-700 font-bold">50$</span>/month </h1>
          <ul className='list-outside justify-center list-disc ml-[70px] items-center mt-7'>
            <li className="marker:text-green-400 marker:text-5xl">Videos</li>
            <li className="marker:text-purple-400 marker:text-5xl ">Homework check</li>
            <li className="marker:text-red-400 marker:text-5xl ">Additional Task</li>
            <li className="marker:text-yellow-400 marker:text-5xl ">Monthly Conference</li>
            <li className="marker:text-amber-800 marker:text-5xl ">Personal advice from teachers</li>

          </ul>

          <button className=" block mx-auto mt-7 outline-purple-800 outline-1 outline hover:bg-white hover:text-black bg-purple-700 text-white mb-12 rounded-xl py-3 px-6 text-purple-700">Get Started</button>
        </div>


        <div className="border border-gray-200 rounded-2xl shadow-2xl mx-14">
          <div className="text-center font-bold text-2xl mt-5">Start</div>
          <p className="text-center mx-7 mt-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
            facilis velit sit ducimus
          </p>
          <h1 className="text-sm text-center mt-8"><span className="text-6xl text-purple-700 font-bold">50$</span>/month </h1>
          <ul className='list-outside justify-center list-disc ml-[70px] items-center mt-7'>
            <li className="marker:text-green-400 marker:text-5xl">Videos</li>
            <li className="marker:text-purple-400 marker:text-5xl ">Homework check</li>
            <li className="marker:text-red-400 marker:text-5xl ">Additional Task</li>
            <li className="marker:text-yellow-400 marker:text-5xl ">Monthly Conference</li>
            <li className="marker:text-amber-800 marker:text-5xl ">Personal advice from teachers</li>

          </ul>

          <button className="outline-purple-800 outline-1 outline block mx-auto mt-7 hover:bg-purple-700 hover:text-white mb-12 rounded-xl py-3 px-6 text-purple-700">Get Started</button>
        </div>


        
      </div>
    </div>
  );
};

export default Pricing;
