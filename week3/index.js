//create ages array
let ages = [3, 9, 23, 64, 2, 8, 28];
console.log(ages);

//Programmatically substract the value of the first element in the array from the value in the element of the array
console.log((ages.pop())) - (ages.shift());

//Add a new ages to your array and repeat the step above
ages.push(25);
console.log(ages.pop()) - (ages.shift());
console.log(ages);

//Use a loop to iterate through the array and calculate the average age. 
function test(ages) {
    for(let i = 0, sum = 0; i < ages.lenght; i++) {
        sum += agesS[i];
    }
}
console.log(test(ages));


//Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log(names);

//calucate average neme lenght for names array
var total = 0;
for(let i = 0; i < names.length; i++) {
    total += names[i].length;
}
let average = total / names.length;
console.log(average);

//iterate through the array again and concatenate all the names together, separated by space, console.log
let resultString = " ";
for(let i = 0; i < names.length; i++) {
    resultString += names[i] + " ";
}
console.log(resultString);

//How do You access the last element of an array?
let lastElement = names[names.length - 1];

console.log(lastElement);

//How to you access the first element of any array?
let firstElememt = names[0];
console.log(firstElememt);

//Create a new array called nameLenghts
var nameLenghts = [];

//Write a loop a iterate over the previously create names array and add the lenght of each nameLenghts array.
for( let i = 0; i < names.length; i++) {
    nameLenghts.push(names[i].length);
}
console.log(nameLenghts);

//Write a loop to iterate over the nameLenghts array and calulate the sum of all the elements in the array. Print the result to the console.
const test1 = function(array) {
    for(let i = 0; i < array.lenght; i++) {
        sum += array[i];
    }
}
console.log(test1(nameLenghts));


//Write a function that takes two parameters, word and n
const c = function( word, n) {
let concat = [];
for( let i = 0; i < n;)
concat[i++] = word;
return concat.join(' ');
}
console.log(c("Hello", 3));

//function that takes two parameters, firstName and lastName
//return a full naem (the full name should be the first and the last name separated by a space)
const fullName = function (firstName, lastName) {
    return firstName + ' ' +lastName
}
console.log(fullName('Winnie', 'Pooh'));

//Write a function that takes an array of number and returns true if the sum of all the numbers in the array is greater than 100.
var num1 = [2, 14, 25, 45, 18, 50, 100];
console.log(num1);

const test1B = function(array) {
    let sum = 0;
    for(let number of array) {
        sum += number;
    }
    if (sum > 100){
        return true;
    }
    return false;
}
console.log(test1B(num1));

//Write a function that takes an array of number return the average of all the elements in the array
const test2 = function(array) {
    let sum = 0;
    for (let number of array){
        sum += number;
    }
    return sum/array.lenght;
}
console.log(test2(num1));

//Write a function that takes two array of numbers and returns if the average of the element in the first array is greater than average of the elememts in the second array.
const num2 = [22, 34, 5, 12, 88, 95, 200];
const avgBool = function(array1, array2) {
    let Array1 = test2(array1);
    let Array2 = test2(array2);
    return (Array1 > Array2);
}
console.log(avgBool(num1,num2));

//Write a function called willBuyDrink that tatkes a boolean isHotOutside and a number moneyInPocket, and return true if it is hot outside and if moneyIfPocket is greater than 10.50
const willBuyDrink = function ( isHotOutside, moneyIfPocket) {
    if(isHotOutside == true && moneyIfPocket > 10.50)
    return true;
    return false;
}
console.log(willBuyDrink(true, 20));

//Create a function of you own that sloves a problem. In the comments, write what the function does and why you created it.
//Write a function veryHungry that takes a boolean noFood and boolean justAte
// noFood is false return true, if justAte is true return true, if noFood is true and justAte is true return true
// if justAte is true while noFood is also true still true
const veryHungry = function(noFood, justAte) {
    if(noFood == true && justAte == true|| noFood == false || justAte)
    return true;
    return false;
}
console.log(veryHungry(true, false));