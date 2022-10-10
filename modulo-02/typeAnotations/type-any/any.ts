

const a:any = 29
const b:any = ['Rivaldo']

const c = a + b;
console.log(c);
//funciona sem nenhum problema por que o tipo any ignora o tipo da variavel.
let sentence
sentence = 'one more test'


const form: {[formFilds: string]: any} = {
    name: 'Rivaldo',
    lastName: 'silva',
    age: 30
}

console.log(form);
