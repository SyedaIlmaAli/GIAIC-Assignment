// Assignment GIAIC
// question 2
// let fname : string = "Ilma";
// console.log(`Hello ${fname} Would You Like To Learn Some Python Today?`);
//question 3
// let personalName : string = "Sir Zia";
// console.log("uppercase:",personalName.toUpperCase());
// console.log("lowercase:",personalName.toLowerCase());
// console.log("titlecase:",personalName.replace(/\b\w/g,c=> c.toUpperCase()));
//question 4
// let quote : string = "A person who never made a mistake never tried anything new.";
// let author : string = "Albert Einstein";
// console.log(`${author} once said, "${quote}`)
// question 5
// let quote1 : string = "A person who never made a mistake never tried anything new.";
// let famous_person : string = "Albert Einstein";
// let message : string = `${famous_person} once said, "${quote1}`;
// console.log(message);
//question 6
// let newName : string = "\t\nIlma Ali\t\n";
// console.log("Original:", newName);
// console.log("Stripped:", newName.trim())
// question 8
// console.log(5 + 3);
// console.log(10 - 2);
// console.log(4 * 2);
// console.log(16 / 2);
//question 10 : Adding comments
// Name = [Syeda Ilma Ali]
// Date = [16, Feburary, 2022]
// question 9
//printing my fav number
// let favNum : number = 0;
//revealling my fav number
// console.log(`My Favourite Number is ${favNum}`);
// question 10
//Adding Comments: Already Added Comments in question 9
// question 11
// let friendName : string [] = ["Ilma", "Mehak", "Hammad", "Rubaisha"];
// console.log(friendName[0]);
// console.log(friendName[1]);
// console.log(friendName[2]);
// console.log(friendName[3]);
//question 12
// let msg : string = "Do you Like To Play FootBall?";
// console.log(friendName[0] + " " + msg);
// console.log(friendName[1] + " " + msg);
// console.log(friendName[2] + " " + msg);
// console.log(friendName[3] + " " +msg);
// question 13
// let transportation : string [] = ["Tesla Car", "Honda Motorcycle", "BMW"];
// transportation.map((items) => console.log(`I would like to own a ${items}`));
// question 14
// let guestArr : string[] = ["Fatima", "Areeb", "Inshaal"];
// guestArr.map((items)=> console.log(`Dear ${items}, You Are Invited To A Dinner Tonight`));
//question 15
// let cannotAttend : string = "Areeb";
// console.log(cannotAttend + " " + "can not attend dinner tonight.");
// let newGuest : string = "Alishba";
// guestArr[guestArr.indexOf(cannotAttend)] = newGuest;
// console.log(guestArr)
// guestArr.map((items)=> 
//     console.log(`Dear ${items}, you are invited to the dinner`)
// )
// question 16
// let guestArr : string[] = ["Ali", "Asma", "Mehak", "Ilma"];
// let newGuest : string[] = ["Hamna", "Fatima", "Osman"];
// let bestGuest = guestArr.concat(newGuest)
// console.log(bestGuest)
// guestArr.map((items)=> 
//     console.log(`Dear ${items}, I just found a more bigger table`)
// )
//Part 1 Begin
// let guestBegin : string = "Moiz";
// guestArr.unshift(guestBegin);
// console.log(guestArr)
// //Part 2 middle
// let midGuest : string = "Alishba";
// guestArr.splice(2,0,"Ayan");
// console.log(guestArr);
// Part 3 End
// let endGuest : string = "Haniya";
// guestArr.push(endGuest);
// console.log(guestArr);
// // Part 4 invitation
// guestArr.map((items)=> 
//     console.log(`Dear ${items}, You are invited for a dinner party at Lal Qila Restraunt`)
// )
// question 17
// let guestArr : string[] = ["Ali", "Asma", "Mehak", "Ilma"];
// console.log("Due to delay we cannot invite all the guest to dinner");
// while(guestArr.length > 2){
//     const removeGuest = guestArr.pop()!;
//     console.log(`Sorry Dear ${removeGuest}, Due to some issue its not possible for me to invite you to dinner.`)
// }
// for (const remainingGuest of guestArr){
//     console.log(`Dear ${remainingGuest}, You are still invited to dinner.`)
// }
// guestArr.pop();
// guestArr.pop();
// console.log("final guest list", guestArr);
// question 18
//Store the locations in a array. Make sure the array is not in alphabetical order.
// let favPlaces : string[] = ["South Korea", "Mount Everest", "Paris", "Italy", "London"];
//Print your array in its original order.
// console.log("original order:", favPlaces);
//Print your array in alphabetical order without modifying the actual list.
// let arrangedPlace : string[] = [...favPlaces];
// arrangedPlace.sort();
// console.log(arrangedPlace);
//Show that your array is still in its original order by printing it.
// console.log(favPlaces);
// Print your array in reverse alphabetical order without changing the order of the original list.
// arrangedPlace.reverse();
// console.log(arrangedPlace);
// Show that your array is still in its original order by printing it again.
// console.log(favPlaces);
//Reverse the order of your list. Print the array to show that its order has changed.
// favPlaces.reverse();
// console.log(favPlaces);
//Reverse the order of your list again. Print the list to show it’s back to its original order.
// favPlaces.reverse();
// console.log(favPlaces);
// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// favPlaces.sort();
// console.log(favPlaces);
//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// favPlaces.reverse();
// console.log(favPlaces);
// question 19
// let guestList : string[] = ["Ali", "Ali", "Bobi", "Haniya"];
// console.log(`Number of people invited to dinner are ${guestList.length}`);
// question 20
// let places : string[] = [];
// WE can add anything in empty array.
// places.push("Mount Everest");
// places.push("USA");
// places.push("River Indus");
// console.log(places);
// question 21
// const studentId = {
//     name : "Ilma",
//     class : 9,
//     percentage : 95,
//     isPass : true,
// }
// console.log(studentId);
//question 22
// let colors : string[] = ["yellow", "orange", "pink"];
// let invalidindex = colors[4];
// console.log(invalidindex)
// question 23, 24
// let country : string = "Pakistan";
// console.log("Is country == 'Pakistan'? I predict True");
// console.log(country == 'Pakistan');
// console.log("Is country != 'India'? I predict True");
// console.log(country == 'Pakistan');
// console.log("Is the lowercase of 'pakistan' equal to 'PAKISTAN'? I predict True");
// console.log(country.toLowerCase() == 'pakistan');
// let country2 : string = "America";
// console.log("Is country equal to country2? I predict False.");
// console.log(country == country2);
// console.log("Is country not equal to country2? I predict True");
// console.log(country == country2);
//Greater or less than than test
// let score : number = 55;
// let score1 : number = 70;
// console.log("Is score greater than score1? I predict True");
// console.log(score < score1);
// console.log("Is score less than or equal to score1? I predict false");
// console.log(score <= score1);
// Logical test AND
// let sunny : boolean = true;
// let snowy : boolean = true ;
// console.log("Is it sunny And snowy? I predict True.")
// console.log(sunny && snowy);
// Logical test OR
// let sunny : boolean = false;
// let snowy : boolean = true ;
// console.log("Is it sunny OR snowy? I predict True.")
// console.log(sunny || snowy);
// Test whether an item is in a array
// let countries : string[] = ["USA", "Pakistan", "Los Angeles"];
// let checkCountry : string = "Pakistan";
// console.log(`Is ${checkCountry} is present in countries? I predict True`);
// console.log(countries.includes(checkCountry));
// Test whether an item is not in a array
// let countrynotpresent : string = "Los Angeles";
// console.log(`Is ${countrynotpresent} is present in country? I predict False`);
// console.log(countries.includes(countrynotpresent));
// question 25
// let colors : string = "Green";
// if(colors === "Green"){
//     console.log("You just earned 5 points")
// } 
// let failed_colors : string = "Yellow";
// if (failed_colors === "Green"){
//     console.log("You just earned 5 points")
// }
//question 26
// Version 1 : If statement true
// let aliens_colors : string = "Green";
// if (aliens_colors === "Green"){
//     console.log("Congrats! You just earned 5 points")
// } else {
//     console.log("You just earned 10 points")
// }
// Version 2 : else statement false
// let alien : string = "red";
// if (alien === "green"){
//     console.log("Congrats! You Just Earned 10 points")
// } else {
//     console.log("You just earned 5 points.")
// }
// question 27
// let colorAlien : string = "Red";
// if(colorAlien === "Green"){
//     console.log("Congrats! You Just Earned 5 points")
// } else if (colorAlien === "Yellow"){
//     console.log("Congrats! You Just Earned 10 Points")
// } else {
//     console.log("Congrats! You Just Earned 15 Points")
// }
// question 28
// let age : number = 20;
// if (age < 2){
//     console.log("You are a baby")
// } else if (age >= 2 && age < 4){
//     console.log("You are a toddler")
// } else if (age >= 4 && age < 13){
//     console.log("You are a kid")
// } else if (age >=  13 && age < 20){
//     console.log("You are a teenager")
// } else if (age >=  20 && age < 65){
//     console.log("You are an adult")
// }else {
//     console.log("You are an elder")
// }
// question 29
// let favFruits : string[]= ["strawberry", "mango", "apple"];
// if (favFruits.includes("mango")){
//     console.log(`You really like ${favFruits[1]}`)
// }
// if (favFruits.includes("strawberry")){
//     console.log(`You really like ${favFruits[0]}`)
// }
// if (favFruits.includes("apple")){
//     console.log(`You really like ${favFruits[2]}`)
// }
// if (favFruits.includes("banana")){
//     console.log(`You really like ${favFruits[2]}`)
// } else{
//     console.log("banana is not in your favFruits array")
// }
// if (favFruits.includes("blueberry")){
//     console.log(`You really like ${favFruits[2]}`)
// } else{
//     console.log("blueberry is not in your favFruits array")
// }
// question 30
// let username : string[] = ["admin", "Ilma", "Ali", "Fatima"];
// for (let usernames of username){
//     if(usernames === "admin"){
//         console.log("Hello admin! Would you like to see a status report");
//     } else {
//         console.log(`Hello ${usernames} thank u for loggiging in!`)
//     }
// }
//question 31
// let age : number = 20;
// let username : string[] = [];
// if (username.length > 0){
//     console.log("We already have users");
//     if (age < 2){
//         console.log("You are a baby");
//     } else if (age >= 2 && age < 4){
//         console.log("You are a toddler");
//     } else if (age >= 4 && age < 13){
//         console.log("You are a kid");
//     } else if (age >=  13 && age < 20){
//         console.log("You are a teenager");
//     } else if (age >=  20 && age < 65){
//         console.log("You are an adult");
//     }else {
//         console.log("You are an elder");
//     }
// } else{
//     console.log("We need to find some usernames.");
// }
// question 32
// let current_users : string[] = ["ilma", "admin", "ali", "kashaf", "admin"];
// let new_users : string[] = ["admin", "ilma", "haniya", "fatima", "waniya"];
// for (let new_user of new_users){
//     if(current_users.map(user => user.toLowerCase()).includes(new_user.toLowerCase())){
//         console.log(`Sorry the username ${new_user} is already taken!`)
//     } else {
//         console.log(`the username ${new_user} is available!`);
//     }
// }
// question 33
// let numbers : number[]  = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let number of numbers){
//     let ordinalNumber : string;
//     if (number === 1){
//         ordinalNumber = "st";
//     } else if (number === 2){
//         ordinalNumber = "nd";
//     } else if (number === 3){
//         ordinalNumber = "rd";
//     } else {
//         ordinalNumber = "th";
//     }
//     console.log(`${number}${ordinalNumber}`)
// }
// question 34
// let fav_pizza : string[] = ["chikken tikka", "peperoni", "mexican chilli"];
// for (let pizza of fav_pizza){
//     console.log(`I like ${pizza} pizza!`);
// }
// console.log("I love pizza!");
// question 35
// let fav_pet : string[] = ["cat", "dog", "rabbit"];
// for (let pet of fav_pet){
//     console.log(`A ${pet} would make a great pet.`);
// }
// console.log("Any of these animals would make a great pet");
// question 36
// function makeShirt(size : string, message : string){
//     console.log(`The size of shirt is ${size} and message printed on it is ${message}`)
// }
// makeShirt("Small", "Ilma");
// question 37
// function makeShirt(size : string){
//      if(size === "Large"){
//          console.log("I love typescript");
//      } else if (size === "Medium"){
//          console.log("I love typescript");
//      } else{
//          console.log("Print the message you want!");
//      }
//  }
// makeShirt("Medium");
// makeShirt("Large");
// makeShirt("Small");
// question 38
// function describeCity(city : string, country : string){
//     console.log(`${city} is present in ${country}`);
// }
// describeCity("Karachi", "Pakistan");
// describeCity("Istanbul", "Turkey");
// describeCity("Los Angeles", "USA");
// question 39
// function cityCountry(city : string, country : string){
//     console.log(`${city}, ${country}`);
// }
// let pair1 = cityCountry("Karachi", "Pakistan");
// let pair2 = cityCountry("Istanbul", "Turkey");
// let pair3 = cityCountry("Los Angeles", "USA");
// console.log(pair1);
// console.log(pair2);
// console.log(pair3);
// question 40
// function makeAlbum(name: string, title: string, tracks?: number) {
//     const dictionary: { name: string, title: string, tracks?: number } = {
//         name: name,
//         title: title
//     }
//     if (tracks !== undefined) {
//         dictionary.tracks = tracks;
//     }
//     return dictionary;
// }
// const dict1 = makeAlbum("Artist1", "Album1");
// const dict2 = makeAlbum("Artist2", "Album2", 12);
// const dict3 = makeAlbum("Artist3", "Album3");
// console.log(dict1);
// console.log(dict2);
// console.log(dict3);
// question 41
// let magicians : string[] = ["Alibaba", "magician1", "magician2", "magician3"];
// function showMagicians (magician : string[]){
//     for (let magician of magicians){
//         console.log(`Magicians name is ${magician}`);
//     }
// }
// showMagicians(magicians);
// question 42
// let magicians : string[] = ["magician1", "magician2", "magician3"];
// function showMagicians(magicians : any){
//     for(let magician of magicians){
//          console.log(magician);
//     }
// }
// function theGreat(magicians : any){
//     for(let i = 0; i < magicians.length; i++){
//         magicians[i] = `The Great ${magicians[i]}`
//     }
// }
// console.log("Before function magicians:");
// showMagicians(magicians);
// theGreat(magicians);
// console.log("After making the magicians great:");
// showMagicians(magicians);
// question 43
// let magicians : string[] = ["magician1", "magician2", "magician3"];
// function showMagicians(magicians : any){
//     for (let magician of magicians){
//         console.log(magician);
//     }
// }
// function theGreat(magicians:any){
//     let theGreatMagician = [];
//     for(let magician of magicians){
//         theGreatMagician.push(`The great ${magician}`);
//     }
//     return theGreatMagician;
// }
// let theGreatMagician = theGreat(magicians);
// console.log(`After making the magician great:`);
// showMagicians(theGreatMagician);
// console.log(`Before making the magicians great:`);
// showMagicians(magicians);
// question 44
// function sandwhich(...items: any){
//     if(items.length === 0){
//         console.log(`You haven't order any sandwhich toppings`);
//     } else{
//         console.log("sandwhich order summary:")
//         for(let item of items){
//             console.log(`-  ${items}`);
//         }
//         console.log("Enjoy Your Order");
//     }
// }
// sandwhich("chicken", "cheese", "ketchup");
// sandwhich("beef", "mustard", "mashed potato");
// sandwhich("mayonese", "vegetables", "thousand island sause");
// sandwhich();
// question 45
// interface Car {
//     manufacturer : string;
//     model : string;
//     [key : string] : string | undefined;
// }
// function carFeature(model : string, manufacturer : string, ...options : string[]){
//     const car : Car = {
//         model : model,
//         manufacturer : manufacturer
//     };
//     for (let i = 0; i < options.length; i += 2){
//         const key = options[i];
//         const value = options[i + 1];
//     if(key !== undefined && value !== undefined){
//         car[key] = value as string;
//     }
//   }
//     return car;
// }
// const myfavcar = carFeature("tesla", "model X", "color", "blue");
// console.log(myfavcar);
// The End
