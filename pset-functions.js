/***********
Problem: Blackjack

Create a function named `blackJack()` that accepts two parameters:
playerCardScore (number)
dealerCardScore (number)

Return whichever value is nearest (or equal) to 21 without going over. Return 0 if both scores go over 21.

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. blackJack(19, 21)

   Result: 21

2. blackJack(22, 22)

   Result: 0

3. blackJack(19, 22)

   Result: 19

3. blackJack(21, 21)

   Result: 21

************/
console.log('Problem 1:')

// Add your code below this line

function blackJack(pScore, dScore) {
   let result

   if ((pScore>21)&&(dScore>21)) {
      result = 0
   } else if (pScore>21) {
      result = dScore
   } else if (dScore>21) {
      result = pScore
   } else if (dScore >= pScore) {
      result = dScore
   } else {
      result = pScore
   }
   return result
}

console.log(blackJack(21, 21))

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Scrabble Scorer

Create a function named `scrabbleScore()` that accepts a parameter called "word". The function should use the following table to calculate the Scrabble score of a provided word:

```
Letter                           Value
A, E, I, O, U, L, N, R, S, T       1
D, G                               2
B, C, M, P                         3
F, H, V, W, Y                      4
K                                  5
J, X                               8
Q, Z                               10
```

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. scrabbleScore("cabbage")
   Note: c = 3, a = 1 (twice), b = 3 (twice), g = 2, e = 1

   Expected Result: 14

2. scrabbleScore("javascript")

   Expected Result: 24

3. scrabbleScore("function")

   Expected Result: 13

************/
console.log('Problem 2:')

// Add your code below this line

let word = "function"
word = word.toUpperCase()
let wordScore = 0

for (i=0; i<word.length; i++) {
   wordScore = wordScore + getLetterScore(word.charAt(i))
}

console.log(wordScore)

function getLetterScore(letter) {
   let letterScore = 0
   switch(letter) {
      case 'A': 
      case 'E': 
      case 'I':
      case 'O':
      case 'U':
      case 'L':
      case 'N':
      case 'R':
      case 'S':
      case 'T': 
         letterScore = 1   
         break
      case 'D':
      case 'G': 
         letterScore = 2  
         break
      case 'B':
      case 'C':
      case 'M':
      case 'P':
         letterScore = 3 
         break
      case 'F':
      case 'H':
      case 'V':
      case 'W':
      case 'Y': 
         letterScore = 4
         break
      case 'K':
         letterScore = 5
         break
      case 'J':
      case 'X': 
         letterScore = 8
         break
      case 'Q':
      case 'Z':
         letterScore = 10
         break
      default:
         break
      }
   return letterScore
}


// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Palindromes

Palindromes are words which read the same forward as backwards. For example, "madam" and "noon" are both palindromes.

Create a function named `isPalindrome()` that accepts a parameter called "word". The function will return true if the word is a palindrome and false if it is not.

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. isPalindrome("noon")

   Expected Result: true

2. isPalindrome("racecar")

   Expected Result: true

3. isPalindrome("moon")

   Expected Result: false

4. isPalindrome("run")

   Expected Result: false

************/
console.log('Problem 3:')

// Add your code below this line

// maybe use For While loop here?
function isPalidrome(word) {
   let result = true
   for (i=0; i<word.length/2; i++) {
      if ((result === true) && (word[i] === word[word.length-1-i])) {
         //do nothing and continue the loop
      } else {
         result = false
      }
   }
   return result
}

console.log(isPalidrome("run"))

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Double Letter Checker

Create a function that takes a "word" as a parameter and returns true if the word has two consecutive identical letters.

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. doubleLetters("loop")

   Expected Result: true

2. doubleLetters("rune")

   Expected Result: false

3. doubleLetters("apple")

   Expected Result: true

************/
console.log('Problem 4:')

// Add your code below this line

function checkDoubleLetter(word) {
   let result = false
   if (word.length === 1) {
      result = false
   } else {
      for (i=1; i<word.length; i++) { // should prob use for while loop
         if (word.charAt(i) === word.charAt(i-1)) {
            result = true
         }
      }   
   }
   return result
}

console.log(checkDoubleLetter("rune"))

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Word Counter

Create a function named `wordCount()` that accepts a parameter called "phrase" which counts the number of occurrences of each word in that phrase

For example, the phrase: "olly olly in come free" should result in output that looks similar to the following:

```
olly: 2
in: 1
come: 1
free: 1
```

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. wordCount("olly olly in come free")

   Result:

   olly: 2
   in: 1
   come: 1
   free: 1

2. wordCount("Baby shark, doo doo doo doo doo doo")

   Result:

   baby: 1
   shark: 1
   doo: 6

3. wordCount("Humpty Dumpty sat on a wall Humpty Dumpty had a great fall")

   Result:

   humpty: 2
   dumpty: 2
   sat: 1
   a: 2
   on: 1
   fall: 1
   great: 1
   had: 1
   wall: 1
************/
console.log('Problem 5 - bonus:')

// Add your code below this line

let words = []
let counts = []
let input = "Humpty Dumpty sat on a wall Humpty Dumpty had a great fall"
let parsed = (input.replace(/[^a-zA-Z ]/g, "")).split(" ")

if (parsed.length > 0) {
   for (i=0; i<parsed.length; i++) {
      parsed[i] = parsed[i].toLowerCase()
   }
}

for (i=0; i<parsed.length; i++) {
   if (!words.includes(parsed[i])) {
      words.push(parsed[i])
      counts.push(parseInt("1"))
   } else {
      let position = words.indexOf(parsed[i])
      counts[position] = counts[position] + 1
   }
}

for (i=0; i<words.length; i++) {
console.log(words[i] + ": " + counts[i])
}

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')
