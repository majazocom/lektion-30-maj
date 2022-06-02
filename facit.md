**1**
String
Boolean
Number
Array
Object
Function

**2**
true

**3**
`let` är bara synlig i det scope den finns
`var` är synlig i hela funktionen

**4**
```js
typeof(variable)
```
**5**
{}//C

**6**
```js
{
  console.log("Hello")
}
```

**7**
'Good bye world!'

**8**
Alla är korrekta

**9**
97

**10**
```js
`Hej ${name} din gamle knasboll!`
```
**11**
```js
const fruits = ['tomato', 'dragon fruit', 'avocado', 'cucumber', 'olive']
```
**12**
```js
fruits.push('corn')
fruits.unshift('pumpkin')
```

**13**
```js
let last = fruits.pop()
let first = fruits.shift()
// Eller
fruits.splice(1, fruits.length-2)
```
**14**
```js
fruits.splice(2,0, 'chili pepper', 'zuccini')
```
**15**
```js
let fruits = ['apple', 'orange', 'pear', 'kiwi']
let clone = [...fruits]
clone[0] = 'pine apple'
```
**16**
// Callback-trolleri
```js
num.sort( (a,b) => b - a)
```

**17**

```js
let a = [1,2,3];
let b = [4,5,6];

// Alternativ 1
let c = [...a, ...b];

// Alternativ 2
let d = a.concat(b)

```

**18**
En lösning där båda arrayer är lika långa
```js
let a = ['My', 'has', 'many', 'open'];
let b = ['brain', 'to', 'tabs', '!'];
let zipped = []
for(let i = 0; i < a.length; i++){
  zipped.push(a[i], b[i])
}
```

En lösning som fungerar oavsett hur stora arrayerna är

```js
let zipped = []
let largest = Math.max(a.length, b.length)
for(let i = 0; i < largest; i++){
  if(a[i]){ 
    zipped.push(a[i]) 
  } 
  if(b[i]){ 
    zipped.push(b[i]) 
  } 
}
```

**19**
```js
b.splice(2,0, ...a)
```



**20**

```js
let names = ['sixten', 'Eva', 'Ali', 'Kim', 'Greger', 'Alicia'];
for(let i = 0; i < names.length; i++){
  names[i] = names[i].toUpperCase()
}
```

**21**

```js
let filtered = []
for(let person of names){
  if(person.age >= 30){
    filtered.push(person)
  }
}
```

**22**

```js
names.includes('Ewa') // false
```


**23**
```js
for(let i = 0; i < 1000; i++){
  console.log(i)
}
```


**24**
```js
for(let i = 100; i >= 0; i--){
  console.log(i)
}
```


**25**
```js
for(let fruit of fruits){
  console.log(fruit)
}
```


**26**
```js
for(let i=0; i < fruits.length;i++){
  console.log(i, " " ,fruits[i])
}
```

**27**


```js
let cards = []
const SUITES = ['hjärter', 'spader', 'ruter', 'klöver']
for(let i = 0; i < SUITES.length; i++){
  let suite = SUITES[i]
  for(let j = 1; j <= 13; j++){
    let card = `${suite} ${j}`
  }
}
```

En lösning så man får med Ess,Knekt, Dam och Kung istället för 1, 11, 12 och 13

```js
function getCardValue(num){
  switch(num){
    case 1: return 'Ass';
    case 11: return 'Knäckt';
    case 12: return 'Damm';
    case 13: return 'Knug';
    default: return num
  }
}

let cards = []
const SUITES = ['hjärter', 'spader', 'ruter', 'klöver']
for(let i = 0; i < SUITES.length; i++){
  let suite = SUITES[i]
  for(let j = 1; j <= 13; j++){
    let card = `${suite} ${getCardValue(j)}`
  }
}
```


**28**
```js
let book = {
  title: 'Tolv sätt att glömma nycklarna',
  author: 'Povel Ramel',
  genres: ['vetenskap', 'baskunskap']
}
```


**29**
```js
console.log(person.adress.city)
```

**30**
```js
let obj = {}
let clone = {...obj} // Shallow clone

let deepClone = JSON.parse(JSON.stringify(obj))
```

**31**

```js
let dog = {
  name: 'Snoopy',
  breed: 'beagle',
  woff: function(){
    return `Woff, jag heter ${this.name}`
  }
}
```


**32**
```js
let keys = Object.keys(person)
for(let key of keys){
  console.log(key, " - ", person[key])
}
```

Eller

