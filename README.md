# Resource 1

```
https://www.youtube.com/watch?v=t2CEgPsws3U&t=127s
```

## Data structures

## 1. Stacks

- Stacks are **Last in first out** type of data structures

- For example if you put books in a stack the Last book you put will always be put in the top of the stack and it will be the one to get picked from the stack.

- In **Javascript** arrays act like a stack and the js environment gives you four functions to manipulate stacks

  ```js
  push();
  pop();
  peek();
  length();
  ```

- The `push` function is used to add items to the stack

  ```js
  stack.push(2);
  stack.push(3);
  stack.push(4)[(2, 3, 4)]; // as you see the recent item is 4
  ```

- The `peek` functions is used to see the recent item which is in the top of the stack

  ```js
  [2, 3, 4];

  stack.peek(); // 4
  ```

- The `pop` function is used to pick the recent item which is on the top

  ```js
  [2, 3, 4];

  stack.pop();

  //after the pop the stack will have [2, 3]
  ```

- The `length` function is used to get the length of the stack

  ```js
  [2, 3, 4];

  stack.length; //3

  //note that the stacks length is 3 but the stack has a total of 2 indexes this is due to the fact that index counting starts from (0, 1, 2)
  ```

1. **Challenge**

   - Check if a word is **palendrom**, A palindrome is a word that is spelled the same forward and backwards, for example **Bob**

     ```js
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
     ```

**Now instead of using arrays as a stack lets build a custom stack in javascript**

2. **Challenge**

- Build a stack functionality in javascript and implement all of the stack functions `push`, `pop`, `peek`, `length`

  ```js
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
  ```

## 2. Sets

- The set data structure is technically an array but duplicate values can't exist in sets and the values are not in any particular order.

- ES6 has a built in set data structure

- A Set has many functions to manipulate it

  ``` 
  has()  // to check if the set has a specific element
  value()  //return all the values in the set
  add()   //adds a new element to the set
  size()  //returns the size of the collection
  union()  //return the union of two sets
  remove()  // remove an element from the set
  intersection()  //returns the intersection of two sets
  difference()  //returns the difference of two sets as a new set
  subset() //test if the set is a subset of a different set

  ```

  NOTE: ES6 has its own `Set` class but it doesn't provide the `union`, `intersection`, `difference` and `subset` functions

