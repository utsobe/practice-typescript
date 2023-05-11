"use strict";
// // keyof guard
// type Alphaneumeric = string | number;
// function add(param1: Alphaneumeric, param2: Alphaneumeric): Alphaneumeric  {
//     if (typeof param1 === 'number' && typeof param2 === 'number') {
//         return param1 + param2;
//     } else {
//         return param1.toString() + param2.toString();
//     }
// }
// add('1','2');
// add(1,2);
// // in guard
// type NormalUserType = {
//     name: string;
// }
// type AdminUserType = {
//     name:string;
//     role: 'admin';
// }
// function getUser(user: NormalUserType | AdminUserType) {
//     if('role' in user) {
//         return `I am an admin and my role is ${user.role}`
//     } else {
//         return `I am a normal user`;
//     }
// }
// const normalUser1 : NormalUserType = {name: "Mr. Kallu"};
// const adminlUser1 : AdminUserType = {name: "Mr. Kallu", role: 'admin'};
// console.log(getUser(normalUser1));
// console.log(getUser(adminlUser1));
// class Animal {
//     constructor(public name: string, species: string) {
//     }
//     makeSound() {
//         console.log('I am making sound');
//     }
// }
// class Dog extends Animal {
//     constructor(name: string, species: string) {
//         super(name, species);
//     }
//     makeBark() {
//         console.log('I am barking');
//     }
// }
// class Cat extends Animal {
//     constructor(name: string, species: string) {
//         super(name, species);
//     }
//     makeMeow() {
//         console.log('I am meowing');
//     }
// }
// function isDog(animal: Animal): animal is Dog {
//     return animal instanceof Dog;
// }
// function isCat(animal: Animal): animal is Cat {
//     return animal instanceof Cat;
// }
// function getAnimal(animal: Animal) {
//     if (isDog(animal)) {
//         animal.makeBark();
//     } 
//     else if( isCat(animal)) {
//         animal.makeMeow();
//     } 
//     else {
//         animal.makeSound;
//     }
// }
// const animal1 = new Dog('German Bhai', 'dog'); // instance of Dog class
// const animal2 = new Cat('Persian Bhai', 'cat'); // instance of Cat class
// getAnimal(animal2);
