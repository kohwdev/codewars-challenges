/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false
*/

function isIsogram(str){
 // Check the given string for any repeating letters
 // iterate through the str using for-loop
 // Increment count if letter occurrs more than 1 time
 
 str = str.toLowerCase();

 // Create an object to store the count of each letter
 let letterCount = {};

 // Iterate over each letter in the string
 for (let i = 0; i < str.length; i++) {
   let letter = str[i];

   // If the letter is already in the object, it's a repeating letter
   if (letterCount[letter]) {
     return false;
   }

   // Increment the count of the letter in the object
   letterCount[letter] = 1;
 }

 // No repeating letters found
 return true;
}