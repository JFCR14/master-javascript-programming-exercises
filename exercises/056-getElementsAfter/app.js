function getElementsAfter(array, n) {
  let arr = array.slice(n + 1);
  return arr;
  
}

let output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
console.log(output); // --> ['d', 'e']
