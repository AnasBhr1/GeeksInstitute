const form = document.getElementById("gifForm");
const input = document.getElementById("searchInput");
const gifContainer = document.getElementById("gifContainer");
const deleteAllBtn = document.getElementById("deleteAllBtn");

const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const searchTerm = input.value.trim();
  if (!searchTerm) return;

  try {
    const url = `https://api.giphy.com/v1/gifs/random?tag=${searchTerm}&rating=g&api_key=${API_KEY}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP Error! status: ${response.status}`);
    }

    const data = await response.json();
    const gifUrl = data.data.images.fixed_height.url;

    // Create a container for the gif and delete button
    const gifWrapper = document.createElement("div");

    const img = document.createElement("img");
    img.src = gifUrl;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "DELETE";
    deleteBtn.addEventListener("click", () => gifWrapper.remove());

    gifWrapper.appendChild(img);
    gifWrapper.appendChild(deleteBtn);
    gifContainer.appendChild(gifWrapper);

    input.value = ""; 
  } catch (error) {
    console.error("Failed to fetch GIF:", error);
  }
});

// DELETE ALL functionality
deleteAllBtn.addEventListener("click", () => {
  gifContainer.innerHTML = "";
});
