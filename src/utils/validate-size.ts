function validateSize(current:number, original:number) {
    let currentSize = original;
    if (!isNaN(current)) {
      currentSize = current; // Removed parseInt since current is already a number
    }
    return currentSize;
  }
  export default validateSize;