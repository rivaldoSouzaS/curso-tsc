function messageError(error:string):never{
    throw new Error(error)
}

//console.log(messageError("my error"));

function regectMessage(){
    return Error("my error 02")
}

console.log(regectMessage());

// const infinityLoop = loop(){
//     while(true){
//         console.log('ok');
        
//     }
// } ctrl + ;

//console.log(infinityLoop);

// const something:void = null;

// let something2:never = null;


