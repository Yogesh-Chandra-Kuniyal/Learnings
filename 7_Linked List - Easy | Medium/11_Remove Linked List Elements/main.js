// Leetcode 203 : Remove Linked List Elements

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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let sentinel = new ListNode();
    sentinel.next = head;

    let prev = sentinel;
    while(prev && prev.next){
        if(prev.next.val === val){
            prev.next = prev.next.next;
        }else{
            prev = prev.next;
        }
    }
    return sentinel.next;
};






let arr = [1,2,6,3,4,5,6], val = 6;

let head = arrayToLinkedList(arr);

console.log(linkedListToArray(removeElements(head, val)));