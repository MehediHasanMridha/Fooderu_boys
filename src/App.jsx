import Step from "./Step";
import profileImg from "./assets/profile.svg";
function App() {
  return (
    <div className="w-[382px] md:w-[660px] lg:w-[942px] mx-auto mt-[132px] md:mt-[189px] lg:mt-[144px]">
      <Step />
      {/* input field and button */}
      <div className="mt-[173px] md:mt-[215px] lg:mt-[244px] mx-auto w-[382px] md:w-[452px] lg:w-[480px]">
        <img className="mx-auto" src={profileImg} alt="" />
        <input
          className="rounded-[94px] flex justify-center items-center py-2 px-4 placeholder:text-[#939393] border border-[#D2D2D2] mx-auto placeholder:text-center my-3"
          type="file"
          placeholder="Upload profile picture"
        ></input>
        <button className="rounded-[100px] w-full h-[56px] bg-gradient-to-r from-[#FFB800] to-[#FF7A00] text-white cursor-pointer">
          Send OTP
        </button>
      </div>
    </div>
  );
}

export default App;
