// Part I: Outer function with inner function
function makeJuice(size) {
    // Inner function
    function addIngredients(ingredient1, ingredient2, ingredient3) {
        const message = `The client wants a ${size} drink juice, containing ${ingredient1}, ${ingredient2}, ${ingredient3}.`;
        document.getElementById('message').textContent = message;
    }

    // Invoke the inner function inside the outer function
    addIngredients("apple", "banana", "orange");
}

// Call the outer function in the global scope
makeJuice("medium");
