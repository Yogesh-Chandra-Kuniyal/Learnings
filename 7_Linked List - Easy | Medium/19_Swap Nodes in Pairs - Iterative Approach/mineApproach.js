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

    let curr = head;
    let even = new ListNode(0);     // even index
    let evenStart = even;
    let odd = new ListNode(0);  // odd index
    let oddStart = odd;
    let length = 0;
    while(curr){
        if(length % 2 === 0){
            even.next = curr;
            even = curr;
        }else{
            odd.next = curr;
            odd = curr;
        }
        length++;
        curr = curr.next;
    }
    if(length % 2 === 0){
        even.next = null;
    }else{
        odd.next = null;
    }

    let dummy = new ListNode();
    let result = dummy;

    oddStart = oddStart.next;
    evenStart = evenStart.next;
    let count = 0;

    while(oddStart && evenStart){
        
            dummy.next = oddStart;
            oddStart = oddStart.next;
            dummy = dummy.next; 
        
            dummy.next = evenStart;
            evenStart = evenStart.next;
            dummy = dummy.next;
        
        count++;
    }

    return result.next;
};









let arr = [1,2];

let head = arrayToLinkedList(arr);

console.log(linkedListToArray(swapPairs(head)));