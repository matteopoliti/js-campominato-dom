/*Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: Nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.*/

const grigliaHtml = document.getElementById('griglia');
const buttonHtml = document.getElementById('button');
const difficultyHtml = document.getElementById('difficulty');

let score = 0;

buttonHtml.addEventListener("click", function (){
    grigliaHtml.innerHTML = ""
    
    document.querySelector(".container").classList.remove("d_none")
    

    if(difficultyHtml.value == "Beginner"){

        for (let i = 1; i <= 100; i++) {
            
            let box = document.createElement("div");
            box.classList.add("box-beginner");
            box.innerHTML = `<span>${i}</span>`;

            box.addEventListener("click", function () {

                if(arrayNumeriRandom.includes(i)){
                    this.classList.add("red");
                    alert( "Bomba scoppiata, Hai perso! Il tuo punteggio è: " + score)
                    setTimeout(ricaricaPagina, 1000)
                }else{
                    this.classList.add("blue");
                    score++
                    checkWin(84)
                }
                console.log(i);
            });
        
            grigliaHtml.append(box);
        
        }
        randomArray(100)

    }else if(difficultyHtml.value == "Standard"){
        
        for (let i = 1; i <= 81; i++) {
            
            let box = document.createElement("div");
            box.classList.add("box-standard");
            box.innerHTML = `<span>${i}</span>`;

            box.addEventListener("click", function () {

                if(arrayNumeriRandom.includes(i)){
                    this.classList.add("red");
                    alert( "Bomba scoppiata, Hai perso! Il tuo punteggio è: " + score)
                    setTimeout(ricaricaPagina, 1000)
                    
                }else{
                    this.classList.add("blue");
                    score++
                    checkWin(65)
                }
                console.log(i);
            });
        
            grigliaHtml.append(box);
        
        }
        randomArray(81)
    }else if(difficultyHtml.value == "Hard"){
        
        for (let i = 1; i <= 49; i++) {
            
            let box = document.createElement("div");
            box.classList.add("box-hard");
            box.innerHTML = `<span>${i}</span>`;

            box.addEventListener("click", function () {

                if(arrayNumeriRandom.includes(i)){
                    this.classList.add("red");
                    alert( "Bomba scoppiata, Hai perso! Il tuo punteggio è: " + score)
                    setTimeout(ricaricaPagina, 1000)
                }else{
                    this.classList.add("blue");
                    this.removeEventListener("click", );
                    score++
                    checkWin(33)
                }
                console.log(i);
            });
        
            grigliaHtml.append(box);
        }
        randomArray(49)
    }
    
})

let arrayNumeriRandom = []
function randomArray( num ){
        while(arrayNumeriRandom.length !== 16){
        
            let numeroCasuale = RandomNumber(num)
            
            if( !arrayNumeriRandom.includes(numeroCasuale)){
                arrayNumeriRandom.push(numeroCasuale)
                
            }
        
        }
        console.log(arrayNumeriRandom)

}

function checkWin(celleRimanenti){
    if(score === celleRimanenti)
    alert("Hai vinto! Con il punteggio di: " + score)
}




function RandomNumber (max){
    return Math.floor( Math.random()*max) + 1
}




function ricaricaPagina() {
    location.reload();
}