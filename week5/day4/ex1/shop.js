// Import products from products.js
const products = require('./products');

// Function to search for a product by name
function findProductByName(productName) {
  const product = products.find(p => p.name.toLowerCase() === productName.toLowerCase());
  if (product) {
    console.log(`Product Found: ${product.name} | Price: $${product.price} | Category: ${product.category}`);
  } else {
    console.log(`Product "${productName}" not found.`);
  }
}

// Test the function with different product names
findProductByName("Laptop");
findProductByName("Coffee Mug");
findProductByName("Notebook");
findProductByName("Tablet"); 
