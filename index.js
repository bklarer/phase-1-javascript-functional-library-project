//create function that creates array if the input is an object

function makeArray(data) {
    return (Array.isArray(data)) ? data : Object.values(data)
}


function myEach (data, callbackF) {
    const formattedData = makeArray(data)
    for (let i = 0; i<formattedData.length; i++) {
        callbackF(formattedData[i])
    } 
    return data
} 




function myMap (data, callbackF) {
    const formattedData = makeArray(data)
    const arrayOutput = []

    for(let i = 0; i<formattedData.length; i++) {
        arrayOutput.push(callbackF(formattedData[i]))
    }
    return arrayOutput
}



function myReduce (data, callbackF, accumulator) {
    let formattedData = makeArray(data);

    if (!accumulator) {
        accumulator = formattedData[0];
        formattedData = formattedData.slice(1);
    }

    for(let i = 0; i<formattedData.length; i++) {
        accumulator = callbackF(accumulator, formattedData[i], formattedData)
    } return accumulator;
}

function myFind (data, indentifier) {
    const formattedData = makeArray(data)
    for(let i=0; i<formattedData.length;i++) {
        if (indentifier(formattedData[i])) return formattedData[i]
    } return undefined;
}

function myFilter(data, identifier) {
    const formattedData = makeArray(data)
    const newArray = [];
    for(let i = 0; i<formattedData.length; i++) {
        if (identifier(formattedData[i])) newArray.push(formattedData[i])
    } return newArray
}

function mySize(data) {
    const formattedData = makeArray(data)
    return formattedData.length;
}

function myFirst(data, int=false) {//set default
    const formattedData = makeArray(data)
    return (int) ? formattedData.slice(0, int) : formattedData[0]

}

function myLast(data, int=false) {
    const formattedData = makeArray(data)
    return (int) ? formattedData.slice(formattedData.length-int, formattedData.length) : formattedData[formattedData.length-1];
}

//don't need to turn the below functions into an array. They need to be an object.

function myKeys(data) {
    const keys = []
    for(let key in data) {
        keys.push(key)
    } return keys
}

function myValues(data) {
    const values = [];
    for (let key in data) {
        values.push(data[key])
    } return values
}