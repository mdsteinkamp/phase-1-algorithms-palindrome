function isPalindrome(word) {
  const reversedString = word.split("").reverse().join("");
  return word === reversedString ? true : false; 
}

//Pseudocode
// Pass string into isPalindrome
// reverse the String, save as a variable
// ternary to compare the reversed string to the argument string
// win!!!


/*
If the reverse of the passed in string equals it's original state it is a palindrome, we reverse the string
then compare that to the argument, returning the result of a ternary expression either true or false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
