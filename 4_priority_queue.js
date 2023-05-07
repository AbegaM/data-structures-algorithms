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
