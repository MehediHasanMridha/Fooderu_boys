import GeneralPost from "./components/GeneralPost";
import Navbar from "./components/NavBar";
import Stories from "./components/Stories/Index";


const App = () => {
  return (
    <>
       <Navbar></Navbar>
       <Stories></Stories>
        <GeneralPost></GeneralPost>
    </>
  );
};

export default App;
