const LinkedList = require('./double-linked-list');
const BST = require('./BST');


const bst = new BST();

bst.add(10);
bst.add(5);
bst.add(12);
bst.add(4);
bst.add(7);
bst.preOrder().forEach((item) => {
  console.log(item);
});
