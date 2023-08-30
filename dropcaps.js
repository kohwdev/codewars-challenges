// DropCaps means that the first letter of the starting word of the paragraph should be in caps and the remaining lowercase, just like you see in the newspaper.

// But for a change, let"s do that for each and every word of the given String. Your task is to capitalize every word that has length greater than 2, leaving smaller words as they are.

// *should work also on Leading and Trailing Spaces and caps.

// "apple"            => "Apple"
// "apple of banana"  => "Apple of Banana"
// "one   space"      => "One   Space"
// "   space WALK   " => "   Space Walk   " 
// Note: you will be provided atleast one word and should take string as input and return string as output.

function dropCap(n) {
  let arrWords = []; // Declare a new array to store modified words
  const words = n.split(" "); // Split the string into individual words

  // Iterate through the array of words using for-loop
  for (let i = 0; i < words.length; i++) {
   // Check if the word has at least 3 letters
    if (words[i].length > 2) {
     // Capitalize the first letter of the word
      let capFirstLetter = words[i].charAt(0).toUpperCase();
      // Concatenate the substring, use toLowerCase method to make sure that substring stay in lowercase
      let capWord = capFirstLetter + words[i].substring(1).toLowerCase();
      // push modified words to new array
      arrWords.push(capWord);
    } else {
      // keep the small words with 2 or less letters
      arrWords.push(words[i]);
    }
  }
  // join the words into string and return the result
  return arrWords.join(" ");
}