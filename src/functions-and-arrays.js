// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
if(num1 > num2){
    return num1;
} else {
    return num2;
}
};




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(wordArr) {
    if (wordArr.length === 0){
      return null;
    }
    
    let longestWord = '';
    for (let i = 0; i < wordArr.length; i++) {
      if (wordArr[i].length > longestWord.length) {
        longestWord = wordArr[i];
    }
  }
      
    return longestWord;
  }




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numArr){
    let sum = 0;
    for (let i = 0; i < numArr.length; i++){
      sum += numArr[i];
    }
    return sum;
  }
  




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numArr){
    if (numArr.length === 0) {
        return 0;
    }
    let sum = sumNumbers(numArr);
    return sum / numArr.length
  }




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];



function doesWordExist(array, searchTerm) {
  if (array.length === 0){
    return null;
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] === searchTerm) {
      return true;
    }
  }
  return false;
}
