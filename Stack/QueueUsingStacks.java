import java.util.Stack;

public class QueueUsingStacks {
    static Stack<Integer> s1 = new Stack<>();
    static Stack<Integer> s2 = new Stack<>();

    // Check if the queue is empty
    public static boolean isEmpty() {
        return s1.isEmpty() && s2.isEmpty();
    }

    // Add an element to the queue
    public static void add(int data) {
        // Push all elements from s1 to s2
        while (!s1.isEmpty()) {
            s2.push(s1.pop());
        }
        // Push the new element into s1
        s1.push(data);
        // Push all elements back from s2 to s1
        while (!s2.isEmpty()) {
            s1.push(s2.pop());
        }
    }

    // Remove and return the front element of the queue
    public static int remove() {
        if (isEmpty()) {
            System.out.println("Queue is empty");
            return -1; // or throw an exception
        }
        return s1.pop();
    }

    // Peek at the front element without removing it
    public static int peek() {
        if (isEmpty()) {
            System.out.println("Queue is empty");
            return -1; // or throw an exception
        }
        return s1.get(s1.size() - 1); // Peek at the last element added to s1
    }

    public static void main(String[] args) {
        QueueUsingStacks q = new QueueUsingStacks();
        q.add(1);
        q.add(2);
        q.add(3);
        q.add(4);

        while (!q.isEmpty()) {
            System.out.println(q.peek());
            q.remove();
        }
    }
}

