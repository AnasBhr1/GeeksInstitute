// Function to check if two strings are anagrams
function isAnagram(str1, str2) {
    // Step 1: Remove spaces and convert to lowercase
    const cleanStr1 = str1.replace(/\s+/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/\s+/g, '').toLowerCase();
  
    // Step 2: Convert strings to arrays, sort them, and join back to compare
    const sortedStr1 = cleanStr1.split('').sort().join('');
    const sortedStr2 = cleanStr2.split('').sort().join('');
  
    // Step 3: Return comparison result as boolean
    return sortedStr1 === sortedStr2;
  }
  
  // ✅ Example tests
  console.log(isAnagram("Astronomer", "Moon starer")); // true
  console.log(isAnagram("School master", "The classroom")); // true
  console.log(isAnagram("The Morse Code", "Here come dots")); // true
  console.log(isAnagram("Hello", "World")); // false
  