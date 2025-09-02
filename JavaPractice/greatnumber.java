import java.util.*;
public class greatnumber {
public static int greater(int a,int b)
{
    if (a>b)
    return a;
    else 
    return b;
}
public static void main(String[]args)
{
    Scanner sc=new Scanner(System.in);
    System.out.print("Enter the value of a:");
    int a=sc.nextInt();
    System.out.print("Enter the value of b:");
    int b=sc.nextInt();
    System.out.println(greater(a ,b));
}
}

    