1. **Challenge**

   - Build a custom Set datastructure using javascript and build all the above methods

     ```js
     //1. Build a custom Set data structure using javascript
     function mySet() {
       // this collection will hold the set
       let collection = [];

       //this method will check for the presence of an element and return true or false
       this.has = function (element) {
         return collection.indexOf(element) !== -1;
       };

       //this method will return all the values in the set
       this.values = function () {
         return collection;
       };

       //this method will add an element to the set (when adding new elements to a set, no duplicate items in sets)
       this.add = function (element) {
         if (!this.has(element)) {
           collection.push(element);
           return true;
         }

         return false;
       };

       //this method will remove an element rom the set
       this.remove = function (element) {
         //check if the element exists
         if (this.has(element)) {
           let index = collection.indexOf(element);
           collection.splice(index, 1);
           return true;
         }
       };

       //this method will return the size of the set
       this.size = function () {
         return collection.length;
       };

       //this method will return the union of two sets
       this.union = function (otherSet) {
         let unionSet = new mySet();
         let firstSet = this.values();
         let secondSet = otherSet.values();

         firstSet.forEach(function (e) {
           unionSet.add(e);
         });

         secondSet.forEach(function (e) {
           unionSet.add(e);
         });

         return unionSet;
       };

       //this method will return the intersection of two sets as a new set
       this.intersection = function (otherSet) {
         let intersectionSet = new Set();
         let firstSet = this.values();
         firstSet.forEach(function (e) {
           if (otherSet.has(e)) {
             intersectionSet.add(e);
           }
         });

         return intersectionSet;
       };

       //this method will return the difference of two sets as a new set
       this.difference = function (otherSet) {
         let differenceSet = new Set();
         let firstSet = this.values();
         firstSet.forEach(function (e) {
           if (!otherSet.has(e)) {
             differenceSet.add(e);
           }
         });

         return differenceSet;
       };

       //this method will test if th e set is a subset of a different set
       this.subset = function (otherSet) {
         let firstSet = this.values();
         return firstSet.every(function (value) {
           return otherSet.has(value);
         });
       };
     }

     const setA = new mySet();
     const setB = new mySet();

     setA.add("a");
     setB.add("b");
     setB.add("c");
     setB.add("a");
     setB.add("d");

     //console.log(setA.subset(setB));

     // Use the ES6 Set data structure

     let setC = new Set();
     let setD = new Set();

     setC.add("a");
     setD.add("b");
     setD.add("c");
     setD.add("d");
     setD.add("a");

     console.log(setD.values());
     setD.delete("a");
     console.log(setD.has("a"));
     console.log(setD.add("d"));
     ```

   ## 3. Queue

   - The queue data structure is the same as a stack, but stack is a FILO structure but a queue is FIFO structure

   1. **challenge**

      - Build a queue data structure using an array

        ```js
        function myQueue() {
          let collection = [];

          this.print = function () {
            console.log(collection);
          };

          this.enqueue = function (element) {
            collection.push(element);
          };

          this.dequeue = function () {
            return collection.shift();
          };

          this.front = function () {
            return collection[0];
          };

          this.shze = function () {
            return collection.length;
          };

          this.isEmpty = function () {
            return collection.length === 0;
          };
        }

        let q = new myQueue();
        q.enqueue("a");
        q.enqueue("b");

        q.dequeue();

        q.print();
        ```

   **Priority Queue**

   - Another way to creare a queue data structure is by using a priority queue, In priority queue you don't only pass the element but also the priority of the element

     ```js
     function PriorityQueue() {
       let collection = [];

       this.printCollection = function () {
         console.log(collection);
       };

       // Input = ['array data', 1] the first item is the data and the second item is the priority
       this.enqueue = function (element) {
         //if the queue is empty there is no need to check the priority just put the item in the collection
         if (this.isEmpity()) {
           collection.push(element);
         } else {
           let added = false;
           for (let i = 0; i < collection.length; i++) {
             if (element[1] < collection[i][1]) {
               //element[1] is the priority of the element and collection[i][1] referes to [['element', 1]]
               collection.splice(i, 0, element);
               added = true;
               break;
             }
           }

           if (!added) {
             collection.push(element);
           }
         }
       };

       this.dequeue = function () {
         let value = collection.shift();
         return value[0];
       };

       this.front = function () {
         return collection[0];
       };

       this.size = function () {
         return collection.length;
       };

       this.isEmpity = function () {
         return collection.length === 0;
       };
     }

     let pq = new PriorityQueue();

     pq.enqueue(["Abega", 2]);
     pq.enqueue(["Lo", 1]);
     pq.enqueue(["Bela", 3]);
     pq.enqueue(["Hena", 4]);

     pq.printCollection();
     pq.dequeue();
     pq.printCollection();

     pq.front();
     ```

   ## 4. Binary Search Tree (BST)

   - A Tree data structure as the name indicates looks like a tress

     ![BST](../../Pictures/bst.png)

