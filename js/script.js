// Consegna
// L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.


const playBtn = document.getElementById('play-btn');
playBtn.addEventListener( 'click', startGame);

function startGame () {
    // HTML elements
    const myGrid = document.getElementById('grid');
    console.log(myGrid);

    // Quando l'utente inizia una nuova partita svuoto la griglia e le classi
    myGrid.innerHTML = '';
    myGrid.className= '';
    

    // Prendo il valore della difficoltà data dal utente attraverso il value
    const userLevel = document.getElementById('difficult').value
    console.log(userLevel);

    // Definisco i vari range in base alla difficoltà
    let rangeMaxNumber;
    let myGridClass;
    if(userLevel === '1') {
        rangeMaxNumber = 100;
        myGridClass = 'easy'
    }else if(userLevel === '2'){
        rangeMaxNumber = 81;
        myGridClass = 'hard'
    }else if(userLevel === '3'){
        rangeMaxNumber = 49;
        myGridClass = 'crazy'
    }


    // Array di bombe
    const numBombs = 16
    let bombs = genBombs(numBombs, 1, rangeMaxNumber);
    console.log(bombs);

    // Max numero di tentativi
    let maxChance = rangeMaxNumber - numBombs ; 
    console.log(maxChance);

    // Array di numeri non bombe (numeri azzeccati)
    const notBombsNum = [];

    genSquare()

    // Genero la griglia
    function genSquare() {
        // Scorro i numeri con il ciclo for in base al range che mi da l'utente
        // <div class="square"><span>50</span></div> 
        for(let i = 1; i <= rangeMaxNumber; i++ ) {
            myGrid.classList.add(myGridClass);
            // Creo i quadrati
            const newSquare = document.createElement('div');
            // Compilo i quadrati con i numeri in base ai range
            newSquare.innerHTML = `<span>${i}</span>`;
            // Aggiungo la classe al quadrato
            newSquare.classList.add('square');

            // Appendo in pagina
            myGrid.append(newSquare);


        }
    
        
    }

    


    }
S
    //*********************************************************/
    // FUNZIONI 
    //*********************************************************************/

    //--- FUNZIONE PER GENERARE BOMBE-----------------------------------------------------
    // Genero 16 bombe del tutto casuali e li inserisco in una array ma non possono essere duplicati   
    function genBombs(numElements, rangeMin, rangeMax) {

        const arrayBombs = [];
        while(arrayBombs.length < numElements) {
            // Genero i numeri dal min al max in base ai range
            const bombsElement = randomNumBomb(rangeMin, rangeMax );
            // Inserisco nel array solo i numeri non preesenti nel array
            if(!arrayBombs.includes(bombsElement)) {
                arrayBombs.push(bombsElement);
                
                
            }
            
        }
        
        return arrayBombs;
    }

    // Funzione che genera i numeri delle bombe randomiche
    function randomNumBomb(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }