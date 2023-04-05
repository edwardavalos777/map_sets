new Set([1,1,2,2,3,4])
//returns {1, 2, 3, 4}

[...new Set("referee")].join("")
// 'ref' 

/*What does the Map m look like after running the following code? */

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

// m will have a size of two since it contains two distinct key value pairs

/*hasDuplicate*/
function hasDuplicate(arr) {
    // Create a new Set object from the array
    // The Set will automatically remove duplicates
    const set = new Set(arr);
  
    // If the size of the Set is less than the size of the array,
    // then the array contains at least one duplicate
    return set.size !== arr.length;
  }
// or const hasDuplicate = arr => new Set(arr).size !== arr.length


/* Vowel Count */
  // Function to check if a character is a vowel
function isVowel(char){
    return "aeiou".includes(char);
  }
  
  // Function to count the vowels in a string and return a map
  function vowelCount(str){
    // Create an empty map to store the vowels and their count
    const vowelMap = new Map();
    
    // Loop through each character of the string
    for(let char of str){
      // Convert the character to lowercase
      let lowerCaseChar = char.toLowerCase()
      
      // If the character is a vowel, add it to the map
      if(isVowel(lowerCaseChar)){
        // If the vowel is already in the map, increment its count
        if(vowelMap.has(lowerCaseChar)){
          vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
        } else { // If the vowel is not in the map, set its count to 1
          vowelMap.set(lowerCaseChar, 1);
        }
      }
    }
    
    // Return the map of vowels and their count
    return vowelMap;
  }
  

