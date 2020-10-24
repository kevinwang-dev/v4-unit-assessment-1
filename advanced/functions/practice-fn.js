//========= DO NOT TOUCH THIS CODE =========//
try {
  var a = hey
} catch (err) {
  var a
}
try {
  var b = hi
} catch (err) {
  var b
}
try {
  var c = hello
} catch (err) {
  var c
}
//============= DO NOT TOUCH CODE ABOVE =============//
//+++++++++ Start Here! All problems are below. For variables, use var. +++++++++//

///////////////////Problem 1//////////////////
//Create a function called hey, using a function
//declaration. hey should take in a 'name' parameter, and return
//the string "Hey " plus the name.
function hey(name){
  return `Hey ${name}`
}
//Code here

///////////////////Problem 2//////////////////
//Create a function called hi, using a function
//expression (without ES6). hi should take in a 'name' parameter, and return
//the string "Hi " plus the name.

//Code here
const hi = function(name){
  return `Hi ${name}`
}
///////////////////Problem 3//////////////////
//Create a function called hello, using an arrow
//function. hello should take in a 'name' parameter, and return
//the string "Hello " plus the name.

//Code here
const hello = name => `Hello ${name}`

///////////////////Problem 4//////////////////
//Create a function named fun, which takes in
//a single string parameter, and returns that string
//with "!!!!!" added to the end of it. Then, call fun
//with the string "Yay" and save the result of the function to a
//variable called funTimes.

//Code here
function fun(string){
  return `${string}!!!!!`
}
const funTimes = fun('Yay')

//////////////////PROBLEM 5////////////////////

//Create a function called invokesCallbacks that takes
//three parameters: a number, a callback, and another callback.
//If the number is greater than 10, invokesCallbacks should
//return the FIRST callback param invoked. Else, invokesCallbacks
//should return the SECOND callback param invoked.

//Code here
function invokesCallbacks(number, func1, fucn2){
  if(number > 10){
    return func1();
  } else {
    return fucn2();
  }
}
//////////////////PROBLEM 6////////////////////

//Within the function timedGreeting below, create a setTimeout (a native javascript method) that assigns the result of invoking the callback parameter to the variable greeting, after 1 second.  If you don't know how to use setTimeout you can find information here: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout

let greeting

//////////////////PROBLEM 7////////////////////

//Finish the function addNumbers so that it pushes numbers starting at
//0 and up to (but not including) the value passed in, into the array
//myNumbers. Make sure to return the array myNumbers at the end.
//ex: passed 5 --> return [0, 1, 2, 3, 4]

function addNumbers(value) {
  var myNumbers = []
  //Code here
  let newValue = value.pop()
  for(let i = 0; i < newValue.length; i++){
    myNumbers.push(newValue[i])
  }
  return myNumbers
}

//////////////////PROBLEM 8////////////////////

//Finish the function backwardsGreeting. backwardsGreeting should loop
//through the array parameter from end to start, concatinating "Hello, "
// with each element, and pushing the resulting sting into the greetings
//array. Then return the greetings array.

function backwardsGreeting(arr) {
  let greetings = []
  //Code here
}

//////////////////PROBLEM 9////////////////////

//Finish the function leapFrog. leapFrog should loop through every
//even element of the array parameter. For every iteration, concatenate
//the string ' frog' onto the element. Then return the array. NOTE: use
//the variable i for your for loop

function leapFrog(arr) {
  //Code here
  for(let i = 0; i< arr.length; i+=2){
    arr[i] + 'frog';
  }
  return arr;
}
