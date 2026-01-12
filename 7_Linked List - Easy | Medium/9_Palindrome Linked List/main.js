// LeetCode 234 : Palindrome Linked List

// Time Complexity: O(n)
// Space Complexity: 0(1)


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





// Time Complexity: O(n)
// Space Complexity: 0(n)

// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @return {boolean}
//  */


// // 
// var isPalindrome = function(head) {
//     let array = [];
//     while(head){
//         array.push(head.val);
//         head = head.next;
//     }
//     let size = array.length;
//     for(let i = 0; i < Math.floor(size/2) ; i++){
//         if(array[i] !== array[size - i - 1]){
//             return false;
//         }
//     }
//     return true;
// };









/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    // finding the middle element;
    let slow = fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    // reverse the second half of the list
    let curr = slow;
    let prev = null;
    while(curr){
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    // checking the palindrome
    let firstHalf = head;
    let secondHalf = prev; 
    while(secondHalf){
        if(firstHalf.val != secondHalf.val){
            return false;
        }
        firstHalf = firstHalf.next;
        secondHalf = secondHalf.next;
    }
    return true;
};





let arr = [1];

let head = arrayToLinkedList(arr);

console.log((isPalindrome(head)));