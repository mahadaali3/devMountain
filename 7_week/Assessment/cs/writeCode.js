// Sum Zero

// Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

function addToZero(arr){
    let doesItAddToZero = false
    let zeroCount = 0
    for(let i=0; i<arr.length; i++){
      if(arr.includes(-arr[i]) && arr[i]!=0){
        doesItAddToZero = true
      }
      else if(arr[i] == 0){
        zeroCount++
        if(zeroCount>=2){
          doesItAddToZero = true 
        }
      }
        
    }
    console.log(doesItAddToZero)
  }
  console.log("addToZero function")
  addToZero([1, 4, 11, 2, 37, -4])
  addToZero([0, 21, 33, 6, 0, -9])
  addToZero([0, 1, 2, 3, 4, 5])

  // Runtime is O(n)

  // Unique Characters

  // Write a function that takes in a single word, as a string. It should return True if that word contains 
  // only unique characters. Return False otherwise.

  function hasUniqueCharacters(word){
    isUnique = true
    uniqueArr = []
    for(let i=0; i<word.length; i++){
      letter = word.charAt(i)
      if(!uniqueArr.includes(letter)){
        uniqueArr.push(letter)
      }
      else{
        isUnique = false
      }
    }
    return isUnique
  }
  console.log("hasUniqueCharacters function")
  console.log(hasUniqueCharacters("hh"))
  console.log(hasUniqueCharacters("Monday"))
  console.log(hasUniqueCharacters("Moonday"))

  // Runtime is O(n)

// Pangram Sentence

// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

function isPangram(sentence){
    letters = 'abcdefghijklmnopqrstuvwxyz'
    sentence.trim()
    for(let i=0; i<letters.length; i++){
       
        if((!sentence.includes(letters[i]))){
            return false
        }

    }
    return true

}
console.log("isPanagram function")
console.log(isPangram('The quick brown fox jumps over the lazy dog!'))
console.log(isPangram("I like cats, but not mice"))

// Runtime is O(n)

// Longest Word

// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

function findLongestWord(listOfWords){
  let lengthOfLongest = 0
  for(let i=0; i<listOfWords.length;i++){
    if(listOfWords[i].length>lengthOfLongest){
      lengthOfLongest = listOfWords[i].length
    }
  }
  return lengthOfLongest
}

console.log("longestWord function")
console.log(findLongestWord(["hi", "hello"]))

// Runtime is O(n)

