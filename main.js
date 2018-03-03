
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

    function maxSum(n) {
     var arr = (n+'').split('').map(d=>parseInt(d));
     var max = 0;
     while(arr.length>=4) {
       var sum=arr[0]+arr[1]+arr[2]+arr[3];
       if(sum>max) max=sum;
       arr.shift();
     }
     return max;
   }

   for(var i=1000;i<=nMax;i++) {
     if(maxSum(i)<=maxsm) {
     numbers.push(i);
   }
 }
}

  function formatSolution() {
    console.log(numbers);
    console.log(numbers);
    var length = numbers.length;
    // find mean
    var mean = numbers.reduce(function (a, b) {
      return Math.abs(a) + Math.abs(b);
    }) / numbers.length;

    // find number closes to the mean of current numbers.

    var closestToMean = numbers.reduce(function(prev, curr) {
      return (Math.abs(Math.abs(curr) - Math.abs(mean)) < Math.abs(Math.abs(prev) - Math.abs(mean)) ? Math.abs(curr) : Math.abs(prev));
    });

    // sum of all the numbers

    var sumOfNumbers = numbers.reduce(function (a, b) {
      return Math.abs(a) + Math.abs(b);
    });

    numbers = [];

    return [length, closestToMean, sumOfNumbers];

  }

  return {
    maxSumDig: maxSumDig
  }
})();

console.log(howManyNumbers.maxSumDig(2000, 3)); //[147, 13001, 2080631]
