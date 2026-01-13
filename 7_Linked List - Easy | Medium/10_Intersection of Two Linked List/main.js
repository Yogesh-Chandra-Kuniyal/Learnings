// Leetcode 160 : Intersection of Two Linked List

// Time Complexity: O(n)
// Space Complexity: O(n)





function ListNode(val) {
    this.val = val;
    this.next = null;
}

// Common part (intersection)
let intersect = new ListNode(8);
intersect.next = new ListNode(4);
intersect.next.next = new ListNode(5);

// List A
let headA = new ListNode(4);
headA.next = new ListNode(1);
headA.next.next = intersect;

// List B
let headB = new ListNode(5);
headB.next = new ListNode(6);
headB.next.next = new ListNode(1);
headB.next.next.next = intersect;










/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let set = new Set();
    while(headB){
        set.add(headB);
        headB = headB.next;
    }
    while(headA){
        if(set.has(headA)){
            return headA;
        }
        headA = headA.next;
    }
    return null;
};




let result = getIntersectionNode(headA, headB);
console.log(result.val);