"use strict";
const searchName = (value) => {
    if (value === null) {
        console.log('There is nothing to search');
    }
    else {
        console.log('Searching');
    }
};
searchName(null);
const getMyCarSpeed = (speed) => {
    if (typeof speed === 'number') {
        const convertedSpeed = (speed * 1000) / 3600;
        console.log(`My speed is ${convertedSpeed}`);
    }
    if (typeof speed === 'string') {
        const [value, unit] = speed.split(' ');
        const convertedSpeed = (parseFloat(value) * 1000) / 3600;
        console.log(`My speed is ${convertedSpeed}`);
    }
    else {
        console.log('There is wrong type');
    }
};
getMyCarSpeed(10);
getMyCarSpeed('10 kmh^1');
getMyCarSpeed(true);
function throwError(message) {
    throw new Error(message);
}
throwError('Error hoyeche');