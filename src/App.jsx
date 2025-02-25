import GeneralPost from "./GeneralPost";
import Navbar from "./Navbar";
import Stories from "./stories/Index";

function App() {
  return (
    <div className="w-full flex-col flex justify-center items-center">
      <Navbar />
      <Stories />
      {[1, 2, 3, 4].map((a, idx) => (
        <GeneralPost key={idx} />
      ))}
    </div>
  );
}

export default App;
