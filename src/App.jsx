import "./index.css";

import ReactDOM from "react-dom/client";

// Implementing very own useState function
let render = 0;

const states = {};

const useState = (value) => {
  const id = render++;

  if (states[id]) return states[id];

  const setValue = (newValue) => {
    // Do some assigning
    states[id][0] = newValue;
    // Rerender React
    manualRerender();
  };

  const state = [value, setValue];
  states[id] = state;
  console.log(states);

  return state;
};

const App = () => {
  const [count, setCount] = useState(1);
  const [error, setError] = useState(null);

  const adder = () => {
    if (count < 10) {
      setCount(count + 1);
      setError(null);
    } else {
      setError("You cant go higher than 10");
    }
  };

  const subtractor = () => {
    if (count > 1) {
      setCount(count - 1);
      setError(null);
    } else {
      setError("You cant go lower than 1");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <div className="space-x-4 text-2xl">
        <button
          className="border border-amber-600 p-4 cursor-pointer"
          onClick={subtractor}
        >
          -
        </button>
        <span className="font-bold">{count}</span>
        <button
          className="border border-amber-600 p-4 cursor-pointer"
          onClick={adder}
        >
          +
        </button>
      </div>
      <p className="my-2 text-red-500 text-xl font-medium">{error}</p>
    </div>
  );
};

const manualRerender = () => {
  render = 0;

  const rootElement = document.getElementById("root");
  ReactDOM.createRoot(rootElement).render(<App />);
};
manualRerender();

export default App;
