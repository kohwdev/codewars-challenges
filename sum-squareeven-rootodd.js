/* 
Complete the function that takes a list of numbers (nums), as the only argument to the function. Take each number in the list and square it if it is even, or square root the number if it is odd. Take this new list and return the sum of it, rounded to two decimal places.

The list will never be empty and will only contain values that are greater than or equal to zero.

Good luck!
*/

const sumSquareEvenRootOdd = ns => {
 // your code goes here
 // ns = [list of nums]
 // if num = even > Math.pow(num, 2)
 // if num = odd > Math.sqrt(num)
 // add all nums and round to two decimal places > num.toFixed(2)
 
 // create new array to store values
 let newArr = []
 
 ns.forEach(num => {
   if (num % 2 === 0) {
     let square = Math.pow(num, 2)
     newArr.push(square)
   } else {
     let sqRoot = Math.sqrt(num)
     newArr.push(sqRoot)
   }
 })
 return Number(newArr.reduce((acc, c) => acc + c).toFixed(2))
 
};