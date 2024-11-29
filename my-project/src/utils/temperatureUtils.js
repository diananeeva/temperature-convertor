export const convertTemperature = (temp, unit) => {
  if (temp === "") {
    return {
      celsius: "",
      fahrenheit: "",
      kelvin: "",
    };
  }

  temp = parseFloat(temp);
  if (isNaN(temp)) {
    return {
      celsius: 0,
      fahrenheit: 32,
      kelvin: 273.15,
    };
  }

  if (unit === "C") {
    return {
      celsius: temp,
      fahrenheit: (temp * 9) / 5 + 32,
      kelvin: temp + 273.15,
    };
  } else if (unit === "F") {
    return {
      fahrenheit: temp,
      celsius: (temp - 32) * 5 / 9,
      kelvin: (temp - 32) * 5 / 9 + 273.15,
    };
  } else if (unit === "K") {
    return {
      kelvin: temp,
      celsius: temp - 273.15,
      fahrenheit: (temp - 273.15) * 9 / 5 + 32,
    };
  } else {
    return {
      celsius: 0,
      fahrenheit: 32,
      kelvin: 273.15,
    };
  }
};
