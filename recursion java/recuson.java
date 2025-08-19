import java.util.*;
public class recuson 
//in recursion the function is must
{ public static void printno(int n)
  { if (n==0)
    { return ;
   }
   System.out.println(n);
   printno(n-1);
 } public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter a no:");
        int n=sc.nextInt();
printno(n);    
    }
}