function convertTemperature() {
  // Get input values
  let degreesInput = document.getElementById('degrees');
  let conversionUnit = document.getElementById('conversionUnit');
  let resultValue = document.getElementById('resultValue');

  // Convert degrees to selected unit
  if (degreesInput.value !== '') {
      let degreesValue = parseFloat(degreesInput.value);

      if (conversionUnit.value === 'celsius') {
          // Convert to Celsius
          resultValue.textContent = ` celsius in ${(degreesValue).toFixed(2)} °C`;
      } else if (conversionUnit.value === 'fahrenheit') {
          // Convert to Fahrenheit
          resultValue.textContent = ` Fahrenheit in ${((degreesValue * 9/5) + 32).toFixed(2)} °F`;
      }
  } else {
      // If the input is empty, clear the result
      resultValue.textContent = '';
  }
}