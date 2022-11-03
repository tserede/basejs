function compArr(arr1, arr2) {
  if (arr1.lenght == arr2.lenght) {
    for (let i = 0; i < arr1.lenght; ){
        if(arr1[i]===arr2[i]){
            i=i+1;
        } else console.log ("false")
    }
  } else console.log ("false")
}
compArr([2,6,7,1,5,2],[2,3,1,2,3,9]);