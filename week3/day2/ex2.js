// 1 Array called Colors

const colors = ["Blue", "Red", "Green", "Black", "Purple"];

// 2 Loop through the array 

    for ( let i = 0; i < colors.length; i++ ){
        console.log("My #${i + 1) choice is ${colors[i]}")
    }

// 3 array suffix 

const suffixes = ["st", "nd", "rd", "th", "th"];

    for ( let i = 0; i < colors.length; i++){
        console.log(`My ${i + 1}${suffixes[i]} choice is ${colors[i]}`);
    }
    