import java.util.Scanner;
public class alag{
    public static void main(String[]args){
        Scanner scanner=new Scanner(System.in);
        System.out.println("enter value of a");
        int button=scanner.nextInt();
        switch(button){
            case 1:System.out.println("Hello");
            break;
            case 2:System.out.println("Namaste");
            break;
            case 3:System.out.println("Ram Ram");
            break;
            default:
            System.out.println("Invalid option");
        }
        

    }
    
}
