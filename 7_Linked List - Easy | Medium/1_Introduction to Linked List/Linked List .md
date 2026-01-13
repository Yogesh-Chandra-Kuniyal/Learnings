Linked List:

head -> |value + refernce/pointer| -> |tail| -> null


-> NODE = value + pointer


-> Linear Structure
-> Non - contigeous
-> Insertion and Deletion is easy ---------------- TC = O(n)
-> Dynamic Size
-> Nodes are linked together by a reference field
-> Fetching element is hard ---------------------- TC = O(n)
-> Extra Memory


Two types of linked list:
1. Single Linked List
2. Doubly Linked List


Use case:
-> Insertion and Deletion is easy
-> Avoid resizing overhead or unknown size upfront
-> Do lots of teversal/manipulation





// 2-4 : Lt_707_Insertion and Deletion
// 5 : Lt_876_Middle Of The Linked List : Approach -> Slow and Fast Pointer
// 6 : Lt_206_Reverse a linked list
// 7 : Lt_141_Linked List Cycle -> Hash Table
// 8 : Lt_141_Linked List Cycle -> FLoyd's Algo : Approach -> Slow and Fast Pointer
// 9 : Lt_234_Palindrome Linked List -> Approach -> Reversing and middle element
// 10 : Lt_160_Intersection Of Two Linked List -> Approach -> using hash map



















// Time Complexity: O()
// Space Complexity: O()


// Representation of a new Node
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function arrayToLinkedList(arr) {
    if (arr.length === 0) return null;

    let head = new ListNode(arr[0]);
    let curr = head;

    for (let i = 1; i < arr.length; i++) {
        curr.next = new ListNode(arr[i]);
        curr = curr.next;
    }
    return head;
}


function linkedListToArray(head) {
    let res = [];
    while (head) {
        res.push(head.val);
        head = head.next;
    }
    return res;
}


-----------------Code----------------


let arr = [1, 2, 3, 4, 5, 6];

let head = arrayToLinkedList(arr);

console.log(linkedListToArray(middleNode(head)));