import Navbar from "./Navbar";
import Stories from "./stories/Index";

function App() {
  return (
    <div className="w-full flex-col flex justify-center items-center">
      <Navbar />
      <Stories />
    </div>
  );
}

export default App;
