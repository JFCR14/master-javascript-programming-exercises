function removeFromFrontOfNew(arr) {
     let array = arr.slice(0);
     array.shift();
     return array;
     
    
    
}

let arr = [1, 2, 3];
let output = removeFromFrontOfNew(arr);
console.log(output); // --> [2, 3]
console.log(arr); // --> [1, 2, 3]
