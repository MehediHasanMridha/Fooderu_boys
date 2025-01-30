import icon from "./assets/quick-setup.png";
function App() {
  return (
    <div className="h-screen">
      <div className="w-[382px] md:w-[480px] h-[403px] md:h-[420px] mx-auto mt-[116px] md:mt-[333px] lg:mt-[116px]">
        <img
          className="h-[270px] md:h-[280px] w-[270px] md:w-[280px] mx-auto"
          src={icon}
          alt="quick-setup image"
        />
        <h2 className="text-2xl md:text-[28px] font-medium text-center my-6 text-[#585858]">
          Let’s start a quick setup tour
        </h2>
        <button className="text-white bg-gradient-to-r from-[#FFB800] to-[#FF7A00] w-full rounded-4xl text-lg md:text-xl font-medium leading-[30px] py-3">
          Start
        </button>
      </div>
    </div>
  );
}

export default App;
