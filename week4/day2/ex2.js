const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];

// Display colors with the correct ordinal suffix
colors.map((color, index) => {
  let suffix = (index + 1) % 10 === 1 && (index + 1) !== 11 ? ordinal[1] : 
               (index + 1) % 10 === 2 && (index + 1) !== 12 ? ordinal[2] : 
               (index + 1) % 10 === 3 && (index + 1) !== 13 ? ordinal[3] : ordinal[0];
  console.log(`${index + 1}${suffix} choice is ${color}.`);
});
