import java.util.*;
public class palindrome {
    public static void main(String[]args)
    {
    LinkedList<Integer>list=new LinkedList<>();
    Scanner sc= new Scanner(System.in);
    int rev=0;
   
    System.out.println("enter a no ");
    int num=sc.nextInt();
    list.add(num);
    int original=num;
    while(num>0)
    {
        rev=(rev*10)+num/10;
    }
    if(original==num)
    {
        System.out.println("the no is palindrome");

    }
    else 
    System.out.println("the no is not palindrome");
    

    

    }
}
