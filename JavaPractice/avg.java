import java.util.*;
public class avg {
    public static float calculateavg(int a,int b,int c)
{
    float avg=(a+b+c)/3;
    return avg;
}
public static void main(String[]args)
{
    Scanner sc=new Scanner (System.in);
System.out.println("Enter the three no ");
int a=sc.nextInt();
int b=sc.nextInt();
int c=sc.nextInt();
float avg=calculateavg(a,b,c);
System.out.println("The avg of three no is ="+avg);
}
}

