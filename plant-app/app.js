//vår initiala lista med plantor
let plantList = [
    "Sunflower",
    "Coleus",
    "Monstera",
    "Rose",
    "Daisy"
];

//komma åt vår ul
const plantListElement = document.getElementById('plant-list');

function generatePlantListUI() {
    //först behöver vi tömma vår ul på all eventuellt innehåll
    //för att inte skriva in samma plantor flera gånger
    plantListElement.innerHTML = "";

    //loopa över listan och för varje planta skall vi
    //trycka in den i vår ul med id plant-list
    for (let i = 0; i < plantList.length; i++) {
        //sparar nuvarande element i loopen i variabeln 'plant'
        let plant = plantList[i];
        //skapa ett nytt element
        let newElement = document.createElement('li');
        //lägger in strängen som vi fått från listan genom vår loop i vårt nya element
        newElement.innerText = plant;
        //nu vill vi lägga in plantan i vår ul
        plantListElement.appendChild(newElement);
    }
};
generatePlantListUI();

//1. lägga till en eventlyssnare på vår knapp
document.querySelector('.add-plant-btn').addEventListener('click', addPlantToList);

let plantInputElement = document.getElementById('plant-input');

function addPlantToList() {
    //2. när knappen tryckts på skall vi ta värdet som ligger i vårt input-fält
    //vi kommer åt värdet i ett input fält genom att använda oss av '.value'
    let plantInput = plantInputElement.value;

    //vi vill kolla så att input inte är tomt
    //OM det är tomt skall vi inte lägga in något i listan eller kalla på generatePlantListUI-funktionen
    if (plantInput !== "") {
        //3. ta värdet och lägga in det i vår plantList
        plantList.push(plantInput);
        //tömmer input-fältet efter att vi tryckt på knappen
        plantInputElement.value = "";
        generatePlantListUI();
    }
}

//sätta en eventlyssnare även på input-fältet, 
//där vi kollar om knappen som tryckts på är 'enter'-knappen
plantInputElement.addEventListener('keypress', function(event) { //om inte 'event' funkar -> använd 'e' bara
    //kolla om det är just enter-knappen vi tryckt på
    if (event.key == "Enter") {
        console.log(event);
        addPlantToList();
    }
})
