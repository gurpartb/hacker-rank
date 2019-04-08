//    ____    ____
// ->|prev|->|curr|->
// <-|____|<-|____|<-
//
function reverse(head) {

    let curr = head;
    // initially prev is undefined
    let prev;

    // loops stops when current is undefined
    while(curr){

        // switch the properties of the current node
        curr.prev = curr.next;
        curr.next = prev;

        // since prev was initially undefined,
        // simply set prev to curr and move forward
        prev = curr;
        curr = curr.prev;
    }

    // curr points to undefined, prev points to the last valid node (new head)
    return prev;
}