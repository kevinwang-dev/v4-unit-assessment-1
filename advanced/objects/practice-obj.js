///////////////////Problem 1///////////////////

//Given the object below, uncomment the line with the correct usage:

let duck = {
  name: 'Stefan',
  pond: 'Hyde Park Serpentine',
  bites: true,
  fluffiness: 100,
}

//1. Using dot notation to access the duck's "name" property.
// let accessByDotNotation = duck."name"
// let accessByDotNotation = Object[duck].name
let accessByDotNotation = duck.name

//2. Using bracket notation to access duck's "bites" property.
// let accessByBracketNotation = duck{"bites"}
// let accessByBracketNotation = Object[duck][bites]
// let accessByBracketNotation = duck[bites]
let accessByBracketNotation = duck['bites']
// let accessByBracketNotation = duck(bites)

///////////////////Problem 2///////////////////

//Add a method called moveCities to the object below.
//moveCities should take in a new city, and change the city
//property on the object to the new city passed in.

let person = {
  name: 'Ella',
  city: 'Edinburgh',
  job: 'Leader of Ghost Tours',
  moveCities: function(city){
    person.city = city;
  }
}

//CODE HERE

///////////////////Problem 3///////////////////

//Use the built-in keys method to get the keys from the
//object below; store them in a variable called "doorKeys".  For information about this method see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

let doors = {
  red: 'cedar',
  blue: 'stone',
  green: 'pine',
  brown: 'mahogany',
}
const doorKeys = Object.keys(doors)
//Code here

//////////////////PROBLEM 4////////////////////

//Based on the following set of functions, alter
//the provided arrays to contain only the strings
//that contain the names of the variables that are
//in scope for the following code.

let hades = 'Hades'

function greekPantheon() {
  let zeus = 'Zeus'
  for (let olympians = 0; olympians < 12; olympians++) {
    let hera = 'Hera'

    console.log(zeus + "'s Queen is " + hera)
  }
}

function greekUnderworld(season) {
  let gatekeeper = 'Cerberus'
  let response = hades + ' is here.'

  if (season === 'winter') {
    let persephone = 'Persephone'

    response = persephone + response.slice(5)
  }
  console.log(persephone)
  return response
}

//REMOVE THE NAMES OF THE VARIABLES THAT DO NOT BELONG

//This array should only contain variables accessible in global scope
let greekGlobalScope = [
  'hades',
  'zeus',
  'olympians',
  'hera',
  'gatekeeper',
  'response',
  'persephone',
]

//This array should only contain variables accessible in scope of the
//function greekPantheon
let greekPantheonScope = [
  'hades',
  'zeus',
  'olympians',
  'hera',
  'gatekeeper',
  'response',
  'persephone',
]

//This array should only contain variables accessible in scope of the
//for-loop within the function greekPantheon
let greekPantheonLoopScope = [
  'hades',
  'zeus',
  'olympians',
  'hera',
  'gatekeeper',
  'response',
  'persephone',
]

//This array should only contain variables accessible in scope of the
//the function greekUnderworld
let greekUnderworldScope = [
  'hades',
  'zeus',
  'olympians',
  'hera',
  'gatekeeper',
  'response',
  'persephone',
]

//This array should only contain variables accessible in scope of the
//if statement of the function greekUnderworld
let greekUnderworldIfStatementScope = [
  'hades',
  'zeus',
  'olympians',
  'hera',
  'gatekeeper',
  'response',
  'persephone',
]

//////////////////PROBLEM 5////////////////////

//Based on the following set of functions, alter
//the following arrays to contain only the strings
//that contain the names of the variables that are
//in scope for the following code.

const hela = 'Hela'

function norsePantheon() {
  let odin = 'Odin'
  for (let asgardians = 0; asgardians < 12; asgardians++) {
    let frigga = 'Frigga'

    console.log(odin + "'s Queen is " + frigga)
  }
}

function valhalla(isRagnarok) {
  let watcher = 'Heimdall'
  let response = hela + ' is here.'

  if (isRagnarok) {
    let valkyrie = 'Valkyrie'

    response = valkyrie + response.slice(5)
  }
  console.log(valkyrie)
  return response
}

//REMOVE THE NAMES OF THE VARIABLES THAT DO NOT BELONG

//This array should only contain variables accessible in global scope
let norseGlobalScope = [
  'hela',
  'odin',
  'asgardians',
  'frigga',
  'watcher',
  'response',
  'valkyrie',
]

//This array should only contain variables accessible in scope of the
//function norsePantheon
let norsePantheonScope = [
  'hela',
  'odin',
  'asgardians',
  'frigga',
  'watcher',
  'response',
  'valkyrie',
]

//This array should only contain variables accessible in scope of the
//for-loop within the function norsePantheon
let norsePantheonLoopScope = [
  'hela',
  'odin',
  'asgardians',
  'frigga',
  'watcher',
  'response',
  'valkyrie',
]

//This array should only contain variables accessible in scope of the
//the function valhalla
let valhallaScope = [
  'hela',
  'odin',
  'asgardians',
  'frigga',
  'watcher',
  'response',
  'valkyrie',
]

//This array should only contain variables accessible in scope of the
//if statement of the function valhalla
let valhallaIfStatementScope = [
  'hela',
  'odin',
  'asgardians',
  'frigga',
  'watcher',
  'response',
  'valkyrie',
]

//////////////////PROBLEM 6////////////////////

//Based on the following set of functions, uncomment
//the correct answers.

let color = 'grey'
let weather = 'foggy'

function forecast(skyColor = color, cityWeather = weather) {
  return 'The sky is ' + skyColor + ' and it is ' + cityWeather + '.'
}

function seattle() {
  let color = 'purple'
  let weather = 'stormy'
  return forecast(color, weather)
}

function vancouver() {
  let color = 'iron grey'
  let weather = 'rainy'
  return forecast()
}

function denver(color, weather) {
  return forecast(color, weather)
}

//What will seattle() return? Uncomment the correct answer.

let seattleWeather = "The sky is purple and it is stormy."
// let seattleWeather = "The sky is grey and it is foggy."
// let seattleWeather = "The sky is undefined and it is undefined."

//What will vancouver() return? Uncomment the correct answer.

// let vancouverWeather = "The sky is purple and it is stormy."
// let vancouverWeather = "The sky is iron grey and it is rainy."
// let vancouverWeather = "The sky is grey and it is foggy."
// let vancouverWeather = "The sky is undefined and it is undefined."

//What will denver() return? Uncomment the correct answer.

// let denverWeather = "The sky is purple and it is stormy."
// let denverWeather = "The sky is iron grey and it is rainy."
// let denverWeather = "The sky is grey and it is foggy."
let denverWeather = "The sky is undefined and it is undefined."

//What will denver("blue", "sunny") return? Uncomment the correct answer.

// let denverWeather2 = "The sky is purple and it is stormy."
// let denverWeather2 = "The sky is iron grey and it is rainy."
// let denverWeather2 = "The sky is blue and it is sunny."
// let denverWeather2 = "The sky is grey and it is foggy."
// let denverWeather2 = "The sky is undefined and it is undefined."
