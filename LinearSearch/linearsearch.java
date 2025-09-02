import java.util.*;
public class linearsearch
{
    public static void main(String[]args)
    {Scanner sc=new Scanner(System.in);
      int arr[]={5,3,2,1,8};
      System.out.println("enter a no to find index");
      int searachelement=sc.nextInt();
      int index=linearsearch(arr,searachelement);
if(index!=-1)
{
    System.out.println("The no is found at "+index);

}
else{
    System.out.println("The no does not exist ");
}}
public static int linearsearch(int arr[],int element)
{
    for(int i=0;i<arr.length;i++)
    {
        if(arr[i]==element)
        {
            return i;
        }
    }

return -1;
      
        }
}