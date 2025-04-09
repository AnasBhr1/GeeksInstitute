const apiUrl = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

fetch(apiUrl)
  .then(response => {
    // Check if the response is OK (status code in the range 200–299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // Parse JSON body of the response
    return response.json();
  })
  .then(data => {
    console.log("GIF Data:", data); // Log the JS object
  })
  .catch(error => {
    console.error("There was an error fetching the data:", error);
  });
