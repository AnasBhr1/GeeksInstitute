// / one loop 
let pattern = "";
for (let i = 1; i <= 6; i++) {
  pattern += "* ";
  console.log(pattern);
}

// nested loop
for (let i = 1; i <= 6; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }
  