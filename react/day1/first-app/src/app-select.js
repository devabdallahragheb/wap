import React, { useState } from "react";
import "./App.css";

function App() {
  const [leftItems, setLeftItems] = useState(["rose", "lily", "daffodil"]);
  const [rightItems, setRightItems] = useState([]);
  const [selectedLeftItems, setSelectedLeftItems] = useState([]);
  const [selectedRightItems, setSelectedRightItems] = useState([]);

  const handleLeftSelectChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
    setSelectedLeftItems(selectedOptions);
  };

  const handleRightSelectChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
    setSelectedRightItems(selectedOptions);
  };

  const moveRight = () => {
    setRightItems([...rightItems, ...selectedLeftItems]);
    setLeftItems(leftItems.filter(item => !selectedLeftItems.includes(item)));
    setSelectedLeftItems([]);
  };

  const moveAllRight = () => {
    setRightItems([...rightItems, ...leftItems]);
    setLeftItems([]);
    setSelectedLeftItems([]);
  };

  const moveLeft = () => {
    setLeftItems([...leftItems, ...selectedRightItems]);
    setRightItems(rightItems.filter(item => !selectedRightItems.includes(item)));
    setSelectedRightItems([]);
  };

  const moveAllLeft = () => {
    setLeftItems([...leftItems, ...rightItems]);
    setRightItems([]);
    setSelectedRightItems([]);
  };

  return (
    <div className="App" style={{ display: "flex", gap: "10px", justifyContent: "space-around" }}>
      <div>
        <select multiple name="sources" value={selectedLeftItems} onChange={handleLeftSelectChange}>
          {leftItems.map(item => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
      </div>

      <div>
        <button onClick={moveRight}>{" > "}</button>
        <br></br>
        <button onClick={moveAllRight}>{">>"}</button>
        <br></br>
        <button onClick={moveLeft}>{" < "}</button>
        <br></br>
        <button onClick={moveAllLeft}>{"<<"}</button>
      </div>

      <div>
        <select multiple name="selectedSources" value={selectedRightItems} onChange={handleRightSelectChange}>
          {rightItems.map(item => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default App;