import java.util.Scanner;
public class starpyramid {
    public static void main(String[]args)
    {
        Scanner scanner=new Scanner(System.in);
 System.out.println("enter a no which have to make a pyramid in columns");
 int n=scanner.nextInt();
 for (int i=1; i<=n; i++)
 {
    for(int j=1; j<=i; j++)
    System.out.println("*");

 }
System.out.println();

    }
    
}
