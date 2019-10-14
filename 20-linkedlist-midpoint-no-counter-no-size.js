// The function takes a linked list as argument
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.

// Using a counter variable is NOT allowed 
// Retrieving the size of the list is NOT allowed
// Only iterate through the list one time.

// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

function midpoint(list) {
    let slow = list.head;
    let fast = list.head;
    while(fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}