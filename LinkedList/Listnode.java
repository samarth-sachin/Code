class ListNode {
    int val;
    ListNode next;
    ListNode(int x) { val = x; }

    public static ListNode removeElement(ListNode head, int n) {
        // Edge case: if the list is empty, return null
        if (head == null) {
            return null;
        }

        // Create a dummy node that points to the head to simplify the removal logic
        ListNode dummy = new ListNode(0);
        dummy.next = head;
        ListNode fast = dummy;
        ListNode slow = dummy;

        // Move the 'fast' pointer n+1 steps ahead to maintain a gap of 'n' between slow and fast
        for (int i = 0; i <= n; i++) {
            if (fast == null) return null; // n is larger than the size of the list
            fast = fast.next;
        }

        // Move both 'fast' and 'slow' until 'fast' reaches the end
        while (fast != null) {
            fast = fast.next;
            slow = slow.next;
        }

        // Remove the nth node from the end by skipping it
        slow.next = slow.next.next;

        // Return the updated list, starting from the node after the dummy node
        return dummy.next;
    }
}
