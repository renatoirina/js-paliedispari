/**
 * Verifica se una parola è palindroma.
 * @param {string} word - La parola da verificare.
 * @returns {boolean} - True se la parola è palindroma, altrimenti False.
 */
function isPalindrome(word) {
    // Inverte la parola
    const reversedWord = word.split("").reverse().join("");
    // Confronta la parola originale con la parola invertita
    return word === reversedWord;
}