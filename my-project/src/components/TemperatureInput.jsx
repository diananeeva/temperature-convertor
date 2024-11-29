import React from 'react';

const TemperatureInput = ({ temperature, unit, onTemperatureChange, onUnitChange }) => {
  return (
    <div>
      <label>
        Temperature:
        <input
          type="number"
          value={temperature}
          onChange={onTemperatureChange}
        />
      </label>
      <select value={unit} onChange={onUnitChange}>
        <option value="C">Celsius</option>
        <option value="F">Fahrenheit</option>
        <option value="K">Kelvin</option>
      </select>
    </div>
  );
};

export default TemperatureInput;
