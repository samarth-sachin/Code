import java.util.*;
public class power {
    public static void main(String[]args)
    {
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter a number");
        int a=sc.nextInt();
        System.out.print("Enter a power of a number");
        int n=sc.nextInt();
     int power=1;
        
    
    for(int i=0;i<=n;i++)
    {
       power=power*a;
       System.out.print(power);
    }
}
}