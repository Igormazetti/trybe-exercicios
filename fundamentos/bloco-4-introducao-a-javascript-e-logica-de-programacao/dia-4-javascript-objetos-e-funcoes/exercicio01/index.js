let palindrome;
function verificaPalindrome(word) {
  for (key of word) {
    palindrome = word.split("").reverse().join("");
  }
  if (word === palindrome) {
    console.log(true);
  } else {
    console.log(false);
  }
}
verificaPalindrome("arara");
