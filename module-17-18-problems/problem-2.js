/*

You and your friends Tom, Jane, Peter and John got their final exam results. Your total 
score is 85, Tom’s total score is 66, Jane’s total score is 95, Peter’s total score is 56 
and John’s total score is 40. The grading chart is
80 or above A grade 
60 or above B grade 
50 or above C grade 
40 or above D grade 
39 or less => F grade

Write a program to find your and your friends’ grades using if-else.
*/

var marksObtained = 85;

if (marksObtained <= 39) {
  console.log('You Got F');
} else if (marksObtained >= 40 && marksObtained <= 49) {
  console.log('You Got D');
} else if (marksObtained >= 50 && marksObtained <= 59) {
  console.log('You Got C');
} else if (marksObtained >= 60 && marksObtained <= 79) {
  console.log('You Got B');
} else if (marksObtained >= 80) {
  console.log('You Got A');
}
