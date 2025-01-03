// Write your function here
function areBothOdd(numero1, numero2) {
    if (numero1 % 2 != 0 && numero2 % 2 != 0) {
        return true;
    } else {
        return false;
    }
}
let output = areBothOdd(1, 3);
console.log(output)