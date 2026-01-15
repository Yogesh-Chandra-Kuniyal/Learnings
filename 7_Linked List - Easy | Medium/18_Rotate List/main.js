// Leetcode 61 : Rotate List

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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {

    if(!head || !head.next) return head;
    
    // length of the list
    let curr = head;
    let length = 0;
    while(curr){
        curr = curr.next;
        length++;
    }

    k = k % length;
    if (k === 0) return head;

    let slow = head;
    let fast = head;
    let distance = 0;

    // Move fast k steps ahead
    for (let i = 0; i < k; i++) {
        fast = fast.next;
    }

    // Move both until fast is last
    while(fast.next){
        slow = slow.next;
        fast = fast.next;
    }

    // Rotate
    let newHead = slow.next;
    fast.next = head;
    slow.next = null;

    return newHead;    
};








// var rotateRight = function(head, k) {
//     if(!head || !head.next) return head;

//     let length = 0;
//     let curr = head;
//     let lastNode;

//     while(curr){
//         length++;
//         lastNode = curr;
//         curr = curr.next;
//     }

//     lastNode.next = head;

//     let rotation = k % length;
//     let steps = length - rotation;

//     let tail = lastNode;
//     while(steps > 0){

//         tail = tail.next;
//         steps--;
//     }

//     let newHead = tail.next;
//     tail.next = null;
//     return newHead;
// };









let arr = [1,2,3,4,5] , k =3;

let head = arrayToLinkedList(arr);

console.log(linkedListToArray(rotateRight(head, k)));