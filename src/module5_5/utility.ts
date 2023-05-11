// pick

interface Person {
    name: string;
    email?: string;
    contactNo: string;
}

type ContactNo = Pick<Person, "contactNo" | "email">;

// Omit

type Name = Omit<Person, "email"|"contactNo">;


 // partial and required

 // to make all the properties be optional type

 type Optional = Partial<Person>;
 type RequiredProps = Required<Person>;

 const person: Readonly<Person> = {
    name: "Persian",
    email: 'abc@gmail.com',
    contactNo: '2342',
 }

//  person.name= 'Forhan';

 // Record type

//  type myObj = {
//     a:string,
//     b:string,
//     c:string,
//  }

// using index signature
// type myObj = {
//     [key: string] : string;
// }

// Record
type myObj = Record<string,string>;

 const obj: myObj = {
    a: '1',
    b: '2',
    c: '3',
    d: '4'
 }

