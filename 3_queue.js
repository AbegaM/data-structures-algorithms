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
