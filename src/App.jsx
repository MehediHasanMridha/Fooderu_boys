import Step from "./Step";

function App() {
  return (
    <div className="w-[382px] mx-auto mt-[132px]">
      <Step />
      {/* input field and button */}
      <div className="mt-[173px]">
        <h1 className="text-lg font-medium leading-7">Let us know your name</h1>
        <input
          className="border-[#D2D2D2] border-2 rounded-[100px] w-[382px] h-[56px] px-4 my-6"
          type="text"
          placeholder="+880"
        />
        <button className="rounded-[100px] w-[382px] h-[56px] bg-gradient-to-r from-[#FFB800] to-[#FF7A00] text-white">
          Send OTP
        </button>
      </div>
    </div>
  );
}

export default App;
