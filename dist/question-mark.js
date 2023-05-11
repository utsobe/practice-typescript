"use strict";
// ternary operator
var _a, _b;
const age = 22;
// if(age>=18) {
//     console.log('Yes');
// } else {
//     console.log('No');
// }
const isAdult = age >= 18 ? 'Yes' : 'No';
console.log(isAdult);
// Nullish coalescing oeration
// Null and Undefined
const isAuthenticatedUser = '';
const userName = isAuthenticatedUser !== null && isAuthenticatedUser !== void 0 ? isAuthenticatedUser : 'Guest';
const userName2 = isAuthenticatedUser ? isAuthenticatedUser : 'Guest';
console.log({ userName }, { userName2 });
const manush1 = {
    name: 'Manush',
    age: 100,
    address: {
        city: "No City",
        road: "No Road",
    }
};
const home = (_b = (_a = manush1 === null || manush1 === void 0 ? void 0 : manush1.address) === null || _a === void 0 ? void 0 : _a.home) !== null && _b !== void 0 ? _b : 'No home';
console.log(home);
function generateAdder(a) {
    return function (b) {
        return a + b;
    };
}
const addTwo = generateAdder(2);
console.log(addTwo(3));
console.log(addTwo(5));
