/*Challenge:
"First Reverse"
Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.
Examples
Input: "coderbyte"
Output: etybredoc
Input: "I Love Code"
Output: edoC evoL I

------------------------------------------------

Code I am given in challenge:
function FirstReverse(str) { 
 
  return str; 

}
   
// keep this function call here 
console.log(FirstReverse(readline())); */

-------------------------------------------------

My Answer: 

function FirstReverse(str) { 
  var newString = "";
  for (var i = (str.length - 1); i >= 0; i--) {
    newString += str[i];
  }
  return newString; 
}
   
// keep this function call here 
console.log(FirstReverse(readline()));

-------------------------------------------------

Explanation:
First, within the function, you have to have a place for the new characters to go as the function iterates through the original string you want to reverse. That's the point of the newString declaration at the top; to give a name and a destination to the new group of letters. 
Then, I used a "for" loop to basically say to the computer, "for a situation where you're starting at the last letter of a string, adding it to a new string, and then going backwards in the string's indices, do this thing." 
The variable "i" refers to the index of each character being added, so literally in the for loop it says "beginning with the index of the last letter, until you're at the first letter, going backwards, add the current letter you're on into the newString variable. When you've stopped looping, (so, when i >=0,) return the new string you just created."
