"use strict";
// // normal funtion
// //default parameter
// function add( num1:number, num2:number=10):number {
//     return num1 + num2;
// }
// add(2,2);
// //spread opearator
// const myFriends = ['chandler', 'joey', 'ross'];
// const newFriends = ['monica', 'rachel','pheobe'];
// const myBestfriend = {
//     fullName: 'Abul Bashar',
//     age:24,
// }
// const [bestfrind] = myFriends;
// const {fullName: string}=myBestfriend;
// console.log({string});
// myFriends.push(...newFriends);
// // console.log(myFriends);
// //rest parameter
// const greetFriends = (...friends:string[]):void => friends.forEach((friend)=> console.log(`Hi ${friend}`));
// greetFriends('kshem', 'hashem','gashem','lashem', 'bangla bhai', 'english bhai');
// // array and object destructuring
// const addArrow = (num1:number, num2:number):number => num1 + num2;
// const arr = [1,4,5];
// const newArray = arr.map((e:number)=> e * e);
// const person : {
//     name:string,
//     balance: number
//     addBalance(money: number):void;
// }= {
//     name: 'Mezba',
//     balance: 5,
//     addBalance(money:number) {
//        console.log(`My New Balance is ${this.balance + money}`);
//     }
// }
