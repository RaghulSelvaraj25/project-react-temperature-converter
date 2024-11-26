import React, { useState } from "react";
const Tempconverter = () => {
    const [celsius,setCelsius] = useState("");
    const [fahrenheit,setFahrenheit] = useState("");

    const handleCelsiusChange = (e) => {
        const celsiusValue = e.target.value;
        setCelsius(celsiusValue);
        setFahrenheit(celsiusValue ? (celsiusValue * 9/5 +32).toFixed(2) :""); 
    };
    const handleFahrenheitChange = (e) => {
        const fahrenheitValue = e.target.value;
        setFahrenheit(fahrenheitValue);
        setCelsius((fahrenheitValue) ? ((fahrenheitValue - 32)*5/9).toFixed(2):"");
    }

  return (
    <div className='converter'>
        <h2>Temperature Converter</h2>
        <div className='form-group'>
          <label>Celsius</label>
          <input type='number' value={celsius} onChange={handleCelsiusChange} placeholder='Enter Celsius' />
        </div>
        <div className='form-group'>
          <label>Fahrenheit</label>
          <input type='number' value={fahrenheit} onChange={handleFahrenheitChange} placeholder='Enter Fahrenheit' />
        </div>
    </div>
  );
};

export default Tempconverter;