// Head of list
var head;

// Linked list Node
class linkedNodes {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
//appen a node to the beggining of the list
function append(appended_value) {
  var newNode = new linkedNodes(appended_value);
  newNode.next = null;

  if (head == null) {
    head = new linkedNodes(appended_value);
    return;
  }
  var last = head;
  while (last.next != null) {
    last = last.next;
    last.next = appended_value;
    return;
  }
}
//prepend a node into the start of the list
function prepend(prepended_value) {
  var newNode = new linkedNodes(prepended_value);
  newNode.next = head;
  head = newNode;
}

//get the size of a linked list

function size() {
  let count = 0;
  let countedNode = head;
  while (countedNode) {
    count++;
    countedNode = countedNode.next;
  }
  return count;
}

//return first node of the list

function listHead() {
  return this.head;
}

//return end of the list

function listEnd() {
  let lastNode = this.head;

  while (lastNode != null) {
    lastNode = lastNode.next;
  }
  return lastNode;
}

//return node at a given index

function nodeIndex(index) {
  var current = head;
  let count = 0;
  while (current != null) {
    if (count == index) {
      return current.data;
    }
    count++;
    current = current.next;
  }
}
