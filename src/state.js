const state = {};

// {0: [0, func]}

let renderCount = 0;

function useState(initialValue) {
  const id = renderCount++;

  if (!state[id]) {
    state[id] = [
      initialValue,
      function (newValue) {
        state[id][0] = newValue;
        reRender();
      },
    ];
  }

  return state[id];
}

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  console.log(state);

  const app = document.getElementById("root");
  app.innerHTML = `
      <div>
        <p>Count: ${count}</p>
        <button id="increment">Increment</button>
        <button id="decrement">Decrement</button>
        <p>Message: ${message}</p>
      </div>
    `;

  document.getElementById("increment").addEventListener("click", () => {
    setCount(count + 1);
    setMessage("Incremented count by 1");
  });

  document.getElementById("decrement").addEventListener("click", () => {
    setCount(count - 1);
    setMessage("Decremented count by 1");
  });
}

function reRender() {
  renderCount = 0;

  App();
}

App();
