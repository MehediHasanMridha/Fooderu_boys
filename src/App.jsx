import Step from "./Step";

function App() {
  return (
    <div className="w-[382px] md:w-[660px] lg:w-[942px] mx-auto mt-[132px] md:mt-[189px] lg:mt-[144px]">
      <Step />
      {/* input field and button */}
      <div className="mt-[173px] md:mt-[215px] lg:mt-[244px] mx-auto w-[382px] md:w-[452px] lg:w-[480px]">
        <h1 className="text-lg md:text-[18.8px] lg:text-xl font-medium leading-7">
          Let us know your name
        </h1>
        <input
          className="border-[#D2D2D2] border-2 rounded-[100px] w-full h-[56px] px-4 my-6 md:my-[22.6px]"
          type="text"
          placeholder="+880"
        />
        <button className="rounded-[100px] w-full h-[56px] bg-gradient-to-r from-[#FFB800] to-[#FF7A00] text-white">
          Send OTP
        </button>
      </div>
    </div>
  );
}

export default App;
