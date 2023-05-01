// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


function getCount(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  const newStr = str.toLowerCase().trim();
  let count = 0;

  for (let i = 0; i < newStr.length; i++) {
    if (vowels.includes(newStr[i])) {
      count++;
    }
  }

  return count;
}