'use strict'

// wellcome alert 

let userName = prompt('tab your name please ');
// console.log(userName);
alert('WELCOME,let me Introdus myself Mr / Mrs '+ userName )

// guessing game question

alert ('first of all let me ask you a few questions about me to see if u will have correct answers.')

// first question 

let myAge = prompt("do you think i'm older than 28 ?" );
if(myAge.toLowerCase() == "yes" || myAge.toLowerCase() == "y"){
    alert("Correct");
    // console.log(myAge);
}else if(myAge.toLowerCase() == "no" || myAge.toLowerCase() == "n"){
    alert("Wrong");
    // console.log(myAge);
}else{
    alert("Enter only yes ' y or no ' n .");
}
// second question 

let myStudy = prompt('do i study in the same Field ? ');
if(myStudy.toLowerCase() == "yes" || myStudy.toLowerCase() == "y"){
    alert("good answer");
    // console.log(myStudy);
}else if(myStudy.toLowerCase() == "no" || myStudy.toLowerCase() == "n"){
    alert("oops");
    // console.log(myStudy);
}else{
    alert("Enter only yes ' y or no ' n .");
}
// third question 

let myJob = prompt('do i have work in programming befor ?');
if(myJob.toLowerCase() == "yes" || myJob.toLowerCase() == "y"){
    alert("sorry");
    // console.log(myJob);
}else if(myJob.toLowerCase() == "no" || myJob.toLowerCase() == "n"){
    alert("that's another correct answer");
    // console.log(myJob);
}else{
    alert("Enter only yes ' y or no ' n .");
}
// four question 

let food = prompt('do i love food ?');
if(food.toLowerCase() == "yes" || food.toLowerCase() == "y"){
    alert("woow");
    // console.log(food);
}else if(food.toLowerCase() == "no" || food.toLowerCase() == "n"){
    alert("everybody love food");
    // console.log(food);
}else{
    alert("Enter only yes ' y or no ' n .");
}
// five question 

let witherLove = prompt('do i love winter ?');
if(witherLove.toLowerCase() == "yes" || witherLove.toLowerCase() == "y"){
    alert("Correct");
    // console.log(witherLove);
}else if(witherLove.toLowerCase() == "no" || witherLove.toLowerCase() == "n"){
    alert("Wrong");
    // console.log(witherLove);
}else{
    alert("Enter only yes ' y or no ' n .");
}