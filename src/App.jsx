import LeftDashboard from "./components/left-dashboard";
import Restaurant from "./components/restaurant";
import RightDashboard from "./components/right-dashboard";

const App = () => {
  return (
    <div className="2xl:flex 2xl:gap-6 2xl:justify-center max-w-screen-[1920px]">
      <div>
        <LeftDashboard />
      </div>

      <div>
        <Restaurant />
      </div>

      <div>
        <RightDashboard />
      </div>
    </div>
  );
};

export default App;
