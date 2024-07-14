import main from "/images/main.png";

const Main = () => {
  return (
    <div id="/">
      <div className="bg-gradient-to-r from-pink-400 via-purple-500  to-purple-700 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl max-w-[370px] mx-auto mt-28 md:flex rounded-br-[150px] rounded-2xl  md:flex-row-reverse p-5 md:p-0 pb-14  md:py-28">

      <div>
        <img src={main} alt="" />
      </div>

      <div className="md:w-[50vw]">
        <div className="text-5xl md:text-7xl font-bold text-white font-mono md:ps-7 text-center md:text-start pt-7 md:w-[60vw]">
          Develop your Skills without diligence
        </div>
        <div className="text-white ps-7 pt-5 lg:text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum vitae
          soluta aspernatur dolorem, numquam expedita pariatur molestiae natus
          itaque suscipit sed dolore possimus eum ut libero. Veritatis odit
          accusantium eos?
        </div>
        <button className="bg-purple-700 px-4 hover:bg-purple-800 text-white p-3 ms-6 mt-10">
          Get Started
        </button>
        <button className="bg-purple-700 px-5 hover:bg-purple-800 text-white p-3 ms-6 mt-10">
          Discount
        </button>
      </div>

      </div>
    </div>
  );
};

export default Main;
