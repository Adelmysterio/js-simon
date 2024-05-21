<!-- Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. -->

dichiaro const output e seleziono la section#output
dichiaro un array vuoto randomNumber
dichiaro un array vuoto userNumbers
dichiaro un array vuoto equalNumbers

creo una funzione getRandomInt che generi un numero random

creo un ciclo for che per 5 volte 
    dichiaro randomInt ed invoca la funzione getRandomInt
    pusho il numero in randomNumbers
    crea un elemento p 
    appendo p ad output
    appendo randomInt al p

setto un timeout dopo 30000ms 
    che cancelli il contenuto di output 
    chieda per 5 volte di inserire un numero
    salvo i 5 numeri dell'utente in userNumbers
    creo un ciclo che scorra gli elementi di randomNumbers
        se usernumber include randomNumbers[i] allora push randomNumbers[i] in equalNumber
    stampo equalNumber.length e equalNumber
