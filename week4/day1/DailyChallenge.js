let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

// Arrow function to display the fruits from the groceries object
const displayGroceries = () => {
    groceries.fruits.forEach(fruit => {
        console.log(fruit);
    });
};

// Arrow function to clone the groceries and client objects
const cloneGroceries = () => {
    // Cloning the client variable
    let user = client; 

    // Changing the client variable
    client = "Betty";

    // Checking if the change in 'client' affects 'user'
    console.log(`User's name after modification: ${user}`); 

    // Cloning the groceries object (this is a shallow copy)
    let shopping = groceries;

    // Changing the totalPrice
    shopping.totalPrice = "35$";
    console.log(`Modified totalPrice: ${shopping.totalPrice}`); 

    // Changing the paid key in the other object
    shopping.other.paid = false;
    console.log(`Modified paid status: ${shopping.other.paid}`); 
    console.log(`Original groceries paid status: ${groceries.other.paid}`); 
};

// Call the functions
displayGroceries();
cloneGroceries();
