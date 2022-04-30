let task = [{
        'name': 'Buy milk from the shop',
        'duration': 20,
        'priority': 1
    }, {
        'name': 'Clean the house',
        'duration': 120,
        'priority': 3
    }, {
        'name': 'Study JS functions',
        'duration': 180,
        'priority': 1
    },

];
console.log("---Ejercicio1")
   console.log("Modo iterativo")
  function uno(array) {
   var res =" ";
   for (var i = 0; i < array.length; i++) {

       res =(res+ array[i]. name + " ")
   }
   return res;

}
console.log(uno(task))

console.log("Version declarativa")
var taskname = task
    .map(v => v.name)
console.log(taskname)

console.log("---Ejercicio 2")
console.log("Metodo iterativo")

function ver(array) {

   var res =" "
   
   for (var i = 0; i  < array.length; i++) {
         s = array[i].priority
       if ( s == 1) {
         (res += array[i]. name + " ") 
      
       }
   }
   return res;
}
console.log(ver(task))

console.log("Metodo declarativo")

var metodo2 = task
    .filter(v => v.priority === 1)
    .map(v => [v.name, v.priority ]);

console.log(metodo2);
console.log("---Ejercicio 3:");

function sumPrio(array) {
    let res = 0;
    for (let i = 0; i < array.length; i++) {

        res += array[i].duration

    }
    return res;

}

console.log("Version iterativa")
console.log(sumPrio(task))

console.log("Version declarativa")
var taskPriory = task
    .map(v => v.duration)
    .reduce((sum, duration) => sum + duration);
console.log(taskPriory)

console.log("---Ejercicio 4:");

const vehicles = [
    { make: 'Honda', model: 'CR-V', type: 'suv', price: 24045 },
    { make: 'Honda', model: 'Accord', type: 'sedan', price: 22455 },
    { make: 'Mazda', model: 'Mazda 6', type: 'sedan', price: 24195 },
    { make: 'Mazda', model: 'CX-9', type: 'suv', price: 31520 },
    { make: 'Toyota', model: '4Runner', type: 'suv', price: 34210 },
    { make: 'Toyota', model: 'Sequoia', type: 'suv', price: 45560 },
    { make: 'Toyota', model: 'Tacoma', type: 'truck', price: 24320 },
    { make: 'Ford', model: 'F-150', type: 'truck', price: 27110 },
    { make: 'Ford', model: 'Fusion', type: 'sedan', price: 22120 },
    { make: 'Ford', model: 'Explorer', type: 'suv', price: 31660 }
];

function priceSUV(arr) {
    let res = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].type == 'suv') {
            res.push(arr[i].price)
        }
    }
    return res;
}
console.log("Version iterativa");
console.log(priceSUV(vehicles));

console.log("Version declarativa");
 //Make and price
//*
var averageSUVPrice = vehicles
    .filter(v => v.type === 'suv')
    .map(v => [v.make, v.price]);

console.log(averageSUVPrice);

//Only make
var averageSUVPrice = vehicles
    .filter(v => v.type === 'suv')
    .map(v => v.price);
console.log(averageSUVPrice);

console.log("---Ejercicio 5:");

var personeel = [

    {
        id: 5,
        name: 'Luke Skywalker',
        pilotingScore: 98,
        shootingScore: 56,
        isForceUser: true
    },
    {
        id: 82,
        name: 'Sabine Wren',
        pilotingScore: 73,
        shootingScore: 99,
        isForceUser: false
    },
    {
        id: 22,
        name: "Zeb Orellios",
        pilotingScore: 20,
        shootingScore: 59,
        isForceUser: false,
    },
    {
        id: 15,
        name: "Ezra Bridger",
        pilotingScore: 43,
        shootingScore: 67,
        isForceUser: true,
    },
    {
        id: 11,
        name: "Caleb Dume",
        pilotingScore: 71,
        shootingScore: 85,
        isForceUser: true,
    }
];

console.log("Version iterativa");

function sum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {

        if (array[i].isForceUser == true) {
            sum += array[i].shootingScore + array[i].pilotingScore;
        }

    }
    return sum;
}
console.log(sum(personeel));

console.log("Version declarativa");
var scoreTotal = personeel
    .filter(v => v.isForceUser == true)
    .map(v => v.pilotingScore + v.shootingScore)
    .reduce((sum, acc) => sum + acc);
console.log(scoreTotal);