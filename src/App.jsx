import RangeSlider from "./components/RangeSlider";

const App = () => {
  return (
    <div className="container">
      <div className="card">
        <h1>Price Range Selector</h1>
        <RangeSlider min={0} max={100} step={10} />
      </div>
    </div>
  );
};

export default App;