```js
let entries = Object.entries(person)
for(let entry of entries){
  console.log(entry[0], " - ", entry[1])
}
```



**33**
```js
function add(a,b){
  return a+b
}
```

**34**
```js
function(){
  return 'Jag har inget namn, för jag är en anonym funktion. Du borde skicka mig som argument till en annan funktion annars är jag förlorad för evigt.'
}
```

**35**

Med substring
```js
function getYear(dateString){
  return Number(dateString.substring(0,4))
}
```

Eller med split

```js
function getYear(dateString){
  const parts = dateString.split("-")
  return Number(parts[0])
}
```

Eller med destructuring

```js
function getYear(dateString){
  const [year,month,day] = dateString.split("-")
  return Number(year)
}
```

**36**

Med if-satser
```js
function calcThis(num1, num2, operator){
  if(operator == '+'){
    return num1 + num2;
  }else if(operator == '-'){
    return num1 - num2;    
  }else if(operator == '*'){
    return num1 * num2;    
  }else if(operator == '/'){
    return num1 / num2;    
  }  
}
```

Med switch-case

```js
function calcThis(num1, num2, operator){
  switch(operator){
    case '+': return num1 + num2;    
    case '-': return num1 - num2;    
    case '*': return num1 * num2;    
    case '/': return num1 / num2;    
  }
}
```


**37**
```js
function compareThis(num1,num2){
  return num1 == num2
}
```
Eller som arrow function
```js
const compareThis = (num1,num2) => num1 == num2
```

**38**
```js
function between(num){
  return num >= 20 && num <= 40
}
```
Eller som arrow function
```js
const between = (num) => num >= 20 && num <= 40
```

**39**
```js
function getMeTheLongestArr(arr1, arr2){
  if(arr1.length > arr2.length){
    return arr1
  }else{
    return arr2
  }
}
```

Eller som arrow function

```js
const getMeTheLongestArr = (arr1, arr2) => {
  if(arr1.length > arr2.length){
    return arr1
  }else{
    return arr2
  }
}
```

Eller som arrow function med ternary if

```js
const getMeTheLongestArr = (arr1, arr2) => 
  arr1.length > arr2.length ? arr1 : arr2;
```


**40**
```js
Math.floor(1337.41)
```
**41**
```js
Math.ceil(1337.41)
```
**42**
```js
Math.round(1337.41)
```
**43**

```js
function random(max){
  return Math.floor(Math.random()*max)
}
```

**44**
```js
function randomPassword(len){
  let characters = "abcdefghijklmnopqrstuvxyzåäö"
  characters += character.toUpperCase()
  characters += "0123456789"

  let pw = ""
  for(let i = 0; i <len; i++){
    let randomIndex = random(characters.length) // Use function from previous exercise
    pw += characters[ randomIndex ]
  }
}
```


**45**
```js
function randomName(names){
  return names[random(names.length)]
}
```

**46**
Den ena har en parameter, annars ingen skillnad


**47**

1. HelloAgainAgain
1. HelloAgain
1. hello

**48**
```javascript

function printPokemons() {
  let pokemons = ['Pikachu', "Charmander", "Bulbasaur", "Squirtle"];
  for(let i=0;i<pokemons.length;i++) {
    console.log("One awesome pokemon is " + pokemons[i]);
  }
}
printPokemons();
```

**49**
```javascript
function reverseString(str) {
  let newString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}
reverseString('hello');

```


**50**

```js
const heading = document.querySelector("article h2")
```

**51**
```js
const listItem = document.querySelector("ul li:nth-of-type(3)")
```

**52**
```js
const listItems = document.querySelectorAll("li")
for(let item of listItems){
  item.innerText = item.innerText.toUpperCase()
}
```


**53**
```js
const email = document.querySelector("#email")
const theEmail = email.value
```

**54**
```js
const options = document.querySelector("#options")
const value = options.value
```

**55**
```js
const img = document.querySelector("img.awesome")
const imageLink = img.getAttribute("src")
```


**56**
```js
const checkbox = document.querySelector("#gdpr-ok")
if(checkbox.checked){
  // Yes.. it is
}
```


**57**
```js
const nav = document.querySelector("#main-nav")
nav.classList.add("show")
```

**58**
```js
const homeLink = document.querySelector("#home")
homeLink.classList.toggle("active")
```

**59**
```js
const images = document.querySelectorAll(".gallery img")
for(let image of images){
  image.classList.add("shadow")
}
```


**60**
```js
const heading = document.createElement("h1")
heading.innerText = "Awesome headline!"
document.body.append(heading)
```
