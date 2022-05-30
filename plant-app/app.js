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
    //loopa över listan och för varje planta skall vi
    //trycka in den i vår ul med id plant-list

    for (let i = 0; i < plantList.length; i++) {
        //sparar nuvarande element i loopen i variabeln 'plant'
        let plant = plantList[i];
        //skapa ett nytt element
        let newElement = document.createElement('li');
        //lägger in strängen som vi fått från listan genom vår loop i vårt nya element
        newElement.innerText = plant;
        console.log(newElement);
        //nu vill vi lägga in plantan i vår ul
        plantListElement.appendChild(newElement);
    }
};

generatePlantListUI();