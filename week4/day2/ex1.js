const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// Display the colors in the required format
colors.map((color, index) => {
  console.log(`${index + 1}# choice is ${color}.`);
});

// Check if "Violet" exists in the array
if (colors.includes("Violet")) {
  console.log("Yeah");
} else {
  console.log("No...");
}
