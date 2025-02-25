import Dashboard from "./components/dashboard";
import Restaurant from "./components/restaurant";

const App = () => {
  return (
    <div className="2xl:flex 2xl:gap-6 2xl:justify-center max-w-screen-[1920px]">
      <div>
        <Dashboard />
      </div>

      <div>
        <Restaurant />
      </div>

      <div>
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
