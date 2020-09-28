// import functions and grab DOM elements
import { yesChecker } from './test/yes-checker.js'

const button = document.getElementById('quiz-button');
const results = document.getElementById('quiz-score');

// initialize state

// set event listeners to update state and DOM
button.addEventListener('click', ()=> {
    const userName = prompt("Please enter your name to continue");
    
    const userConfirm = confirm("Click OK to continue or Cancel to bail");
        if (!userConfirm){
            alert('Suit yourself! You really missed out!');
            return;
        }

    let yesAnswers = 0;

    const yearBorn = prompt(`Alright ${userName} question number 1: Was Shane born in 1983?`);
        if (yesChecker(yearBorn)) {
            yesAnswers++;
        }
    
    const marriagePlace = prompt('Number two: Did Shane meet his wife at Modern Monkey CrossFit?');
        if (!yesChecker(marriagePlace)) {
            yesAnswers++;
        }

    const anyKids = prompt(`Okay ${userName}, your final question: Does Shane have any children?`);
        if (yesChecker(anyKids)) {
            yesAnswers++;
        }
        console.log(yesAnswers);
        const finalScore = Math.floor(100*(yesAnswers/3));

    alert(`Wow ${userName} you really did it! We'll tally your score and post it below!`);
        if(yesAnswers < 3){
            results.textContent = `I honestly expected more from you ${userName}. You scored ${finalScore}% correct. Try again?`;
        } else {
            results.textContent = `Wow ${userName} you scored ${finalScore}%! Great job!;`
        }
        })