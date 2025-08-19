package leetcode java;

public class largestnosort {
    import java.util.*;

class Solution {
    public String largestNumber(int[] nums) {
        // Convert the sorted numbers to strings and create two arrays based on the digits
        ArrayList<String> firstArray = new ArrayList<>();
        ArrayList<String> secondArray = new ArrayList<>();
        
        for (int num : nums) {
            if (num >= 10 && num <= 99) { // Check if the number is a two-digit number
                int dividend = num / 10;
                int remainder = num % 10;
                
                firstArray.add(String.valueOf(dividend));
                secondArray.add(String.valueOf(remainder));
            } else {
                // Add single-digit numbers directly to one of the arrays, e.g., firstArray
                firstArray.add(String.valueOf(num));
            }
        }

        // Merge the two arrays into one string
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < firstArray.size(); i++) {
            sb.append(firstArray.get(i));
            if (i < secondArray.size()) {
                sb.append(secondArray.get(i));
            }
        }

        // Sort the resulting string in descending order
        char[] chars = sb.toString().toCharArray();

        // Convert the char array to a Character array (needed for reverse sorting)
        Character[] charObjects = new Character[chars.length];
        for (int k = 0; k < chars.length; k++) {
            charObjects[k] = chars[k];
        }

        // Sort the Character array in descending order
        Arrays.sort(charObjects, Collections.reverseOrder());

        // Clear the original StringBuilder
        sb.setLength(0);

        // Append the sorted characters back to the StringBuilder
        for (Character c : charObjects) {
            sb.append(c);
        }

        return sb.toString();
    }
}

}
