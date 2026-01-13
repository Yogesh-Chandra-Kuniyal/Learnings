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

    let prev = sentinel;
    let length = 0;
    while(prev.next){
        length++;
        prev = prev.next;
    }

    prev = sentinel;
    let prevPos = length - n;
    for(let i = 0 ; i < prevPos ; i++){
        prev = prev.next;
    }

    prev.next = prev.next.next;
    
    return sentinel.next;
};






let arr  = [1,2,3,4,5], n = 5;

let head = arrayToLinkedList(arr);

console.log(linkedListToArray(removeNthFromEnd(head, n)));