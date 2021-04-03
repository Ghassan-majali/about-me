'use strict'
let score = 0;
// wellcome alert 

let userName = prompt('tab your name please ');
// console.log(userName);
alert('WELCOME,let me Introdus myself Mr / Mrs ' + userName)

// guessing game question

alert('first of all let me ask you a few questions about me to see if u will have correct answers.')

// first question 
function firstQuestion() {


    

    let myAge = prompt("do you think i'm older than 28 ?");
    if (myAge.toLowerCase() == "yes" || myAge.toLowerCase() == "y") {
        alert("Correct");
        score++
    } else if (myAge.toLowerCase() == "no" || myAge.toLowerCase() == "n") {
        alert("Wrong");
    } else {
        alert("Enter only yes ' y or no ' n .");
    }
}
firstQuestion();

// second question 

function secondQuestion(){

let myStudy = prompt('do i study in the same Field ? ');
if (myStudy.toLowerCase() == "yes" || myStudy.toLowerCase() == "y") {
    alert("good answer");
    score++
} else if (myStudy.toLowerCase() == "no" || myStudy.toLowerCase() == "n") {
    alert("oops");
} else {
    alert("Enter only yes ' y or no ' n .");
}
}
secondQuestion();

// third question 
function thirdQuestion()
{
let myJob = prompt('do i have work in programming befor ?');
if (myJob.toLowerCase() == "yes" || myJob.toLowerCase() == "y") {
    alert("sorry");
} else if (myJob.toLowerCase() == "no" || myJob.toLowerCase() == "n") {
    alert("that's another correct answer");
    score++
} else {
    alert("Enter only yes ' y or no ' n .");
}
}
thirdQuestion();

// four question 
function fourQuestion(){

    
    let food = prompt('do i love food ?');
    if (food.toLowerCase() == "yes" || food.toLowerCase() == "y") {
        alert("woow");
        score++
    } else if (food.toLowerCase() == "no" || food.toLowerCase() == "n") {
        alert("everybody love food");
    } else {
        alert("Enter only yes ' y or no ' n .");
    }
}
fourQuestion();

// five question 

function fiveQuestion(){

let witherLove = prompt('do i love winter ?');
if (witherLove.toLowerCase() == "yes" || witherLove.toLowerCase() == "y") {
    alert("Correct");
    score++

} else if (witherLove.toLowerCase() == "no" || witherLove.toLowerCase() == "n") {
    alert("Wrong");
} else {
    alert("Enter only yes ' y or no ' n .");
}} fiveQuestion();

// six question
 function sixQuestion(){
alert('guess number between 1 and 10 ...you have 4 attempets to try');

let gussed = null;

for (let i = 0; i < 4; i++) {
    gussed = prompt(' Guess a number from 1 to 10 : ');
    gussed = parseInt(gussed);

    if (gussed >= 5 && gussed < 7) {
        alert(' low but too close');
    } else if (gussed <= 9 && gussed > 7) {
        alert(' you are to close , try a smaler number ');
    }
    else if (gussed > 7) {

        gussed = alert('too high num ');
    } else if (gussed < 7) {
        gussed = alert('too low num ');
    }
    else if (gussed === 7) {
        alert('you are in fire')      
        score++;
        break;
    }
    else {
        alert('sry try again ')
    }
    if (i === 3) {
        alert('correct answer 7')
    }
}
}  sixQuestion();

// 7 quesion 

function sevenQuesion()
{
    let theAnswer = ['BMW', 'MERCEDES', 'FERRARI', 'LUXES', 'BUGATTI', 'RANGEROVER', 'DODGE', 'TOYOTA',]


for (let i = 0; i < 6; i++) {

    let userAnswer = prompt('what is your best car ?');
    userAnswer = userAnswer.toUpperCase();
    for (let j = 0; j < theAnswer.length; j++) {
        if (theAnswer[j] === userAnswer) {
            alert('you are awosem');
            score++;
            i = 7;
            break;
        }
    }
}
} 
sevenQuesion();

// wellcome masseg 

alert('hello ' + userName + ' glad to have you hear ')

alert(' you got ' + score + ' of 7 ');
