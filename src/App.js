import ClickCounter from "./Components/ClickCounter";
import HoverCounter from "./Components/HoverCounter";
import Counter from "./Components/Counter";
function App() {
  return (
    <div>

      <Counter
        render={(counter, increment) => (
          <ClickCounter count={counter} increment={increment} />
        )}
      />
      <Counter
        render={(counter, increment) => (
          <HoverCounter count={counter} increment={increment} />
        )}
      />
    </div>
  );
}

export default App;
