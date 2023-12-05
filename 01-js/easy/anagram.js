/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  // Check if both strings are of same length
  if (str1.length !== str2.length) {
    return false;
  }

  // Convert both strings to lowercase
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  // Convert both strings to array
  str1 = str1.split('');
  str2 = str2.split('');

  // Sort both arrays
  str1 = str1.sort();
  str2 = str2.sort();

  // Convert both arrays to string
  str1 = str1.join('');
  str2 = str2.join('');

  // Compare both strings
  if (str1 === str2) {
    return true;
  } else {
    return false;
  }

  
}

module.exports = isAnagram;
