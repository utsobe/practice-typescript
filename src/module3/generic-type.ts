// type GenericTuple<X,Y> = [X,Y];
// type GenericArray<T> = Array<T>;

// // type RelationWithSalaryType = {name: string, salary: number};
// interface IRelationWithSalaryInterface {
//     name: string, salary: number
// };

// const relation: GenericTuple<string,string> = ['Persian', 'Kate Winslet'];

// const relationWithSalary: GenericTuple<IRelationWithSalaryInterface, string> = [
//      {
//         name: 'Persian',
//         salary: 1000000000000
//      },
//      "Kate Winslet",
// ]



// const rollNumbers:GenericArray<number> = [44,12,4];
// const rollNumbers2: GenericArray<string> = ['44','12','4'];
// const rollNumbers3: GenericArray<boolean> = [true, false];

// type NameRollType = {name: string; roll: number;};

// const userNameAndRollNumber: Array<NameRollType> = [
//     {
//         name: 'Mr. x',
//         roll: 1,
//     },
//     {
//         name: 'Mr. Y',
//         roll: 2, 
//     },
// ];