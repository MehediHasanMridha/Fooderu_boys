function App() {
  return (
    <div className="h-screen">
      <div className="w-[382px] mx-auto mt-[116px] border">
        <img
          className="h-[270px] w-[270px] border mx-auto"
          src="./assets/quick-setup.jpg"
          alt="quick-setup image"
        />
        <h2 className="text-2xl font-medium text-center my-6">
          Let’s start a quick setup tour
        </h2>
        <button className="text-white bg-gradient-to-r from-[#FFB800] to-[#FF7A00] w-full rounded-4xl text-lg font-medium leading-[30px] p-2.5">
          Start
        </button>
      </div>
    </div>
  );
}

export default App;
