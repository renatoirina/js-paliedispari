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


// Funzione per giocare al gioco Pari o Dispari
function playGame() {
    // Recupero la mia scelta e il numero che ho inserito
    const userChoice = document.getElementById("choice").value;
    const userNumber = parseInt(document.getElementById("numberInput").value);

    // Verifico se il numero che ho inserito è valido
    if (isNaN(userNumber) || userNumber < 1 || userNumber > 5) {
        alert("Inserisci un numero valido da 1 a 5.");
        return;
    }

    // Genero un numero casuale per il computer
    const computerNumber = generateRandomNumber(1, 5);
    // Calcolo la somma dei numeri
    const total = userNumber + computerNumber;
    // Determino se la somma è pari o dispari
    const result = checkEvenOrOdd(userNumber, computerNumber);

    // Ottengo l'elemento di output
    const resultParagraph = document.getElementById("gameResult");
    // Mostro il risultato del gioco
    resultParagraph.textContent = `Hai scelto ${userChoice}. Il computer ha scelto ${computerNumber}. La somma è ${total}, quindi è ${result}.`;

    // Determino se ho vinto o perso
    if ((result === "pari" && userChoice === "pari") || (result === "dispari" && userChoice === "dispari")) {
        resultParagraph.textContent += " Ho vinto!";
    } else {
        resultParagraph.textContent += " Ho perso!";
    }
}