- - A binary tree can only have **2** branches for every parent thats why it is called Binary search tree

  - Binary search trees are ordered meaning:

    - Each sub tree is <= the parent node
    - Each right sub tree is >= the parent node

  - ```
        50
    /         \
    17            72
    /   \         /      \
    12         23    54        76
    /    \        \      \
    9     14       19     67
    ```

    ```js
    class Node {
      constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
      }
    }

    class BST {
      constructor() {
        this.root = null;
      }

      add(data) {
        const node = this.root;

        // if there is no node
        if (node === null) {
          this.root = new Node(data);
          return;
        } else {
          //recursive function
          const searchTree = function (node) {
            if (data < node.data) {
              if (node.left === null) {
                node.left = new Node(data);
                return;
              } else if (node.left !== null) {
                return searchTree(node.left);
              }
            } else if (data > node.data) {
              if (node.right === null) {
                node.right = new Node(data);
                return;
              } else if (node.right !== null) {
                return searchTree(node.right);
              }
            } else {
              return null;
            }
          };

          return searchTree(node);
        }
      }

      findMin() {
        let current = this.root;
        while (current.left !== null) {
          current = current.left;
        }
        return current.data;
      }

      findMax() {
        let current = this.root;
        while (current.right !== null) {
          current = current.right;
        }
        return current.data;
      }

      find(data) {
        let current = this.root;
        while (current.data !== data) {
          if (data < current.data) {
            current = current.left;
          } else {
            current = current.right;
          }
        }
      }

      isPresent(data) {
        let current = this.root;
        while (current) {
          if (data === current.data) {
            return true;
          }

          if (data < current.data) {
            current = current.left;
          } else {
            current = current.right;
          }
        }
        return false;
      }

      remove(data) {
        const removeNode = function (node, data) {
          if (node == null) {
            return null;
          }
          if (data === node.data) {
            //node has no children
            if (node.left === null && node.right === null) {
              return null;
            }

            //node has no left child
            if (node.left == null) {
              return node.right;
            }

            //node has no right child
            if (node.right == null) {
              return node.left;
            }

            //node has two children
            let tempNode = node.right;
            while (tempNode.left !== null) {
              tempNode = tempNode.left;
            }
            node.data = tempNode.data;
            node.right = removeNode(node.right, tempNode.data);
            return node;
          } else if (data < node.data) {
            node.left = removeNode(node.left, data);
          } else {
            node.right = removeNode(node.right, data);
            return node;
          }
        };
        this.root = removeNode(this.root, data);
      }

      isBalanced() {
        return this.findMinHeight() >= this.findMaxHeight() - 1;
      }

      findMinHeight(node = this.root) {
        if (node == null) {
          return -1;
        }

        let left = this.findMinHeight(node.left);
        let right = this.findMinHeight(node.right);

        if (left < right) {
          return left + 1;
        } else {
          return right + 1;
        }
      }

      findMaxHeight(node = this.root) {
        if (node === null) {
          return -1;
        }

        let left = this.findMaxHeight(node.left);
        let right = this.findMaxHeight(node.right);

        if (left > right) {
          return left + 1;
        } else {
          return right + 1;
        }
      }

      inOrder() {
        if (this.root == null) {
          return null;
        } else {
          let result = new Array();
          function traverseInOrder(node) {
            node.left && traverseInOrder(node.left);
            result.push(node.data);
            node.right && traverseInOrder(node.right);
          }

          traverseInOrder(this.root);
          return result;
        }
      }

      preOrder() {
        if (this.root === null) {
          return null;
        } else {
          var result = new Array();
          function traversePreOrder(node) {
            result.push(node.data);
            node.left && traversePreOrder(node.left);
            node.right && traversePreOrder(node.right);
          }

          traversePreOrder(this.root);
          return result;
        }
      }

      postOrder() {
        if (this.root === null) {
          return null;
        } else {
          var result = new Array();
          function traversePostOrder(node) {
            node.left && traversePostOrder(node.left);
            node.right && traversePostOrder(node.right);
            result.push(node.data);
          }
          traversePostOrder(this.root);
          return result;
        }
      }

      levelOrder() {
        let result = [];
        let Q = [];
        if (this.root != null) {
          Q.push(this.root);
          while (Q.length > 0) {
            let node = Q.shift();
            result.push(node.data);
            if (node.left != null) {
              Q.push(node.left);
            }
            if (node.right != null) {
              Q.push(node.right);
            }
          }
          return result;
        } else {
          return null;
        }
      }
    }

    const bst = new BST();
    bst.add(4);
    bst.add(3);
    bst.add(2);
    bst.add(1);
    bst.add(3);
    bst.add(5);
    bst.add(7);
    bst.remove(4);

    console.log(bst.findMin());

    // console.log(bst.findMin());
    ```

    **Binary Search Tree Traversal and Height**

    - Height refers to the distance between the root node to any given leaf node

    - for a given tree there would be a minimum and a maximum height

    - **Min height** is the distance between the root node and the first leaf node

    - **Max height** is the distance between the root node and the last leaf node

      ![BST_Height](../../Pictures/Bst_height.png)

