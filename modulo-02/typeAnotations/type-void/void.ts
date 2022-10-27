
function logError(messageError: string): void{
    console.error(messageError)
}

logError("nullpointerexception")

function logError2(messageError: string): string{ //mesmo sem o void o typeScript infere o tipo string
    return messageError;
}

const logError3 = (messageError: string) =>{
    return messageError;
}

let MyTest: void;
/*
MyTest = 1; //error
MyTest = "text" //error
MyTest = undefined //ok
*/