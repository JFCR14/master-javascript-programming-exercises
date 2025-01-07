let obj = {
    firstName: "Rafael",
    lastName: "Leao",
    country: "Italy",
    city: "Milan",
    phoneNum: "123-456-789",
    jerseyNum: 27
}

function countNumberOfKeys(obj) {
    let contador = 0;
    for (const key in obj) {
        if (obj[key] != null) {
            contador = contador + 1;
        }
    }
    return contador;
}

let output = countNumberOfKeys(obj);
console.log(output); // --> 6
