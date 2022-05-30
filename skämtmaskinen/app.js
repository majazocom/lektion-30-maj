const jokeButton = document.querySelector('#joke-btn');

const jokeList = [
    "Hej",
    "Hej då",
    "Tja",
    "God dagens",
    "Alo"
];

//eventlyssnare som lyssnar på ett klick (första argumentet)
//och vid klick kallar den på funktionen generateJoke (andra argumentet)
jokeButton.addEventListener('click', generateJoke);

//vår funktion för att generera ett random skämt
function generateJoke() {
    //1. skriva logiken för att få ett random id i vår skämtlista
    let randomNumber = Math.random() * jokeList.length;
    //säga till vårt random number att runda nedåt mha Math.floor
    randomNumber = Math.floor(randomNumber);

    //2. använda det random id som vi får för att plocka ut en sträng
    //i vår lista
    let joke = jokeList[randomNumber];
    console.log(joke);

    //3. lägga in strängen i p-elementet (DOM-manipulation)
    let jokeElement = document.getElementById('joke-text');
    jokeElement.innerText = joke;
};

// let randomJoke = jokeList[Math.floor(Math.random() * jokeList.length)];
// console.log(randomJoke);