function customSort(arr) {
    arr.sort((a, b) => a - b);
  
    const result = [];
    let low = 0;
    let high = arr.length - 1;
  
    while (low <= high) {
      if (low !== high) {
        result.push(arr[low]);
        result.push(arr[high]);
      } else {
        result.push(arr[low]);
      }
  
      low++;
      high--;
    }
  
    return result;
  }