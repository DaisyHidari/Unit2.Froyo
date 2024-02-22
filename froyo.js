// Prompt the user for a list of integers separated by commas.
const flavorsInput = prompt(
    "Please enter the flavors of the froyo separated by commas without spaces.",
    ""
  );

  
// Split the string of numbers into an array of strings.
const flavorsArray = flavorsInput.split(",");

// Convert the array of strings into an array of flavorCount.
const flavorCount = [];
for (const flavor of flavorsArray) {
    if (flavorCount[flavor]) {
        flavorCount[flavor]++;
    } else {
        flavorCount[flavor] = 1;
    }
}


// Results in the console
console.log("Numbers of Froyo Flavors:", flavorCount);


