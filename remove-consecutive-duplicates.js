/*
Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

--> "alpha beta gamma delta alpha beta gamma delta"
Words will be separated by a single space. There will be no leading or trailing spaces in the string. An empty string (0 words) is a valid input.
*/

function removeConsecutiveDuplicates(string) {
  //words are separated by by a single space.
  //find and remove consecutive duplicate

  //turn string into an array - list of words
  const arr = string.split(" ");
  //iterate through the list and look for a duplicate
  let result = [];

  arr.forEach((word, index) => {
    //skip the current word if it's same as the next word
    if (word === arr[index + 1]) {
      return;
    }

    //push the current word to the result arr
    result.push(word);
  });

  return result.join(" ");
}