class Node {
  data = null;
  next = null;
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
        console.log({
          root: root.data
        })
        root = root.next;
        console.log({
          next: root
        })
        
      }
      root.next = new Node(value);
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

    linkedList.addNode("first node");
    linkedList.addNode("second node");
    linkedList.addNode("thirdr node");