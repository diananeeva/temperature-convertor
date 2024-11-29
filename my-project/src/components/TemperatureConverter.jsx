import React from 'react';
import TemperatureInput from './TemperatureInput';
import ResultDisplay from './ResultDisplay';
import { convertTemperature } from '../utils/temperatureUtils';

const TemperatureConverter = ({ temperature, unit, onTemperatureChange, onUnitChange }) => {
  const { celsius, fahrenheit, kelvin } = convertTemperature(temperature, unit);

  return (
    <div>
      <TemperatureInput
        temperature={temperature}
        unit={unit}
        onTemperatureChange={onTemperatureChange}
        onUnitChange={onUnitChange}
      />
      <ResultDisplay celsius={celsius} fahrenheit={fahrenheit} kelvin={kelvin} />
    </div>
  );
};

export default TemperatureConverter;




