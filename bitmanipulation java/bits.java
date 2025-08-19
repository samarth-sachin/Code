import java.util.*;
public class bits
{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter the value of  decimal :");
        int n=sc.nextInt();
System.out.print("Enter the pos:");
//a no from right side        
int pos=sc.nextInt();
        int bitmask=1<<pos;
        if ((bitmask&n)==0)
        System.out.println("the no is zero");
        else
        System.out.println("the no is 1");
    }
}