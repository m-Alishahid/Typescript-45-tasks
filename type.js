"use strict";
// "ALL 45 TYPESCRIPT TASKS IS HERE"
Object.defineProperty(exports, "__esModule", { value: true });
//(task1 setup to typescript environments install nodejs ,typescript,vscode )
//(task 2) 
let Name = "Eric";
console.log(`hello ${Name} would you like to learn some Python today?`);
//(task3 Name cases)
let firstName = "AliShahid";
console.log("Lowercase:", firstName.toLowerCase());
console.log("Uppercase:", firstName.toUpperCase());
console.log("Titlecase:", firstName.replace(/\b\w/g, c => c.toUpperCase()));
//(task4 Famous Quote)
let author = "Quaid-e-Azam";
let Quote = " With faith,discipline and selfless devotion of duty,there is nothing worthwhile that you cannot achieve. ";
console.log(`${author} once said,"${Quote}"`);
//(task5 Famous Quote2)
//similarly..
let famous_person = "Quaid-e-Azam";
let quote = " With faith,discipline and selfless devotion of duty,there is nothing worthwhile that you cannot achieve. ";
let message = `${famous_person} once said, "${quote}"`;
console.log(message);
//(task6 Stripping Names)
let personName = "\t\n John Doe \n\t";
console.log("Original:", personName.trim());
//(task7,8 seperated)
console.log(5 + 3);
console.log(10 - 2);
console.log(2 * 4);
console.log(16 / 2);
//(task9)
let favorite_Number = 24;
console.log(`"My favorite number is ${favorite_Number}."`);
//(task10 Adding Comments)
//Author:[Aliabbasi]
//Date:[Saturday,Febuary18,2024]
//task9:printing favorite number.
let favoriteNumber = 24;
//reveling my favorite number program.
console.log(`"My favorite number is ${favoriteNumber} ."`);
//(task11 array)
let names = ["Ali", "Bilal", "Hamza", "Rohan"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
//(task12) 
let personnames = ["Ali", "Bilal", "Hamza", "Rohan"];
let text = "Do you like Programming?";
console.log(names[0] + " " + text);
console.log(names[1] + " " + text);
console.log(names[2] + " " + text);
console.log(names[3] + " " + text);
//(task13 Your Own Array)
let transportation = ["City motorcycle", "Civic", "Fortuner"];
transportation.map((items) => console.log(`I would like to own a ${items}`));
// //(task14 Guest list)
let guestArray = ["ALi", "Rohan", "Shahid", "Salman"];
guestArray.map((items) => console.log(` Dear ${items}, You are invited to the dinner. `));
//(task15 Changing Guest list)
let guestArray2 = ["ALi", "Rohan", "Shahid", "Salman"];
let canNotAttend = "Salman";
console.log(canNotAttend + " " + "Cannot attened the dinner! ");
let newGuest = "Bilal";
guestArray2[guestArray2.indexOf(canNotAttend)] = newGuest;
console.log(guestArray2);
guestArray2.map((items) => console.log(`"Dear ${items},You are invited to the dinner"!`));
//(task16 More Guests)
//part1
let guestArray3 = ["Ali", "Rohan", "Shahid", "Bilal"];
let cannotAttend = "Rohan";
let newGuest1 = "Haider";
guestArray3[guestArray3.indexOf(cannotAttend)] = newGuest1;
console.log(guestArray3);
guestArray3.map((items) => console.log(`Dear ${items} , I found a bigger dinner table so I am invited more peoples.`));
//part2
let moreGuest = "Rohan";
guestArray3.unshift(moreGuest);
console.log(guestArray3);
//part3
let middleGuest = "Ayesha";
let middleIndex = guestArray3.length / 2;
guestArray3.splice(middleIndex, 0, middleGuest);
console.log(guestArray3);
//part4
guestArray3.push("Areeba");
console.log(guestArray3);
//part5
guestArray3.map((items) => console.log(`Dear ${items} , You are all invited to the dinner please come.`));
//(task17 Initial list of Guest)
let Guest = ["Qasim", "Ali", "Rohan", "Hamza", "Haider"];
//informed that! only two people can be invited to dinner.
// console.log("Due to limited space ,only two people can be invited for dinner.");
//remove guest
// while(Guest.length >2){
//     const removeGuest=Guest.pop();
//     console.log(`Sorry,${removeGuest},you're no longer invited to dinner.`);}
//printing remaining guests
// Guest.forEach((Guest)=>{
//     console.log(`Dear ${Guest},you're still invited to dinner.`);
// })
//removing the last two guest
Guest.pop();
Guest.pop();
//printing the final list to invited the dinner
console.log("Final Guest list:", Guest);
//(task18)
let placeTovisit = ["China", "Pakistan", "Portugal", "Canada", "Brazil"];
//print the array to its original order
console.log("Original order:", placeTovisit);
//print the array in alphabetical order without modifying the actual list
console.log("Alphabetical order:", [...placeTovisit].sort());
//show that the array is still in its original order
console.log("Original order after sorting:", placeTovisit);
//print the array in reverse alphabetical order without changing the order of original list
console.log("Reverse alphabetical order:", [...placeTovisit].sort().reverse());
//show that the array is still in its original order
console.log("Original order after reverse sorting:", placeTovisit);
//reverse the order of the list
placeTovisit.reverse();
console.log("Reversed order:", placeTovisit);
//Reverse the order of the list again to get back to original order
placeTovisit.reverse();
console.log("Back to original order:", placeTovisit);
//sort the array in alphabetical order
placeTovisit.sort();
console.log("Sorted in alphabetical order:", placeTovisit);
//sort the array in reverse alphabetical order
placeTovisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", placeTovisit);
//(task19 Dinner Guest)
let invitation = ["Qasim", "Ali"];
let count_invitation = invitation.length;
console.log(`${count_invitation} people will come to the dinner`);
//(task20)
let places = ["Singapore", "Pakistan", "Thailand", "Dubai", "China"];
console.log("List of Country:");
console.log(places);
//(task21)
let person = { name: "M.Ali", fatherName: "M.Shahid", age: 17 };
console.log(person);
//(task22 Intentional Error)
const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
//console.log(days{2});
console.log(days[2]);
//(task23 Conditional Tests)
let car = "subaru";
console.log("is car =='subaru'? predict true");
console.log(car == 'subaru');
console.log("is car !='honda city'? predict true");
console.log(car != 'honda city');
console.log("is car =='Subaru'? predict false");
console.log(car == 'Subaru');
console.log("is car =='SUBARU'? predict false");
console.log(car == 'SUBARU');
console.log("is car.length == 6? predict true");
console.log(car.length == 6);
console.log("is car.length != 10? predict true");
console.log(car.length != 10);
console.log("is 10>45? predict false");
console.log(10 > 45);
console.log("is 3<=2? predict false");
console.log(3 <= 2);
console.log("is 72>=83? predict false");
console.log(72 >= 83);
console.log("is car =='subarbu' && car.length ==6? predict true");
console.log(car == 'subaru' && car.length == 6);
//(task24 more conditional tests)
let num1 = "Ali";
let num2 = "Ali Shahid";
let num3 = "Muhammad Ali Shahid";
if (num1 == num3) {
    console.log("names are equal.");
}
else {
    console.log("names are not equal.");
}
if (num1 != num3) {
    console.log("names are equal.");
}
else {
    console.log("names are not equal.");
}
if (num1 != num2) {
    console.log("names are equal.");
}
if (num1 != num3) {
    console.log("names are equal.");
}
let dateofBirth1 = 24;
let dateofBirth2 = 26;
if (dateofBirth1 == 24) {
    console.log("Correct date.");
}
if (dateofBirth1 != 26) {
    console.log("Incorrect!");
}
if (dateofBirth1 <= dateofBirth2) { //less condition
    console.log("Correct date");
}
if (dateofBirth2 >= dateofBirth1) { //Greater condition
    console.log("Incorrect!");
}
if (dateofBirth1 == 24 && dateofBirth2 == 26) {
    console.log("Correct date.");
}
if (dateofBirth1 == 24 || dateofBirth2 != 26) {
    console.log("Incorrect!");
}
let fruitBasket = ["Mangoes", "Watermelons", "Apples", "Graps"];
if (fruitBasket.includes("Mangoes")) {
    console.log("I like Mango");
}
if (!fruitBasket.includes("Guava")) {
    console.log("I don't like.");
}
//(task25 Alien colors#1)
let alienColor = "Green";
if (alienColor == "Green") {
    console.log("You have earn 5 points");
}
let alien_color = "Red";
if (alien_color == "Green") {
    console.log("No output");
}
//(task26 Alien color#2)
let alienColor2 = "Green";
if (alienColor2 == "Green") {
    console.log("Player just earn 5 points for shooting the alien");
}
else {
    console.log("Player just earn 10 points");
}
let alien_color2 = "Red";
if (alien_color == "Green") {
    console.log("Player just earn 5 points for shooting the alien");
}
else {
    console.log("Player just earn 10 points");
}
//(task27 Alien color#3)
let alienColor3 = "Red";
if (alienColor3 == "Green") {
    console.log("The player earn 5 points");
}
else if (alienColor3 == "Yellow") {
    console.log("The player earn 10 points");
}
else {
    console.log("The player earn 15 points");
}
//(task28 Stages of Life).......2,4,13,20,65,Older
let age = 17;
if (age < 2) {
    console.log("The person is a baby");
}
else if (age < 4) {
    console.log("The person is a Toddler");
}
else if (age < 13) {
    console.log("The person is a Kid");
}
else if (age < 20) {
    console.log("The person is a teenager");
}
else if (age < 65) {
    console.log("The person is a adult");
}
else {
    console.log("The person is Older");
}
//(task29 Favourite Fruits)
let favoriteFruits = ["Banana", "Mango", "Watermelon", "Peach", "Guava"];
if (favoriteFruits.includes("Banana")) {
    console.log("Banana");
}
if (favoriteFruits.includes("Peach")) {
    console.log("Peach");
}
if (favoriteFruits.includes("Mango")) {
    console.log("Mango");
}
if (favoriteFruits.includes("Guava")) {
    console.log("Guava");
}
if (favoriteFruits.includes("Watermelon")) {
    console.log("Watermelon");
}
//(task30 Hello Admin)
let users = ["Eric", "Ali", "Rohan", "Danial", "admin"];
for (let user of users) {
    if (user === "admin") {
        console.log("Hello admin,would you to see a status report?");
    }
    else {
        console.log(`Hello ${user},Thank you for logging in again`);
    }
}
//(task31 No User)
let user = ["Eric", "Ali", "Rohan", "Danial", "admin"];
user = [];
if (user.length === 0) {
    console.log("We need to find some users!");
}
//(task32 Checking Username)
let currentUser = ["Ahmed", "Ali", "Daniel", "Hamza", "Bilal"];
let newUser = ["Ali", "Daniel", "Fatima", "Aliza", "Qasim"];
let currentUserlower = currentUser.map(user => user.toLowerCase());
for (let newUsers of newUser) {
    if (currentUserlower.includes(newUsers.toLowerCase())) {
        console.log(`Sorry ${newUsers},That name is Taken`);
    }
    else {
        console.log(`Yes ${newUsers},Is still in available list `);
    }
}
//(task33 Ordinal Numbers)
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let number of numbers) {
    if (number === 1) {
        console.log(`${number}st`); //1st
    }
    else if (number === 2) {
        console.log(`${number}nd`); //2nd
    }
    else if (number === 3) {
        console.log(`${number}rd`); //3rd
    }
    else {
        console.log(`${number}th`); //4th,5th,6th,7th,8th,9th
    }
}
//(task34 Pizzas)
let favPizza = ["Chicken", "pepperonl", "Veg"];
for (let pizza of favPizza) {
    console.log(pizza);
}
console.log("\n");
for (let pizza of favPizza) {
    console.log(`I really like ${pizza} pizza!`);
}
console.log("\n I really love pizza!");
//(task35 Animals)
let Animals = ["Lion", "Cat", "Rabbit"];
for (let Animal of Animals) {
    console.log(Animal);
}
console.log("\n");
for (let Animal of Animals) {
    console.log(`A ${Animal} is a Cute Animal`);
}
console.log("\n All Animals are Cute! but I love Rabbits");
//(task36 T-shirts)
function makeShirt(size, text) {
    console.log(`\n you order a ${size} shirt that says ${text}`);
}
makeShirt(`large`, ' " I love typescript"');
makeShirt(`Medium`, ' " I need a Big Shirt"');
//(task37 Large Shirt)
function make_shirt(size = 'Large', text = '    I love tyepscript') {
    console.log(`you have order a ${size},shirt that says ${text}`);
}
make_shirt();
make_shirt('medium');
//different message
make_shirt('small', 'I need a big shirt to wear');
//(task38 Cities)
function describe_city(city, country = 'Pakistan') {
    console.log(`${city} is in ${country}`);
}
describe_city('Karachi'); //default sentence
describe_city('france', 'Europe');
describe_city('Lahore', 'Punjab');
//(task39 City Names)
function city(city, country) {
    return `${city},${country}`;
}
let city1 = city('Lahore', 'Pakistan');
let city2 = city('Tokyo', 'Japan');
let city3 = city('Paris', 'France');
console.log(city1);
console.log(city2);
console.log(city3);
//(task40 Album)
function makeAlbum(artist, title) {
    const dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;
}
let album = makeAlbum("Ali", "DarkLight");
console.log(album);
album = makeAlbum("Rohan", "Redwave");
console.log(album);
album = makeAlbum("Qasim", "Seabreez");
console.log(album);
//(task41 Magicians)
function show_magicians(Magicians) {
    for (const Magician of Magicians) {
        console.log(Magician.charAt(0).toUpperCase() + Magician.slice(1));
    }
}
const Magician = ["harry", "devis", "robert sheiun"];
show_magicians(Magician);
//(task42 Great Magicians)
function make_great(magicians) {
    for (let m = 0; m < magicians.length; m++) { // "m" mean index of string
        magicians[m] = magicians[m] + ' The Great';
    }
}
const magicians2 = ["Neil Voltar", "Actotoile", "Aurther"];
make_great(magicians2);
show_magicians(magicians2);
//(task43 Unchanged Magicians)
function make_great2(magicians) {
    const greatMagicians = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] = 'The Great');
    }
    return greatMagicians;
}
const magicians3 = ["Neil Volter", "Actotile", "Aurther"];
const greatMagicians2 = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(magicians2);
//(task44 )
function sandwich(...items) {
    console.log("Sandwich Order:");
    for (let i = 0; i < items.length; i++) {
        console.log(`-${items[i]}`);
    }
}
console.log("This Sandwich is very tasty");
sandwich('tomato', 'chicken cheese', 'beef');
sandwich('exra cheesy', 'beef');
sandwich('special sauce', 'garlic chicken cheesy');
function createCar(manufacture, model, optional) {
    return Object.assign({ manufacture,
        model }, optional);
}
const myCar = createCar("Toyota", "Corolla", { color: "black", year: "2024" });
console.log(myCar);
