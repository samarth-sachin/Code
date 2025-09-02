import java.util.*;
public class maxmin {
    public static void main(String[]args)
    {
       Scanner sc=new Scanner(System.in);
       int maxmin[]=new int[1];
       System.out.print("Enter a no");
        maxmin [0]=sc.nextInt();
System.out.print("Enter another no");
maxmin[1]=sc.nextInt();
if (maxmin[0]>maxmin[1])
{
    System.out.print("the max no is :"+maxmin[0]);
}
else
{
    System.out.print("The max no is:"+maxmin[1]);
}

    }
    
}
