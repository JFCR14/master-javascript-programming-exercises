function isOldEnoughToDrive(age) {
  if (age < 16) {
    return false;
  } else if (age >= 16) {
    return true;
  } else {
    console.log("Error");
  }
  
}

let output = isOldEnoughToDrive(22);
console.log(output); 