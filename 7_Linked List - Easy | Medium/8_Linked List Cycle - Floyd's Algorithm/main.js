// Leetcode 141 : Linked List Cycle

// Time Complexity: O(n)
// Space Complexity: O(1)


// Representation of a new Node
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function arrayToLinkedListWithCycle(arr, pos) {
    if (arr.length === 0) return null;

    let head = new ListNode(arr[0]);
    let curr = head;
    let cycleNode = null;

    if (pos === 0) cycleNode = head;

    for (let i = 1; i < arr.length; i++) {
        curr.next = new ListNode(arr[i]);
        curr = curr.next;

        if (i === pos) {
            cycleNode = curr;
        }
    }

    // create cycle
    if (pos !== -1) {
        curr.next = cycleNode;
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
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // Using Floyd's Algo -> fast and slow pointer will meet again in the cycle at any point.
    if(!head) return false;
    let slow = head;
    let fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        if(fast === slow){
            return true;
        }
    }
    return false;
};



let arr = [3, 2, 0, -4];
let pos = 1;

let head = arrayToLinkedListWithCycle(arr, pos);

console.log(hasCycle(head)); 