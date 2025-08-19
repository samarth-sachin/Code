public class ll {
    static class Node {
        String data;
        Node next;

        Node(String data) {
            this.data = data;
            this.next = null;
        }
    }

    Node head;

    // Method to add a node at the beginning of the list
    public void addFirst(String data) {
        Node newNode = new Node(data);
        if (head == null) {
            head = newNode;
            return;
        }
        newNode.next = head;
        head = newNode;
    }

    // Method to print the list
    public void printList() {
        if (head == null) {
            System.out.println("empty");
            return;
        }
        Node currNode = head;
        while (currNode != null) {
            System.out.print(currNode.data + " -> "); // Print the data of the current node
            currNode = currNode.next; // Move to the next node
        }
        System.out.println("null"); // Indicate the end of the list
    }

    public static void main(String[] args) {
        ll list = new ll();
        list.addFirst("a");
        list.addFirst("b");
        list.addFirst("c");
        list.printList(); // This will now print the linked list correctly
    }
}
