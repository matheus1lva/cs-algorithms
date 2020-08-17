const LinkedList = require('./double-linked-list');
const BST = require('./BST');


const bst = new BST();

bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);

function convertBSTIntoLinkedList(bst) {
  const ll = new LinkedList();
  bst.inOrder().forEach((item) => {
    ll.addNode(item);
  });

  return ll;
}

const linkedList = convertBSTIntoLinkedList(bst);
linkedList.traverse((item) => {
  console.log(item);
})