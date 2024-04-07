# js-paliodispari

Questo repository contiene un'applicazione JavaScript per verificare se una parola è palindroma e per giocare al gioco Pari o Dispari.

## Funzionalità

### Palindroma

1. [x] L'utente inserisce una parola.
2. [x] Viene chiamata la funzione `checkPalindrome()` del file `script.js`.
3. [x] La funzione verifica se la lunghezza della parola è maggiore di zero:
   - [x] Se la lunghezza è zero, viene mostrato il messaggio "Inserisci una parola valida".
   - [x] Se la lunghezza è maggiore di zero, viene verificato se la parola è palindroma utilizzando la funzione `isPalindrome` definita nel file `functions.js`.
4. [x] Se la parola è palindroma, viene mostrato il messaggio "La parola è palindroma".
5. [x] Se la parola non è palindroma, viene mostrato il messaggio "La parola non è palindroma".

### Gioco Pari o Dispari

1. [x] L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
2. [x] Viene chiamata la funzione `playGame()` del file `script.js`.
3. [x] La funzione verifica se il numero inserito è valido:
   - [x] Se il numero non è compreso tra 1 e 5, viene mostrato un messaggio di errore.
   - [x] Se il numero è valido, il gioco prosegue.
4. [x] Viene generato un numero casuale per il computer utilizzando la funzione `generateRandomNumber()` definita nel file `functions.js`.
5. [x] Viene calcolata la somma dei numeri inseriti dall'utente e generato casualmente dal computer.
6. [x] Viene determinato se la somma dei numeri è pari o dispari utilizzando la funzione `checkEvenOrOdd()` definita nel file `functions.js`.
7. [x] Viene mostrato all'utente il risultato del gioco, includendo la sua scelta, il numero del computer, la somma dei numeri e se la somma è pari o dispari.
8. [x] Viene dichiarato se l'utente ha vinto o perso in base alla sua scelta e al risultato del gioco.
