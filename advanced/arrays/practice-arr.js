//+++++++++ Start Here! All problems are below. +++++++++//

//////////////////PROBLEM 1////////////////////

//Create an array called rubberDucks with the values "yellow",
//"red", "blue", "brown" in the array.

//Code here
const rubberDucks = ['yellow', 'red', 'blue', 'brown']

//////////////////PROBLEM 2////////////////////

//Uncomment the correct answer to the following questions:

//What is the first numbered index of an array?

// var answer = 1
var answer = 0

//How do you access the length of an array, such as the array
//you created above called rubberDucks?

// var arrayLength = Array.length(rubberDucks)
var arrayLength = rubberDucks.length
// var arrayLength = rubberDucks.len
// var arrayLength = rubberDucks.length()

//////////////////PROBLEM 3////////////////////

//Create a function called getLast that takes in a single
//parameter: an array, and returns the last element of the array.
//The passed-in array should NOT be modified.

function getLast(array){
    let newArray = array.slice()
    return newArray.pop()
}
//Code here

//////////////////PROBLEM 4////////////////////

//Create a function called getElement that takes in two
//parameters: an array, an index, and returns the element
//at the numbered index of that array.
//The passed-in array should NOT be modified.

function getElement(array, index){
    return array[index];
}
//Code here

//////////////////PROBLEM 5////////////////////

//Create a function called changeElement that takes in three
//parameters: an array, an index, and a value. changeElement
//should change the element at the numbered index of that array
//to the given value. You do not need to return the array.

function changeElement(array, index, value){
    array[index] = value;
}
//Code here'

//////////////////PROBLEM 6////////////////////

//Create a function called trim that takes in an array and removes
//the last element. trim should return the array.

function trim(array){
    array.pop()
    return array

}
//Code here

//////////////////PROBLEM 7////////////////////

//Create a function called addMoreDucks that takes in an array
//and if the array's length is greater than 4, replace the
//3rd element of the array with the string '42 ducks'.
//addMoreDucks should return the array.

//Code here
function addMoreDucks(array){
    if(array.length > 4){
        array[2] = '42 ducks'
    }
    return array;
}

//////////////////PROBLEM 8////////////////////

//Create a function called cutItOut that takes in an array
//and if the array's length is greater than 4, removes
//the 3rd element of the array. cutItOut should return the array.

//Code here
function cutItOut(array){
    if(array.length > 4){
        array.splice(2, 1);
    }
    return array;
}
//////////////////PROBLEM 9////////////////////

//Create a function called changeName that takes in an array
//and finds the element "Tolkn", and changes it to "Tolkien".
//changeName should return the array.

//Code here
function changeName(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] === 'Tolkn'){
            array[i] = 'Tolkien';
        }
    }
    return array;

    }