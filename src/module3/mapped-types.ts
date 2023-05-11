// const arrayOfNumbers = [1,2,3]; // to ['1','2','3'];
// const arrayOfStrings = arrayOfNumbers.map((number)=> number.toString());
// console.log(arrayOfStrings);


// type Volume = {
//   height: number;
//   width: number;
//   depth: number
// };

// type Area<T> = {
//     // [key in keyof Volume] : Volume[key]; // volume['height'] --> number
//     readonly [key in keyof T] : T[key];
// }

// const area1 : Area<{height: number, width: string}> = {height: 10, width: '10'};

// // area1.height = 20

// type AreaString = {
//     height: number;
//     width: number;
// };

// type AreaReadOnly = {
//     readonly height: number;
//     readonly width: number;
// }

// const rectangularArea: AreaReadOnly = {
//     height: 10,
//     width: 12,
// };

// // rectangularArea.height = 12;

// // type A = AreaNumber['height']; // look up types
// // type B = keyof AreaNumber; // 'width' | 'height'

// // const obj = {
// //     name: 'Persian',
// // }
// // console.log(obj['name']);

// interface Person {

//     firstName: string;
  
//     lastName: string;
  
//   }
  
  
  
// //   function fullName<T extends Person>(person: T): string {
  
// //     return `${person.firstName} ${person.lastName}`;
  
// //   }

// // //   console.log(fullName());
  
