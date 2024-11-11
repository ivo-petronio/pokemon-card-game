
let numberOfCards = 0;
let numberOfShoots = 0;
const backImageSrc = "../media/img/back-face.jpeg";
const cardBoard = document.querySelector(".card-board");

const pokemon = [
    {
        name: "haunter",
        image: "../media/img/pokemon/haunter.gif"
    },
    {
        name: "bulbasaur",
        image: "../media/img/pokemon/bulbasaur.gif"
    },
    {
        name: "charizard",
        image: "../media/img/pokemon/charizard.gif"
    },
    {
        name: "charmander",
        image: "../media/img/pokemon/charmander.gif"
    },
    {
        name: "magikarp",
        image: "../media/img/pokemon/magikarp.gif"
    },
    {
        name: "mankey",
        image: "../media/img/pokemon/mankey.gif"
    },
    {
        name: "pidgeotto",
        image: "../media/img/pokemon/pidgeotto.gif"
    },
    {
        name: "psyduck",
        image: "../media/img/pokemon/psyduck.gif"
    },
    {
        name: "snorlax",
        image: "../media/img/pokemon/snorlax.gif"
    },
    {
        name: "squirtle",
        image: "../media/img/pokemon/squirtle.gif"
    },
]

while ( (numberOfCards < 4 || numberOfCards > 20 || !numberOfCards ||  numberOfCards%2) )
{
    numberOfCards = prompt("How many cards would you like to play with? (Choose between 4 and 20 cards)");
}

let character = pokemonSort();
const drawnCards = character.slice(0, numberOfCards)
console.log(drawnCards)

for (let index = 0; index < numberOfCards; index++)
{
    cardGenerator(index);
}

// CREATES A CARD AND APPENDS IT INTO THE HTML
function cardGenerator(index)
{
    let card = document.createElement("div");
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
    characterImage.src = character[index].image;
    frontFace.appendChild(characterImage);
    card.appendChild(backFace);
    card.appendChild(frontFace);
    cardBoard.appendChild(card);
}

// SHUFFLE THE POKÉMON CARDS
function pokemonSort() {
    return pokemon.sort( () => Math.random() - 0.5);
}
