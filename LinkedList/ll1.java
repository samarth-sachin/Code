
public class ll1 {
    Node head;
    Node tail;
    int size;

    public ll1() {
        this.size = 0;
    }

    // Insert at the head
    public void first(int data) {
        Node node = new Node(data);
        node.next = head;
        head = node;
        if (tail == null) {
            tail = head; // Assign head to tail if the list was empty
        }
        size++;
    }

    // Insert at the tail
    public void last(int data) {
        Node node = new Node(data);
        if (tail == null) { // If the list is empty, new node becomes both head and tail
            first(data);
            return;
        }
        tail.next = node; // Update the current tail's next pointer
        tail = node; // Update the tail to the new node
        size++;
    }

    // Insert in the middle
    public void mid(int data, int index) {
        if (index == 0) { // If index is 0, it's equivalent to inserting at the head
            first(data);
            return;
        }
        if (index == size) { // If index equals size, it's equivalent to inserting at the tail
            last(data);
            return;
        }
        Node node = head;
        for (int i = 1; i < index; i++) {
            node = node.next; // Traverse the list to find the node at (index-1)
        }
        Node temp = new Node(data, node.next); // Create a new node with the next pointer pointing to the current next node
        node.next = temp; // Update the current node's next pointer
        size++;
    }
    public int deletefirst()
    {
        int data=head.data;
        head=head.next;
        if(head==null)
        {tail=null;

        }
        size--;
        return data;
       
    }
    //insert using recursion
    public void insertrec(int value,int index)
    { head=insertrec(value, index, head);

    }
    public Node insertrec(int value, int index, Node node) {
        if (index == 0) {
            Node temp = new Node(value, node);
            size++;
            return temp;
        }
        node.next = insertrec(value, index - 1, node.next);
        return node;
    }

    // Display the linked list
    public void display() {
        Node temp = head;
        while (temp != null) {
            System.out.print(temp.data + " -> "); // Print data of each node
            temp = temp.next; // Move to the next node
        }
        System.out.println("null");
    }

    // Nested Node class
    class Node {
        int data;
        Node next;

        Node(int data) {
            this.data = data;
        }

        Node(int data, Node node) {
            this.data = data;
            this.next = node;
        }
    }

    public static void main(String[] args) {
        ll1 list = new ll1();

        // Test insertion methods
        list.first(56);
        list.last(12);
        list.mid(34, 1); // Insert 34 at index 1
        list.deletefirst();
        list.insertrec(80,2);

        // Display the list
        list.display(); // Output: 56 -> 34 -> 12 -> null
    }
}
