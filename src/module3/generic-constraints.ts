// // Arrow Function
// const createArray= (param: string): string[] => {
//     return [param];
// };

// const createArray1= <X,Y>(param1: X, param2: Y): [X,Y] => {
//     return [param1,param2];
// };

// function createArray2<X,Y>(param1: X, param2: Y): [X,Y]  {
//     return [param1,param2];
// };

// const result1 = createArray1<string, string>('Bangladesh', 'I love bangladesh');
// const result2 = createArray1<boolean, Array<String>>(false, ['USA']);
// const result3 = createArray1<Name, boolean>({name: "Bangladesh"}, false);

// type Name = {name: string};

// // Spread Operator




// // const newData = {...myInfo, crush};

// type MandatoryTypes = {name:string, age: number, salary: number};
// interface MandatoryInterface {name:string, age: number, salary: number};

// const addMeInMyCrushMind = <T extends MandatoryInterface>(myInfo: T) => {
//     const crush = "kate Winslet";
//     const newData = {...myInfo,crush};
//     return newData; 
// }

// type MyInfoType = {
//     name: string;
//     age: number;
//     salary: number;
//     other1: false,
//     other2: null
// }

// const myInfo = {
//     name: 'Persian',
//     age: 100,
//     salary: 1000000000,
//     other1:false,
//     other2: null
// }

// const result5 = addMeInMyCrushMind(myInfo);