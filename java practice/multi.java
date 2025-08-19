import java.util.Scanner;
public class multi
{
    public static void main(String[]args)
    {
        Scanner scanner=new Scanner(System.in);
        System.out.println("enter a no which do you have to multiiply");
        int a=scanner.nextInt();
        System.out.println("enter a second no which do you have to multiply");
        int b=scanner.nextInt();
        int multi=a*b;
        System.out.println(multi);
    }
}