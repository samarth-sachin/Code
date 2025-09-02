import java.util.Scanner;
public class compare {
    public static void main(String[]args)
    {
        Scanner scanner=new Scanner(System.in);
        System.out.print("Enter value of a");
        int a=scanner.nextInt();
        System.err.print("Enter value of b");
        int b=scanner.nextInt();
        if (a>b)
        System.out.println("a is greater than b");
        else if (a==b)
        System.out.println("a is equal to b");
        else 
        System.out.println("b is greater than a");

    }
    
}
