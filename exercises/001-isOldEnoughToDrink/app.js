function isOldEnoughToDrink(age) {
    if (age < 21) {
        return false;
    } else if(age >= 21){
        return true;
    } else {
        return console.log("Error");
    }
    
}

let output = isOldEnoughToDrink(19);
console.log(output); 

