/**
 * SOAL 1
 * Buatlah fungsi dengan parameter berapa banyak angka yg akan ditampilkan secara looping,
 * dimana jika angka tersebut habis dibagi 3 cetak "fish" jika habis dibagi 5 cetak "bash"
 * dan jika habis dibagi 15 cetak "fish bash", cetak cukup salah satu dari kondisi tersebut,
 * cetak menggunakan console log atau sejenisnya.
 */

const FISH_DIVIDER = 3;
const BASH_DIVIDER = 5;

const FISH_TEXT = "fish";
const BASH_TEXT = "bash";

/** a fizzbuzz function that iterates number from n to 0.
 * it logs "fish" if the number is divisible by 3,
 * logs "bash" if the number is divisible by 5,
 * logs "fish bash" if the number is divisible by 3 and 5
 *
 * @param {Number} num
 * @return {void}
 */
function fishBash(num) {
  while (num) {
    let str;

    /* Komentar:
     * seandainya tidak ada spasi antara fish dan bash,
     * maka bisa menggunakan str.concat(FISH_TEXT) dan concat(BASH_TEXT)
     * dengan kondisional yang lebih sederhana
     */

    if (num % (FISH_DIVIDER * BASH_DIVIDER) === 0) {
      str = `${FISH_TEXT} ${BASH_TEXT}`;
    } else if (num % BASH_DIVIDER === 0) {
      str = BASH_TEXT;
    } else if (num % FISH_DIVIDER === 0) {
      str = FISH_TEXT;
    }

    if (str) {
      console.log(`${num}: ${str}`);
    }
    num--;
  }
}

module.exports = fishBash;
