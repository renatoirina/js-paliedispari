// Verifica se la parola inserita è palindroma.
/**
 * Verifica se una parola è palindroma.
 * @param {string} word - La parola da verificare.
 * @returns {boolean} - True se la parola è palindroma, altrimenti False.
 */
function isPalindrome(word) {
    // Inverto la parola
    const reversedWord = word.split("").reverse().join("");
    // Confronto la parola originale con la parola invertita
    return word === reversedWord;
}

// Genera un numero casuale compreso tra min e max.
/**
 * Genera un numero casuale tra un valore minimo e massimo.
 * @param {number} min - Il numero minimo.
 * @param {number} max - Il numero massimo.
 * @returns {number} - Il numero casuale generato.
 */
function generateRandomNumber(min, max) {
    // Math.random() restituisce un numero tra 0 e 1
    // Moltiplico per (max - min + 1) per ottenere un numero tra 0 e max - min + 1
    // Aggiungendo min traslo il numero nell'intervallo desiderato
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Verifica se la somma di due numeri è pari o dispari.
/**
 * Verifica se la somma di due numeri è pari o dispari.
 * @param {number} num1 - Il primo numero.
 * @param {number} num2 - Il secondo numero.
 * @returns {string} - Restituisce "pari" se la somma è pari, "dispari" altrimenti.
 */
function checkEvenOrOdd(num1, num2) {
    // Calcolo la somma dei due numeri
    const sum = num1 + num2;
    // Verifico se la somma è pari o dispari
    return sum % 2 === 0 ? "pari" : "dispari";
}
