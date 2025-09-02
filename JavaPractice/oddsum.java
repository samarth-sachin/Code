import java.util.*;
public class oddsum {
    public static int calculatesum(int a)
    {
        int sum=a*a;
        return sum;

    }
   public static void main(String[]args)
   {
    Scanner sc=new Scanner(System.in);
    System.out.println("Enter value of odd no to calculate a sum");
    int a=sc.nextInt();
    int sum=calculatesum(a);
    System.out.println(sum);
   }

    
}
