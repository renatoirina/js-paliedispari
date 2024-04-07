//Funzione per verificare se una parola è palindroma
function checkPalindrome() {
    //Recupero la parola inserita dall'utente
    const word = document.getElementById("wordInput").value;
    console.log("Parola inserita:", word);

    //Verifico se la parola è palindroma
    const isPalindroma = isPalindrome(word);
    console.log("La parola è palindroma?", isPalindroma);

    //Ottengo l'elemento di output
    const resultParagraph = document.getElementById("palindromeResult");

    //Mostro il risultato all'utente
    if (isPalindroma) {
        console.log("La parola è palindroma");
        resultParagraph.textContent = "La parola è palindroma";
    } else {
        console.log("La parola non è palindroma");
        resultParagraph.textContent = "La parola non è palindroma";
    }
}
