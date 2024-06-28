function processArray(arr) {
    return arr.map(num => num % 2 === 0 ? num ** 2 : num * 3);
  }
  
  function formatArrayStrings(strArr, numArr) {
    return strArr.map((str, i) => {
      if (numArr[i] % 2 === 0) {
        return str.toUpperCase();
      } else {
        return str.toLowerCase();
      }
    });
  }
  
  export { processArray, formatArrayStrings };
  