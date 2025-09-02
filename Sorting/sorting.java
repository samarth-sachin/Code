import java.util.*;
public class sorting {
    public static void printarray(int arr[])
    {for (int i=0;i<arr.length;i++)
        {
            System.out.println();
        }

    }
    public static void main(String[]args)
    {
        int arr[]={1,6,4,9,0};
        //bubble sort
        for(int i=0;i<arr.length-1;i++)
        {
            for (int j=0;j<arr.length-i-1;j++)
        {if(arr[j]>arr[j+1])
            {//swaping
                int temp=arr[j];
                arr[j+1]=arr[j];
                arr[j+1]=temp;

            }

        }}printarray(arr);
        }
    }
    