- **Tree traversal**

  - There are 4 kinds of Binary tree traversals

    1. In order traversal
    2. pre order traversal
    3. post order traversal
    4. Level order traversal

## 5. Hash tables

- A hash table is used to implement associative arrays or mapping of key value pairs

- hash tables are common ways to implemenet the map data structure

- The average time complexity of hash tables and bit notation is O(1) for search, insert and delete

- The way a hash table works is that it takes a key input and then runs it through a hash function

- You run your keys through a hash function and the hash function hashes your values

- For example you have this keys

  - John smith
  - Lisa smith

- And when you run this values in your hash functoin the hash function will change this to hash values

  - John Smith. ====> 02
  - List smith. =====> 01

- If two keys are changed to the same hash that is called a collision

- Javascript has built in **Hash tables**

  ```js
  var hash = (string, max) => {
    var hash = 0;
    for (var i = 0; i < string.length; i++) {
      hash += string.charCodeAt(i);
    }
    return hash % max;
  };

  let HashTable = function () {
    let storage = [];
    const storageLimit = 4;

    this.print = function () {
      console.log(storage);
    };

    this.add = function (key, value) {
      var index = hash(key, storageLimit);
      if (storage[index] === undefined) {
        storage[index] = [key, value];
      } else {
        var inserted = false;
        for (var i = 0; i < storage[index].length; i++) {
          if (storage[index][i][0] === key) {
            storage[index][i][1] = value;
            inserted = true;
          }
        }
        if (inserted === false) {
          storage[index].push([key, value]);
        }
      }
    };

    this.remove = function (key) {
      var index = hash(key, storageLimit);
      if (storage[index].length === 1 && storage[index][0][0] === key) {
        delete storage[index];
      } else {
        for (var i = 0; i < storage[index]; i++) {
          delete storage[index][i];
        }
      }
    };

    this.lookup = function (key) {
      var index = hash(key, storageLimit);
      if (storage[index] === undefined) {
        return undefined;
      } else {
        for (var i = 0; i < storage[index].length; i++) {
          return storage[index][i][1];
        }
      }
    };
  };

  console.log(hash("quincy", 10));

  let ht = new HashTable();
  ht.add("beau", "person");
  ht.add("fido", "dog");
  ht.add("rex", "dinosour");
  ht.add("tux", "penguin");

  console.log(ht.lookup("tux"));
  ht.print();
  ```

## 6. Linked List

- A linked list is a common data structure where elements are stored in a node and the node contains two key pieces of information
  - The element it self
  - Reference to the next node
- ![linked-list](../../Pictures/linked-list.png)

