// Leetcode 2 : Add two Numbers

// Time Complexity: O(max(n, m))
// Space Complexity: O(max(n, m))



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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let result = new ListNode(); // dummy node which will point to first element
    let digit = result;
    let carry = 0;

    while(l1 || l2 || carry){
        let sum = carry;

        if(l1){
            sum += l1.val;
            l1 = l1.next;
        }

        if(l2){
            sum += l2.val;
            l2 = l2.next;
        }


        carry = Math.floor(sum / 10);
        digit.next = new ListNode(sum % 10);
        digit = digit.next;
    }

    return result.next;
};









let arr1 = [9,9,9,9,9,9,9];
let arr2 = [9,9,9,9];

let head1 = arrayToLinkedList(arr1);
let head2 = arrayToLinkedList(arr2);

console.log(linkedListToArray(addTwoNumbers(head1, head2)));