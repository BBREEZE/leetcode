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

 function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
 var deleteDuplicates = function(head) {
  let c = head
  while(c && c.next){
    if(c.val === c.next.val){
      c.next = c.next.next
    }else{
        c = c.next
    }
    
  }
  return head

};

// console.assert(deleteDuplicates([1,1,2]).toString() === [1,2].toString() , '1')