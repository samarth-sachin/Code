import java.util.Scanner;

public class withoutfunction
   
{
    public static void main(String[]args)
    {Scanner sc=new Scanner(System.in);
      int arr[]={5,3,2,1,8};
      System.out.println("enter a no to find index");
      int element=sc.nextInt();
      



    for(int i=0;i<arr.length;i++)
    {
        if(arr[i]==element)
        {
            System.out.println(i);
        }
    }

System.out.println();
      
        }}


