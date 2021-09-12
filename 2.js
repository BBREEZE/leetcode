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


function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
 var addTwoNumbers = function(l1, l2) {
  let pre = new ListNode()
  let l3 = pre
  let carry = 0
  while(l1.next !== null || l2.next !== null){
    if(l1.next === null){
      l1.next = new ListNode(0)
    }
    if(l2.next === null){
      l1.next = new ListNode(0)
    }
    if(l1.val + l2.val + carry > 9){
      carry = 1
      l3.next = new ListNode(l1.val + l2.val + carry - 10)
    }else {
      carry = 0
      l3.next = new ListNode(l1.val + l2.val + carry)
    }
    l3 = l3.next
    l1 = l1.next
    l2 = l2.next
  }
  if(carry){
    l3.next = new ListNode(1)
  }
  return pre.next
};