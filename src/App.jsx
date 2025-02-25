import LeftDashboard from "./components/left-dashboard";
import Restaurant from "./components/restaurant";
import RightDashboard from "./components/right-dashboard";
import Navbar from "./Navbar.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="2xl:flex 2xl:gap-6 2xl:justify-center max-w-screen-[1920px] mt-4">
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
    </>
  );
};

export default App;
