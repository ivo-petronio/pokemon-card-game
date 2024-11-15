let numberOfCards = 0;
let cardsHTML = [];
let firstOnPair = true;
let secondOnPair = false;
let firstCard = "";
let secondCard = "";
let quantAttempts = 0;
let quantPairs = 0;

const backImageSrc = "./img/back-face.jpeg";
const cardBoard = document.querySelector(".card-board");
const backFace = [];
const frontFace = [];
const scoreAttemptsHTML = document.querySelector(".attempts");
const scorePairsHTML = document.querySelector(".pairs");
const gameOverButton = document.querySelector(".game-over");

function clickEvents() {
    cardsHTML.forEach( card => card.addEventListener('click', flipCard));
}

window.onload = function()
{
    cardsHTML = document.querySelectorAll(".card");
    clickEvents();
}

const pokemon = [
    {
        name: "Haunter",
        image: "img/haunter.gif",
        voice: "sfx/haunter_voice.mp3"
    },
    {
        name: "Bulbasaur",
        image: "img/bulbasaur.gif",
        voice: "sfx/bulbasaur_voice.mp3"
    },
    {
        name: "Charizard",
        image: "img/charizard.gif",
        voice: "sfx/charizard_voice.mp3"
    },
    {
        name: "Charmander",
        image: "img/charmander.gif",
        voice: "sfx/charmander_voice.mp3"
    },
    {
        name: "Magikarp",
        image: "img/magikarp.gif",
        voice: "sfx/magikarp_voice.mp3"
    },
    {
        name: "Primeape",
        image: "img/primeape.gif",
        voice: "sfx/primeape_voice.mp3"
    },
    {
        name: "Pidgeotto",
        image: "img/pidgeotto.gif",
        voice: "sfx/pidgeotto_voice.mp3"
    },
    {
        name: "Psyduck",
        image: "img/psyduck.gif",
        voice: "sfx/psyduck_voice.mp3"
    },
    {
        name: "Snorlax",
        image: "img/snorlax.gif",
        voice: "sfx/snorlax_voice.mp3"
    },
    {
        name: "Squirtle",
        image: "img/squirtle.gif",
        voice: "sfx/squirtle_voice.mp3"
    },
    {
        name: "Scyther",
        image: "img/scyther.gif",
        voice: "sfx/scyther_voice.mp3"
    },
    {
        name: "Pikachu",
        image: "img/pikachu.gif",
        voice: "sfx/pikachu_voice.mp3"
    },
    {
        name: "Butterfree",
        image: "img/butterfree.gif",
        voice: "sfx/butterfree_voice.mp3"
    },
    {
        name: "Arbok",
        image: "img/arbok.gif",
        voice: "sfx/arbok_voice.mp3"
    },
    {
        name: "Clefairy",
        image: "img/clefairy.gif",
        voice: "sfx/clefairy_voice.mp3"
    },
    {
        name: "Weezing",
        image: "img/weezing.gif",
        voice: "sfx/weezing_voice.mp3"
    },
    {
        name: "Caterpie",
        image: "img/caterpie.gif",
        voice: "sfx/caterpie_voice.mp3"
    },
    {
        name: "Magmar",
        image: "img/magmar.gif",
        voice: "sfx/magmar_voice.mp3"
    },
    {
        name: "Meowth",
        image: "img/meowth.gif",
        voice: "sfx/meowth_voice.mp3"
    },
    {
        name: "Kingler",
        image: "img/kingler.gif",
        voice: "sfx/kingler_voice.mp3"
    },
    {
        name: "Onix",
        image: "img/onix.gif",
        voice: "sfx/onix_voice.mp3"
    }

]

while ( (numberOfCards < 4 || numberOfCards > 14 || !numberOfCards ||  numberOfCards%2) )
{
    numberOfCards = prompt("How many cards would you like to play with? (Please insert an even number between 4 and 14.)");
}

/*** SHUFFLE THE CARDS ***/
const character = pokemonSort();
const drawnCards = character.slice(0, numberOfCards*0.5)
const tempPairs = [...drawnCards, ...drawnCards];
const pairsGame = tempPairs.sort( () => Math.random() - 0.5 );

let countCards = pairsGame.length;

for (let index = 0; index < pairsGame.length; index++)
{
    cardGenerator(index);
}

// CREATES A CARD AND APPENDS IT INTO THE HTML
function cardGenerator(index)
{
    let card = document.createElement("div");
    card.setAttribute("name", pairsGame[index].name);
    card.setAttribute("voice-data", pairsGame[index].voice);
    let frontFace = document.createElement("div");
    let backFace = document.createElement("div");
    let backImage = document.createElement("img");
    let characterImage = document.createElement("img");

    // ADDS CLASSES TO THE HTML ELEMENTS
    card.classList.add("card");
    frontFace.classList.add("front-face", "face");
    backFace.classList.add("back-face", "face");

    // PREPARES HTML ELEMENTS TO BE APPENDED TO THE HTML
    backImage.src = backImageSrc;
    backFace.appendChild(backImage);
    characterImage.src = pairsGame[index].image;
    frontFace.appendChild(characterImage);
    card.appendChild(backFace);
    card.appendChild(frontFace);
    cardBoard.appendChild(card);
}

// SHUFFLE THE POKÉMON CARDS
function pokemonSort() {
    return pokemon.sort( () => Math.random() - 0.5);
}


function flipCard() {
    if (firstCard == "") {
        this.classList.add("flipped-card");
        this.setAttribute("autoplay", true);
        pokemonSpeak(this);
        firstCard = this;
    }
    
    else if(this === firstCard) {
        return; 
    }

    else if (secondCard == "") {
        this.classList.add("flipped-card");
        this.setAttribute("autoplay", true);
        pokemonSpeak(this);
        secondCard = this;
        compareCards(firstCard, secondCard)
        firstCard = "";
        secondCard = "";
    }
}


function compareCards(firstCard, secondCard) {
    alert("comparando cartas!")
    quantAttempts += 2;
    scoreAttemptsHTML.innerHTML = quantAttempts;
    const gameOver = document.querySelector(".game-over");

    showResult = setTimeout(() => {

        if (firstCard.getAttribute("name") === secondCard.getAttribute("name")) {
            countCards -= 2;
            firstCard.style.visibility = "hidden"
            secondCard.style.visibility = "hidden";
            quantPairs++;
            scorePairsHTML.innerHTML = quantPairs;
            let audio = new Audio("sfx/pokeball.mp3");
            audio.play();
            if( countCards == 0) {
                let gameOverBtn = setTimeout(() => {
                    cardsHTML.forEach( card => card.style.display = "none");
                    gameOver.style.display = "flex";
                    gameOver.addEventListener("click", () => 
                        location.reload()
                )}, 3000);
            }
                
            
        } else {
            secondCard.classList.remove("flipped-card");
            firstCard.classList.remove("flipped-card");
            let audio = new Audio("sfx/error.mp3");
            audio.play();
        }
        firstCard = true;
        secondCard = true;
        clearInterval(showResult);
    }, 1100)
}

function pokemonSpeak(card) {
    let audio = new Audio(card.getAttribute("voice-data"));
    audio.play();
}

cardsHTML.forEach( card => card.addEventListener('click', flipCard));