import java.util.*;

public class elementfound {
    public static void main(String[] args) {
        LinkedList<Integer> list = new LinkedList<>();
        list.add(6);
        list.add(4);
        list.add(5);

        int element = 6;
        int ans = -1;

        // Iterate through the LinkedList
        for (int i = 0; i < list.size(); i++) {
            int sam = list.get(i);
            if (sam == element) {
                ans = i; // Store the index if the element is found
                break; // Exit the loop since we've found the element
            }
        }

        // Check if the element was found and print the result
        if (ans == -1) {
            System.out.println("Element not found");
        } else {
            System.out.println("The element is at index: " + ans);
        }
    }
}
