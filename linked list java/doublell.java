public class doublell {
    Node head;

    // Insert at the beginning of the list
    public void firstff(int value) {
        Node node = new Node(value);
        node.next = head; // New node's next points to the current head
        node.previous = null; // New node's previous is null (since it's the first node)

        if (head != null) {
            head.previous = node; // Update the current head's previous pointer
        }
        head = node; // Update head to the new node
    }

    // Display the list
    public void display() {
        Node node = head;
        while (node != null) {
            System.out.print(node.value + " -> ");
            node = node.next; // Move to the next node
        }
        System.out.println("null");
    }

    // Nested Node class
    class Node {
        int value;
        Node next;
        Node previous;

        // Constructor for creating a node
        public Node(int value) {
            this.value = value;
        }

        public Node(int value, Node next, Node previous) {
            this.value = value;
            this.next = next;
            this.previous = previous;
        }
    }

    // Main method to test the implementation
    public static void main(String[] args) {
        doublell list = new doublell();

        // Test the firstff method
        list.firstff(10);
        list.firstff(20);
        list.firstff(30);

        // Display the doubly linked list
        list.display(); // Output: 30 -> 20 -> 10 -> null
    }
}
