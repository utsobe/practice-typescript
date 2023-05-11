"use strict";
// const a: newType = "name";
// const b: NewTypeUsingKeyof = "age";
function getProperty(obj, key) {
    obj[key];
}
const property = getProperty({ name: 'Mr.X', age: 100 }, 'age');
// const a = {name: 'Mr.X', age: 100};
// ({name: 'Mr. X', age: 100}, 'age') // 100
