
enum Language{
    portuguese,
    english,
    spanish,
    french
}

console.log(Language);

enum day{
    monday = 'mom',
    tuesday = 'tues',
    wednesday = 'wed',
    thursday = 'thu',
    friday = 'fri',
    saturday = 'sat',
    sunday = 'sun'
}

console.log(day.saturday);
/*
const enum Food{
    pasta,
    hamburger,
    pie,
    salad
}

function food (f: Food){
    console.log('very goog foods');
    
}

console.log(food(Food.hamburger));
console.log(food(Food.pasta));
console.log(food(5));
*/

const enum Food{
    pasta = 'pasta',
    hamburger = 'hunburger',
    pie = 'pie',
    salad = 'salad'
}

function food (f: Food){
    console.log('very goog foods');
    
}

//console.log(food(Food.hamburger));
//console.log(food(Food.pasta));
//console.log(food(5));

enum Task{
    Todo,
    Progress,
    Done
}

const taskTodo = {
    id:1,
    status: Task.Done,
    mesage: "congratulations"
}

if(taskTodo.status === Task.Done){
    console.log('send email');
    
}