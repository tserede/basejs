function compArr(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else
    for (let i = 0; i < arr1.length;i++ ) {
      if (arr1[i] !== arr2[i]) {
        return false;
      } 
      }
      return true;
    }
console.log(compArr([2, 4, 2, 4, 1,5], [2, 4, 2, 4, 1,5]));