import java.util.ArrayList;

public class stack {
    static class StackImpl {
        static ArrayList<Integer> list = new ArrayList<>();

        public static boolean isEmpty() {
            return list.size() == 0;
        }

        public static void push(int data) {
            list.add(data);
        }

        public static int pop() {
            if (isEmpty()) {
                return -1; // Indicate stack is empty
            }
            return list.remove(list.size() - 1); // Remove and return the last element
        }

        public static int peek() {
            if (isEmpty()) {
                return -1; // Indicate stack is empty
            }
            return list.get(list.size() - 1); // Return the last element
        }
    }

    public static void main(String[] args) {
        StackImpl s = new StackImpl();
        s.push(2);
        while (!s.isEmpty()) {
            System.out.println(s.peek());
            s.pop(); // Call pop to remove the element after peeking
        }
    }
}
