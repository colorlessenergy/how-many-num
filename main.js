
// psuedo code...

// numbers;

// to get the correct numbers into an array

// loop through numbers starting from 1000 to the number max.
// add up four consecutive digits.. in every number given..
// if the number has more than 4 digits
    // split the number and add every four.
// sum of the digits has to greater than or equal to max sum.
// push it into the numbers arr. otherwise keep looping..


// return an array with the
    // length of the numbers arr.
    // the number closes to the mean of the number array;
    // the value of sum of all the numbers in the number array;

var howManyNumbers = (function () {

  var numbers = [];

  function maxSumDig(nmax, maxsm) {
    fillNumbers(nmax, maxsm);
    return formatSolution();
  }

  function fillNumbers(nMax, maxsm) {
    var sum = 0;
    var iterationIncrease = 0;
    for (let i = 1000; i <= nMax; i++) {
      var currentNumber = i.toString().split('');

      if (currentNumber.length > 4) {
        while (currentNumber.length >= 4) {
          for (let j = 0; j < 4; j++) {
            sum += Number(currentNumber[j]);
          }
          if (sum <= maxsm) {
            console.log(currentNumber, sum, maxsm)

            numbers.push(i);
          }
          sum = 0;
          currentNumber.shift();
        }
      } else if (currentNumber.length === 4) {
        for (let j = 0; j < currentNumber.length; j++) {
          sum += Number(currentNumber[j]);
        }
        if (sum <= maxsm) {
          numbers.push(i);
        }
        sum = 0;
      }
    }
  }

  function formatSolution() {

    var length = numbers.length;

    // find mean
    var mean = numbers.reduce(function (a, b) {
      return a + b;
    }) / numbers.length;

    // find number closes to the mean of current numbers.

    var closestToMean = numbers.reduce(function(prev, curr) {
      return (Math.abs(curr - mean) < Math.abs(prev - mean) ? curr : prev);
    });

    // sum of all the numbers

    var sumOfNumbers = numbers.reduce(function (a, b) {
      return a + b;
    })

    numbers = [];

    return [length, closestToMean, sumOfNumbers];

  }

  return {
    maxSumDig: maxSumDig
  }
})();

console.log(howManyNumbers.maxSumDig(76619, 4)); //[147, 13001, 2080631]
