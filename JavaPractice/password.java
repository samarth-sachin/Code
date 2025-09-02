import java.util.Scanner;
public class password {
    public static void main(String[]args)
    {Scanner scanner=new Scanner (System.in);
        System.out.print("Enter your Password");
        int pass=scanner.nextInt();
        if (pass==1234)
        System.out.println("Password is correct");
        else
        System.out.println("Password is incorrect");        
    }
    
}
