function insertNodeAtPosition(head, data, position) {

    const node = new SinglyLinkedListNode(data);

    if(position === 0){

        node.next = head;
        return node;
    }

    let curr = head;
    let currPos = 0;

    while(curr.next){

        let prev = curr;
        
        curr = curr.next;
        currPos++;

        if(currPos === position){

            node.next = curr;
            prev.next = node;
            return head;
        }

    }

}