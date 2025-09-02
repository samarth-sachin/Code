import java.util.*;

public class exception {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        try {
           
            System.out.println("Enter a number (for division test): ");
            int a = sc.nextInt();
            int d = 8 / a;  
            System.out.println("Result of 8/a = " + d);

            int arr[] = {1, 2, 3};
            System.out.println("Accessing 5th element: " + arr[4]); 

            String str = null;
            System.out.println("Length of string: " + str.length());
        } 
        catch (ArithmeticException e) {
            System.out.println("Arithmetic Exception occurred: Cannot divide by zero!");
        }
        catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Array Index Out Of Bounds Exception occurred!");
        }
        catch (NullPointerException e) {
            System.out.println("Null Pointer Exception occurred!");
        }
        
    }
}
