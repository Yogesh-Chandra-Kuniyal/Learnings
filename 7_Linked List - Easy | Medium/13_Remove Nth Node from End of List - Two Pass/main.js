// Leetcode 19 : Remove Nth Node from End of List

// Time Complexity: O(n)
// Space Complexity: O(1)



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






/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let sentinel = new ListNode();
    sentinel.next = head;

    // First pointer will start once Second pointer reaches n node far from First pointer
    let first = sentinel;
    let second = sentinel;
    let distance = 0;
    while(second.next){
        if(distance >= n){
            first = first.next;
        }
        distance++;
        second = second.next;
    }
    first.next = first.next.next;

    return sentinel.next;
};






let arr  = [1,2,3,4,5], n = 2;

let head = arrayToLinkedList(arr);

console.log(linkedListToArray(removeNthFromEnd(head, n)));