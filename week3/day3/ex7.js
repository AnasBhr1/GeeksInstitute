// Create an array of books
const allBooks = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        image: "https://covers.openlibrary.org/b/id/10474785-L.jpg",
        alreadyRead: true
    },
    {
        title: "1984",
        author: "George Orwell",
        image: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
        alreadyRead: false
    }
];

// Select the section element
const listBooksSection = document.querySelector(".listBooks");

// Loop through the array of books and render each book in a div
allBooks.forEach(book => {
    // Create a div to hold the book details
    const bookDiv = document.createElement("div");

    // Create the book title and author text
    const bookDetails = document.createElement("p");
    bookDetails.textContent = `${book.title} written by ${book.author}`;

    // Create the book image
    const bookImage = document.createElement("img");
    bookImage.src = book.image;
    bookImage.style.width = "100px"; 

    // If the book is already read, set the text color to red
    if (book.alreadyRead) {
        bookDetails.style.color = "red";
    }

    // Append the image and book details to the bookDiv
    bookDiv.appendChild(bookImage);
    bookDiv.appendChild(bookDetails);

    // Append the bookDiv to the section element
    listBooksSection.appendChild(bookDiv);
});
