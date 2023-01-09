/**
 * SOAL 3
 * Buatlah fungsi dengan input string jika string tersebut dibalik
 * dan tetap sama dengan string yang diinputkan maka return true
 * jika tidak return false
 */

/**
 * a JavaScript function to check if a string is a palindrome
 *
 * @param {String} str
 *
 * @return {Boolean}
 */
function isPalindrome(str) {
  strLength = str.length;

  for (let i = 0; i < strLength / 2; i++) {
    if (str[i] !== str[strLength - 1 - i]) {
      return false;
    }
  }

  return true;
}

module.exports = isPalindrome;
