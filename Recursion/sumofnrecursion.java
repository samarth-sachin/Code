import java.util.*;
public class sumofnrecursion {
    public static void printsum(int a,int b,int sum)
    {if (a==b){
        sum=sum+a;
        System.out.println(sum);
        
        return ;}
        sum=sum+a;
        printsum(a+1,b,sum);
    }
    public static void main(String[]args)
    {Scanner sc=new Scanner(System.in);
        printsum(1,5 , 0);

    }
}
