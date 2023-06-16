/* 
Create a function which compares two probabilities, returning true if the first one is most likely otherwise false.

For this exercise probability is expressed as two numbers separated by a colon e.g. a probability of 1 in 3 will be 1:3.

So:

Input: ('1:3','1:2') - returns false as 1 in 3 is less likely than 1 in 2.
*/

function mostLikely(prob1,prob2){
  
  const prob1Parts = prob1.split(':')
  const prob2Parts = prob2.split(':')
  
  const prob1Chance = parseInt(prob1Parts[0]) / parseInt(prob1Parts[1])
  const prob2Chance = parseInt(prob2Parts[0]) / parseInt(prob2Parts[1])
  
  return prob1Chance > prob2Chance
  
}