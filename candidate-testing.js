const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? "; 
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = [
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5+3)/2*10 = ? ",
  "Given the array[8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the the minimum crew size for the ISS? "];
let correctAnswers = [
  "Sally Ride ",
  "true ",
  "40 ",
  "Trajectory ",
  "3"];
let candidateAnswers = [];


function askForName() {
  candidateName = input.question ("What is your name? ");
  // TODO 1.1b: Ask for candidate's name //

}

function askQuestion() {
  //candidateAnswer = input.question ("Who was the first American woman in space? ");

  
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  // on the first iteration of the loop, i starts at 0
  // is i < 4? since i is less than 0, that statement is true
  // if that statement is true, then complete this iteration, and go on to the next one
  
  // ask a series of questions and push the user responses (answers) into the candidateAnswers array
for(let i = 0; i < 5; i++ ){
  // console.log(questions[i]);// print out the question in the question array at position i (0,1,2,3,4)
  // ask the question (input)
  let response = input.question(questions[i]); // is a method just like console.log() we have to provide the argument that represents the question to be asked input.question()
  // console.log({response});

  candidateAnswers.push(response)

}
  // building a for loop that will ask a series of questions and push the user respones into the candidateAnswers array (what are looping over?) -> questions array

  console.log(candidateAnswers);
}

function gradeQuiz(candidateAnswers) {
  // if candidateAnswer is correct, print feedback to candidate 
  // if candidateAnswer === correctAnswer, then console.log some feedback
  // if (condition1) {
//     code executes here ONLY if condition1 is true
// } else {
//     code here if condition1 and condition2 are both false
// }
  if (candidateAnswer === correctAnswer){ 
    console.log('Eureka!');
  }
  else {
    console.log('Swiper No Swiping!');
  }


  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // ;
for(let i = 0; i< 5; i++){
  // 1) Who was the first American woman in space?
  // Your Answer: sally ride
  // Correct Answer: Sally Ride
  console.log(`${i+1}) ${questions[i]}`); // `normal string ${variableName} ${5 + 5}`
  console.log(`Your answer: ${candidateAnswers[i]}`);
  console.log(`Correct Answer: ${correctAnswers[i]}`);
  console.log();
}
  let grade = input.candidateAnswers * 20;
  

  return grade 80.00 (if input.candidateAnswers = correctAnswer ;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log (`Hello ${candidateName}`); //template literal//
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};