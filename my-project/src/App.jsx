import React, { useState } from "react";
import TemperatureConverter from "./components/TemperatureConverter";
import "./App.css";

function App() {
  const [temperature, setTemperature] = useState(0);
  const [unit, setUnit] = useState("C");

  const handleTemperatureChange = (e) => {
    const value = e.target.value;
 
    if (value === "") {
      setTemperature(""); 
      return;
    }
  
   
    if (!isNaN(value) && value.trim() !== "") {
      setTemperature(value);
    }
  };
  
   
  const handleUnitChange = (e) => {
    setUnit(e.target.value);
  };

  return (
    <>
      <div className="app">
        <h1>Temperature Convertor</h1>
        <TemperatureConverter
          temperature={temperature}
          unit={unit}
          onTemperatureChange={handleTemperatureChange}
          onUnitChange={handleUnitChange}
        />
      </div>
    </>
  );
}

export default App;
