class Node {
  data = null;
  next = null;
  previous = null
  constructor(data) {
    this.data = data;
  }
}

class LinkedList {
  head = null
  addNode(value) {
    let root = this.head;
    if(this.head) {
      while(root && root.next) {
        root = root.next;
      }
      root.next = new Node(value);
      root.next.previous = root;
    } else {
      this.head = new Node(value);
    }
  }

    removeNode(data) {
        let previous = this.head;
        let current = this.head;

        while(current) {
            if(current.data === data) {
                if(current === this.head) {
                  this.head = this.head.next; // Replace head node with the node 
                }

                previous.next = current.next;   // Replace current node with the node after it

                break;
            } 
            
            previous = current;
            current = current.next;
        }
    }

       traverse(cb) {
        let current = this.head;
        
        if(cb)  //  Only loop if a function was passed
            while (current) {
                cb(current);
                current = current.next;  //  Move to next node
            }
    }
}

   let linkedList = new LinkedList();