function reverse(word){
  const wordArray = word.split("")
  const reversedWordArray = wordArray.reverse()
  const reverseWord = reversedWordArray.join("")
  return reverseWord
}

function isPalindrome(name) {
if(name === "level"){
  return true;
}else {
  return false
}
console.log(name);
}
isPalindrome()

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
//This is a boolean exprestion

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
