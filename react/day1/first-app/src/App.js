import React, { useState } from "react";
import "./App.css";

function App() {
  const dataAraay = ["ahned", "mohamed", "abdullah"];
  const [name, setname] = useState([]);
  const handel = (e) => {
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setname(selectedOptions);
  };
  return (
    <div className="App">
      <div>
        <select onChange={handel} multiple>
          {dataAraay.map((x) => (
            <option key={x} value={x}>
              {x}
            </option>
          ))}
        </select>
        <label>{name.join(",")}</label>
      </div>
    </div>
  );
}

export default App;
