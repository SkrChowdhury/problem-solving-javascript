/* 

You are given an array:

 var fruits = ['Apple', 'Banana', 'Orange'];

a) Find the index of ‘Banana’ and replace ‘Banana’  with ‘Mango’.

b) Remove ‘Orange’ and add ‘Watermelon’.
*/


 var fruits = ['Apple', 'Banana', 'Orange'];

//   a
 var bananaIndex = fruits.indexOf('Banana');
 console.log('Index of Banana: ' +bananaIndex);

fruits[bananaIndex] = 'Mango';
console.log('AFter Replacing Banana with Mango: ' +fruits);


//   b 

fruits.pop();
console.log('After Removing Orange: '+fruits);


fruits.push('Watermelon');
console.log('After Adding Watermelon: '+fruits)