import java.util.*;
public class multiplyf {
    public static int calculatemulti(int a,int b)
    { int multi=a*b;
        return multi;

    }
    public static void main(String[]args)
    {
        Scanner sc=new Scanner(System.in);
        System.out.print("enter value of a no :");
        int a=sc.nextInt();
        
        System.out.print("Enter value of another no:");
        int b=sc.nextInt();
        int multi=calculatemulti(a, b);
        System.out.print("the multiplication of the no:"+multi);

    }
    
}
