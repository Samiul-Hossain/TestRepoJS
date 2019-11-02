// Function Constructor
/**
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge =  function() {
        console.log(2019-this.yearOfBirth);
    }

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

**/

/* Object.create

var personProto = {
    calcAge: function() {
        console.log(2019 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John' ;
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto,
{
    name: {value : 'Jane' },
    yearOfBirth: {value : 1969 },
    job: {value: 'designer' }
})

*/


//Primitives vs Objects


/*Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);


//Objects
var obj1 = {
    name: 'John',
    age: 26
};
var obj2 = obj1;
obj1.age=30;
console.log(obj1.age);
console.log(obj2.age);


Functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a,b){
    a=30;
    b.city='San Francisco';
}

change(age,obj);

console.log(age);
console.log(obj.city);


*/
 /*
//////////////Function passing

var years = [1990,1965,1937,2005,1997];

function arrayCalc(arr, fn){
    var arrRes = [];
    for(var i = 0;i<years.length;i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}
function calcAge(el){
    return 2019 - el;
}

function fullAge(el){
    return el>= 18
}

function maxHeartRate(el){
    if(el>=18&&el<=81){
        return Math.round(206.9 - (0.67*el));
    }else{
        return -1;
         }
}

var ages = arrayCalc(years,calcAge);
console.log(ages);

var fullAges = arrayCalc(ages,fullAge);

var rates = arrayCalc(ages,maxHeartRate);

console.log(rates);

*/
/*

//////////// VIDEO 9 important FUNCTIONS

function interviewQuestion(job){
    if (job === 'designer'){
        return function(name){
            console.log(name + ', can you please explain what UX design is?');
        }
    }
    else if(job === 'teacher'){
        return function(name){
            console.log('What subject do you teach, '+name+'?');
        }
    }
    else{
        return function(name){
            console.log('Hello '+name+ ', what do you do?');
        }
    }
}


var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');
teacherQuestion('John');
designerQuestion('John');

interviewQuestion('teacher')('Mark');

*/


//VIDEO 10 IIFE
/*
function game(){
    var score = Math.random()*10;
    console.log(score>=5);
}
game();


(function() {
    var score = Math.random()*10;
    console.log(score>=5);
}
)();

(function(goodLuck) {
    var score = Math.random()*10;
    console.log(score>=5);
}
)(5);

*/


////////// CLOSURES VERY IMPORTANT

function retirement(retirementAge){
     var a = ' years left until retirement.'
    return function(yearOfBirth){
        var age = 2019 - yearOfBirth;
        console.log((retirementAge-age)+a);
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceLand = retirement(67);

retirementGermany(1990);
retirementIceLand(1990);
retirementUS(1990);
//retirement(66)(1991);

function interviewQuestion(job) {
    return function(name){
        if(job === 'designer'){
            console.log('do u know what UX design is '+name+'?');
        }else if (job === 'teacher'){
            console.log('what u teach, '+name);
        }else {
            console.log('what u do homeboi '+name);
        }
    }
}
interviewQuestion('teacher')('john');






































