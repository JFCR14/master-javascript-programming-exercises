function getElementsUpTo(array, n) {
  let arr = array.slice(0, n );
  return arr;  
}

let output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3) 
console.log(output); // --> ['a', 'b', 'c']

let output2 = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3) 
console.log(output2); // --> ['a', 'b', 'c']
