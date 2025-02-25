import LeftDashboard from "./components/left-dashboard/Index";
import RightDashboard from "./components/right-dashboard/Index";
import GeneralPost from "./GeneralPost";
import Navbar from "./Navbar";
import Stories from "./stories/Index";
function App() {
  return (
    <div className="w-full flex-col flex justify-center items-center">
      <Navbar />
      <div className="2xl:flex 2xl:gap-6 2xl:justify-center max-w-screen-[1920px] mt-4">
        <div>
          <LeftDashboard />
        </div>
        <div>
          <Stories />
          {[1, 2, 3, 4].map((a, idx) => (
            <GeneralPost key={idx} />
          ))}
        </div>
        <div>
          <RightDashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