- ```js
  function LinkedList() {
    var length = 0;
    var head = null;

    var Node = function (element) {
      this.element = element;
      this.next = null;
    };

    this.size = function () {
      return length;
    };

    this.head = function () {
      return head;
    };

    this.add = function (element) {
      var node = new Node(element);
      if (head === null) {
        head = node;
      } else {
        currentNode = head;

        while (currentNode.next) {
          currentNode = currentNode.next;
        }

        currentNode.next = node;
      }
    };

    this.remove = function (element) {
      var currentNode = head;
      var previousNode;
      if (currentNode.element === element) {
        head = currentNode.next;
      } else {
        while (currentNode.element !== element) {
          previousNode = currentNode;
          currentNode = currentNode.next;
        }

        previousNode.next = currentNode.next;
      }
      length--;
    };

    this.isEmpty = function () {
      return length === 0;
    };

    this.indexOf = function (element) {
      var currentNode = head;
      var index = -1;

      while (currentNode) {
        index++;
        if (currentNode.element === element) {
          return index;
        }
        currentNode = currentNode.next;
      }
      return -1;
    };

    this.elementAt = function (index) {
      var currentNode = head;
      var count = 0;
      while (count < index) {
        count++;
        currentNode = currentNode.next;
      }
      return currentNode.element;
    };

    this.addAt = function (index, element) {
      var node = new Node(element);

      var currentNode = head;
      var previousNode;
      var currentIndex = 0;

      if (index > length) {
        return false;
      }

      if (index === 0) {
        node.next = currentNode;
        head = node;
      } else {
        while (currentIndex < index) {
          currentIndex++;
          previousNode = currentNode;
          currentNode = currentNode.next;
        }
        node.next = currentNode;
        previousNode.next = node;
      }
      length++;
    };

    this.removeAt = function (index) {
      var currentNode = head;
      var previousNode;
      var currentIndex = 0;
      if (index < 0 || index >= length) {
        return null;
      }
      if (index === 0) {
        head = currentNode.next;
      } else {
        while (currentIndex < index) {
          currentIndex++;
          previousNode = currentNode;
          currentNode = currentNode.next;
        }
        previousNode.next = currentNode.next;
      }
      length--;
      return currentNode.element;
    };
  }

  var conga = new LinkedList();
  conga.add("Kitten");
  conga.add("Puppy");
  conga.add("Dog");
  conga.add("Cat");
  conga.add("Fish");

  console.log(conga.size());
  console.log(conga.removeAt(3));
  console.log(conga.size());
  ```

## 7. Trie

- A Trie is a special type of tree that is used to store associative data structures

- A Trie stores data in steps

  ```js
  let Node = function () {
    this.keys = new Map();
    this.end = false;
    this.setEnd = function () {
      this.end = true;
    };

    this.isEnd = function () {
      return this.end;
    };
  };

  let Trie = function () {
    this.root = new Node();

    this.add = function (input, node = this.root) {
      if (input.length === 0) {
        node.setEnd();
        return;
      } else if (!node.keys.has(input[0])) {
        node.keys.set(input[0], new Node());
        return this.add(input.substr(1), node.keys.get(input[0]));
      } else {
        return this.add(input.substr(1), node.keys.get(input[0]));
      }
    };

    this.isWord = function (word) {
      let node = this.root;
      while (word.length > 1) {
        if (!node.keys.has(word[0])) {
          return fasle;
        } else {
          node = node.keys.get(word[0]);
          word = word.substr(1);
        }
      }
      return node.keys.has(word) && node.keys.get(word).isEnd() ? true : false;
    };

    this.print = function () {
      let words = new Array();
      let search = function (node = this.root, string) {
        if (node.keys.size != 0) {
          for (let letter of node.keys.keys()) {
            search(node.keys.get(letter), string.concat(letter));
          }
          if (node.isEnd()) {
            words.push(string);
          }
        } else {
          string.length > 0 ? words.push(string) : undefined;
          return;
        }
      };
      search(this.root, new String());
      return words.length > 0 ? words : null;
    };
  };

  myTrie = new Trie();
  myTrie.add("ball");
  myTrie.add("bat");
  myTrie.add("doll");
  myTrie.add("dork");
  myTrie.add("do");
  myTrie.add("dorm");
  myTrie.add("send");
  myTrie.add("sense");

  console.log(myTrie.isWord("doll"));
  console.log(myTrie.isWord("dor"));
  console.log(myTrie.isWord("dorf"));

  console.log(myTrie.print());
  ```

## 8. Heap

```js

```
