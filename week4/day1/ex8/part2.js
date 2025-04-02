// Part II: Outer function with inner functions
function makeJuice(size) {
    const ingredients = []; // Empty array to hold ingredients

    // Inner function to add ingredients to the array
    function addIngredients(ingredient1, ingredient2, ingredient3) {
        ingredients.push(ingredient1, ingredient2, ingredient3); 
    }

    // Inner function to display the juice message
    function displayJuice() {
        const message = `The client wants a ${size} drink juice, containing ${ingredients[0]}, ${ingredients[1]}, ${ingredients[2]}, ${ingredients[3]}, ${ingredients[4]}, ${ingredients[5]}.`;
        document.getElementById('message').textContent = message;
    }

    // Add ingredients twice
    addIngredients("apple", "banana", "orange");
    addIngredients("strawberry", "mango", "pineapple");

    // Call displayJuice to display the final message
    displayJuice();
}

// Call the outer function in the global scope
makeJuice("large");
