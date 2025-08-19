public class hardstack {
    static class Node {
        int data;
        Node next;

        public Node(int data) {
            this.data = data;
            this.next = null;
        }
    }

    static class Stack {
        private Node head;

        public boolean isEmpty() {
            return head == null;
        }

        public void push(int data) {
            Node newNode = new Node(data);
            newNode.next = head; // Link the new node to the previous head
            head = newNode;      // Update head to the new node
        }

        public int pop() {
            if (isEmpty()) {
                return -1; // Stack is empty
            }
            int top = head.data;
            head = head.next; // Move head to the next node
            return top;       // Return the popped value
        }

        public int peek() {
            if (isEmpty()) {
                return -1; // Stack is empty
            }
            return head.data; // Return the top value
        }
    }

    public static void main(String[] args) {
        Stack s = new Stack();
        s.push(1);
        s.push(2);
        s.push(3);
        
        while (!s.isEmpty()) {
            System.out.println(s.peek());
            s.pop();
        }
    }
}
