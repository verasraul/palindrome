let text = document.getElementById("palindromeCheck"); 
let word = document.getElementById("userPrompt");
let palindromePrompt = prompt("Enter a word that is a palindrome.");

// let example = "racecar"
let stored = ""

for (i=palindromePrompt.length -1; i>=0; i--) {
  stored += palindromePrompt[i]  
}

if (palindromePrompt != "") { 
if (stored.toLowerCase() === palindromePrompt.toLowerCase()) {
  word.innerHTML = `The word you entered was: ${palindromePrompt}`
  text.innerHTML = `This is a palindrome. `; 
  
} else {
  word.innerHTML = `The word you entered was: ${palindromePrompt}`
  text.innerHTML = `This is NOT a palindrome. `; 
}
} else {
  alert("You didn't enter a word! Try again please.")
}