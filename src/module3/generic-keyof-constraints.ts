type PersonType = {
    name: string;
    age: number;
    address: string;
}

type newType  = 'name' | 'age' | 'address'; // manually korechi

type NewTypeUsingKeyof = keyof PersonType

// const a: newType = "name";
// const b: NewTypeUsingKeyof = "age";

function getProperty<X,Y extends keyof X>(obj: X, key: Y){
obj[key]
}

const property = getProperty({name: 'Mr.X', age: 100}, 'age');

// const a = {name: 'Mr.X', age: 100};



// ({name: 'Mr. X', age: 100}, 'age') // 100