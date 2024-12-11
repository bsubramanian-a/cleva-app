function limitValue(value:number, minValue:number, maxValue:number, allowedDecimals:number) {
    let currentValue = 0;
    if (!isNaN(value)) {
      if (!isNaN(allowedDecimals) && allowedDecimals > 0) {
        currentValue = Number(parseFloat(value.toString()).toFixed(allowedDecimals < 4 ? allowedDecimals : 4));
      } else {
        currentValue = parseInt(value.toString());
      }
    }
    return Math.min(Math.max(currentValue, minValue), maxValue);
  }
  
  export default limitValue;