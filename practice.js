// Longest Word

function LongestWord(sen) {

var longest = ""

sen = sen
.replace(/W/g , " ")

words = sen.split(' ')

for ( i = 0 ; i < words.length ; i ++) {

  if(words[i].length > longest.length) {
    longest = words[i]
  }

}

return longest
}

LongestWord("I love Javascript")  // Javascript





// First Factorial

function FirstFactorial(num) {

if ( num == 1 ) {

    return num

}
else {
    return num * FirstFactorial(num - 1 )

}


}

FirstFactorial(4) // 10

 



var array = [1,-2,0,0,4,34,4,32,-54,-543,54,543,0 ,0,0,0];

function abc(arr) {

  var zeros = 0;
  var positive = 0;
  var negative = 0;

  arr.map((num) => {

    if (num == 0) {
      zeros++
    }

    if (num > 0) {
      positive++
    }
    if (num < 0) {
      negative++
    }

  })

  answer = {
    zeros: zeros / arr.length,
    positive: positive / arr.length,
    negative: negative / arr.length
  }

  return answer

}

abc(array);


// { zeros: 0.375, positive: 0.375, negative: 0.1875 }




var matrix = [

[3],
[11, 2 ,4],
[4, 5 ,6],
[10 ,8 ,-12]

]

function abc(a) {
  arr1 = 0;
  arr2 = 0;
  var final = 0;

  for (let i = 1, j = 0, k = 3; i < a.length, j < a.length - 1; i++, j++, k--) {

    arr1 += a[i][j]

    arr2 += a[k][j]

  }
  final = arr1 - arr2

  final = Math.abs(final)

  return final
}

abc(matrix);

// 15

// var a = [1,5,2] ;

// var b =  ;

var sum = 0;
function check(a) {

  a.map((each) => {
    sum += each
  })
  return sum

}

check([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])

// 5000000015



var ar = [1, 2, 3, 4]

function abc(ar) {
  let sum = 0;
  ar.map((each) => {

    return sum += each

  })

  return "Sum : " + sum

}

abc(ar);

// 'Sum : 10'


function staircase(num) {

  for (let i = 1, j = num; i < num; i++, j--) {

    console.log(" ".repeat(j) + "#".repeat(i))

  }
}

staircase(10)


//         #
//        ##
//       ###
//      ####
//     #####
//    ######
//   #######
//  ########
// #########


function minMax(num) {

  var sumFrw = 0;
  var sumBack = 0;

  for (let i = 0; i < num.length; i++) {
    sumFrw += num[i]
    sumBack += num[i]
  }
  sumFrw = sumFrw - num[0]
  sumBack = sumBack - num[num.length - 1]

  console.log("Sum of Array[Second] to Array[Last] = " + sumFrw)
console.log("Sum of Array[First] to Array[SecondLast] = " + sumBack)
}

minMax([1, 2, 3, 4, 5]);

// Sum of Array[Second] to Array[Last] = 14
// Sum of Array[First] to Array[SecondLast] = 10




var arr = [1,12,12,12,1,3,6,6]
var largest = 0;
var secondLargest = 0
var count = 0;
var Count = 0
for (let i = 0; i < arr.length; i++) {

  if (arr[i] > largest) {
    largest = arr[i]
  }

  if (arr[i] < largest && arr[i] > secondLargest)
    secondLargest = arr[i]
}

arr.map((num) => {

  if (largest == num) {
    count++
  }

})

arr.map((num) => {

  if (secondLargest == num) {
    Count++
  }

})


console.log("Largest Number: " + largest + " Count : " + count)
console.log("Second Largest Number: " + secondLargest + " Count : " + Count)


// Largest Number: 12 Count : 3
// Second Largest Number: 6 Count : 2

var time = "6:00:PM";
var message = ""

time = time.split(':')

time[0] = parseInt(time[0])

if (time.includes("PM")) {
  time[0] = time[0] + 12
}

time.pop(time[time.length - 1])

time[0] = Number(time[0])

time = time.join(":")

console.log("Time in 24 Hour Clock : " + time);

// Time in 24 Hour Clock : 18:00


var grades = [73, 67, 38, 33]

grades.map((each) => {

  if (each > 37 && each % 5 > 2) {

    return "Rounded Grades : " + (
    each + (5 - each % 5))

  }
  return each

})

// [ 'Rounded Grades : 75', 67, 'Rounded Grades : 40', 33 ]
