// Write your function here

function computeAverageOfNumbers(array) {
    if (array.length === 0) {
        return 0; 
    } else {
        let suma = 0; 
        for (let i = 0; i < array.length; i++) {
            suma += array[i]; 
        }
        let promedio = suma / array.length; 
        return promedio; 
    }
}

let input = [1, 2, 3, 4, 5];
let output = computeAverageOfNumbers(input);
console.log(output); 

let input2 = [];
let output2 = computeAverageOfNumbers(input2);
console.log(output2); 