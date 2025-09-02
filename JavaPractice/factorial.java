import java.util.*;
public class factorial {
    public static void main (String[]args)
    { Scanner sc=new Scanner(System.in);
        int factorial=1;
        System.out.print("Enter value of n");
        int n=sc.nextInt();
        
        for (int i=1;i<=n;i++)
        {
            factorial=factorial*i;
            System.out.print(factorial);
        }
        
    }
}
