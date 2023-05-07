//1. Check if a word is palendrome, a planedrom is a word that spells the same forward and backward for example Bob

function checkPalendrom() {
  let word = "nice";
  let reverseWord = "";

  let letters = []; //this is our stack

  //put letters of the word into a stack
  for (let i = 0; i < word.length; i++) {
    letters.push(word[i]);
  }

  //pop off the stack in reverse order
  for (let j = 0; j < word.length; j++) {
    reverseWord += letters.pop();
  }

  if (word === reverseWord) {
    console.log(`${word} is Palindrome`);
  } else {
    console.log(`${word} is not palindrome`);
  }

  //you can solve this problem by using this syntax for the second for loop
  // for(let j= word.length - 1; j>=0; j--){}
}

//checkPalendrom();

//2. Implement a stack in javascript with out using the array

// Creates a stack
var Stack = function () {
  this.count = 0;
  this.storage = {};

  //Adds a value onto the end of the stack
  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };

  //Removes and returns the value at the end of the stack
  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  //Size of the stack
  this.size = function () {
    return this.count;
  };

  //returns the value at the top of the stack
  this.peek = function (value) {
    return this.storage[this.count - 1];
  };
};

let myStack = new Stack();
myStack.push(1);
myStack.push(2);

console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.storage);
console.log(myStack.size());
