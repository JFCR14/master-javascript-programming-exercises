function getAllWords(str) {
    let array = []
    array = str.split(" ");
    return array;
}

let output = getAllWords('Radagast the Brown');
console.log(output); // --> ['Radagast', 'the', 'Brown']
