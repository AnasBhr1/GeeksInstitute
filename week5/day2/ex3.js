async function fetchStarship() {
    const url = "https://www.swapi.tech/api/starships/9/";
  
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log(data.result); 
    } catch (error) {
      console.error("Failed to fetch starship data:", error);
    }
  }
  
  // Call the function
  fetchStarship();
  