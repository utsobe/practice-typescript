let emni: any;

emni = 'Next level web development';

<string>emni.length;

function kgToGram(param: string|number):string|number|undefined {
    if(typeof param === 'string') {
        const value = parseFloat(param)*1000;
        return `The converted result is: ${value} gram`;
    }
    if(typeof param === 'number'){
        const value = param * 1000;
        return value;
    }
}

const resultToBeNumber = <number>kgToGram(1000);
const resultToBeString = <string>kgToGram('1000');


type CustomErrorType = {
    message: string;
}

try{

}catch (err) {
    console.log((err as CustomErrorType).message);
}