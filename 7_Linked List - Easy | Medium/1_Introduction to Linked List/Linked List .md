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
// 11 : Lt_203_Remove Linked List Elements -> Approach -> Sentinel Node (# Marvels always keeps an eye)
// 12 : Lt_19_Remove Nth Node from End of List - Two Pass -> Sentinel Node
// 13 : Lt_19_Remove Nth Node from End of List - One Pass -> Approach -> Sentinel Node and Logic ->First pointer will start once Second pointer reaches n node far from First pointer
// 14 : Lt_83_Remove Duplicates from Sorted List -> Approach -> curr.next = curr.next.next;
// 15 : Lt_328_Odd Even Linked List -> odd.next = odd.next.next and even.next = even.next.next
// 16 : Lt_2_Add Two Numbers -> Approach Dummy Node and new node with carry and sum and a copy of first node
// 17 : Lt_21_Merge Two Sorted Lists -> Dummy Node -> Zig Zag with two Linked List
















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