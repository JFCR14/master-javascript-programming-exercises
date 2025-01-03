function isOldEnoughToDrinkAndDrive(age) {
  if (age >= 16 && age < 21) {
    return false;
  } else if (age >= 21) {
    return false;
  } else{
    return false;
  }
  
}


let output = isOldEnoughToDrinkAndDrive(22);
console.log(output);