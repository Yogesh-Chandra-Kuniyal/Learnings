// Leetcode 24 : Swap Nodes in Pairs

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
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(!head || !head.next) return head;

    let dummy = new ListNode();
    dummy.next = head;

    let prev = dummy;
    let curr = head;
    let next = head.next;

    while(curr && next){
        let temp = next.next;

        prev.next = next;
        next.next = curr;
        curr.next = temp;

        prev = curr;
        curr = temp;
        next = temp ? temp.next : null;
        // next = temp && temp;
    }
    return dummy.next;
};









let arr = [1,2,3,4,5,6];

let head = arrayToLinkedList(arr);

console.log(linkedListToArray(swapPairs(head)));