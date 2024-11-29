import React from 'react';

const ResultDisplay = ({ celsius, fahrenheit, kelvin }) => {
  const formatValue = (value) =>
    typeof value === 'number' ? value.toFixed(2) : "--";

  return (
    <div>
      <p>Celsius: {formatValue(celsius)} °C</p>
      <p>Fahrenheit: {formatValue(fahrenheit)} °F</p>
      <p>Kelvin: {formatValue(kelvin)} K</p>
    </div>
  );
};

export default ResultDisplay;

