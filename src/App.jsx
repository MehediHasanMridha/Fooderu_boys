import GeneralPost from "./components/GeneralPost";
import Navbar from "./components/NavBar";
import Stories from "./components/Stories/Index";
import LeftDashboard from "./components/left-dashboard"

const App = () => {
  return (
    <>
       <Navbar></Navbar>
       <Stories></Stories>
        <div>
        <LeftDashboard/>
        <GeneralPost></GeneralPost>
        </div>
    </>
  );
};

export default App;
