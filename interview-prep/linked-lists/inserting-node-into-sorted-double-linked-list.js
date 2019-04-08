function sortedInsert(head, data) {

    const node = new DoublyLinkedListNode(data);

    if(data <= head.data){
        node.next = head;
        head.prev = node;
        return node;
    }

    let curr = head;

    // loop till we reach the end of linked list
    while(curr.next){

        let prev = curr;
        curr = curr.next;

        // found the insertion spot, splice in the node
        if(data <= curr.data){

            node.next = curr;
            node.prev = prev;
            prev.next = node;
            curr.prev = node;
            return head;

        }
    }

    // attach node to tail
    node.prev = curr;
    curr.next = node;
    return head;
}