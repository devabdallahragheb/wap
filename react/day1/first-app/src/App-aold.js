import React, { useState } from "react";
import "./App.css";

function App() {
  // Initialize state for each form element
  const [selectedCars, setSelectedCars] = useState([]);

  const handleEvent = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions);
    const values = selectedOptions.map((option) => option.value);
    setSelectedCars(values);
  };

  return (
    <div className="App">
      <label htmlFor="cars">Choose a car:</label>
      <select name="cars" id="cars" onChange={handleEvent} multiple>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>
      <br></br>
      <label>{selectedCars.join(", ")}</label>
      <br></br>
      java<input type="checkbox" group="test" value="java"></input>
      javascript<input type="checkbox" group="test" value="javscript"></input>
    </div>
  );
}

export default App;
