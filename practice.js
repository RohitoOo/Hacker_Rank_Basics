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





// First Factorial Using Recursion

function FirstFactorial(num) {

if ( num == 1 ) {

    return num

}
else {
    return num * FirstFactorial(num - 1 )

}

}

FirstFactorial(4) // 4*3*2*1  // 24



// Reverse a String


function FirstReverse(str) {


  str = str
  .split('')
  .reverse()
  .join('')

  return str;

}


FirstReverse("Hello") // olleH




// Letter Changes using RegEX


function LetterChanges(str) {

  // we will replace every letter in the string with the letter following it
  // by first getting the charCode number of the letter, adding 1 to it, then
  // converting this new charCode number to a letter using the fromCharCode function
  // we also check to see if the character is z and if so we simply convert the z to an a
  var converted = str.replace(/[a-z]/gi, function(char) {
    return (char === 'z' || char === 'Z') ? 'a' : String.fromCharCode(char.charCodeAt() + 1);
  });

  // we have now successfully converted each letter to the letter following it
  // in the alphabet, and all we need to do now is capitalize the vowels
  var capitalized = converted.replace(/a|e|i|o|u/gi, function(vowel) {
    return vowel.toUpperCase();
  });

  // return the final string
  return capitalized;

}

LetterChanges("az1"); // bA1

// Simple Adding

function SimpleAdding(num) {

 var sum;

 sum =  (num  *( num+1))  / 2

 return sum

}

SimpleAdding(4) // 10



// Capitalize firt Letter of Every Word

function LetterCapitalize(str) {

let words =  str.split(' ')

for ( i = 0 ; i < words.length ; i++) {

 words[i] = words[i].substring(0,1).toUpperCase() + words[i].substring(1)

}

words = words.join(' ')
return words

}

LetterCapitalize("i love you baby"); // I Love You Baby



// Check if num 2 is greater than num1

function CheckNums(num1,num2) {

if ( num2 > num1 ) {
  return true
}

else if (num1 == num2 ){
  return -1
}
else

return false

}

CheckNums(10 , 100 )  // true


// Time Convert To Hours and Minutes



function TimeConvert(num) {

var minutes;
var hours;

hours = (parseInt(num/60) )

if ( num >= 60 ) {
minutes = num % 60
}

if ( num < 60 ) {
minutes = num
}

num = hours + ":" + minutes

return num

}

TimeConvert(45) // 0 : 45




// Sort in Ascending Order

function AlphabetSoup(str) {

str = str
.toLowerCase()
.split('')
.sort()
.join('')

return str

}

AlphabetSoup("cBdz") // bcdz



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
