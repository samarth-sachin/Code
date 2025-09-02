import java.util.*;
public class matrixadd
{
    public static void main(String[]args)
    {
      Scanner sc=new Scanner(System.in);
      System.out.print("enter no of rows and column");
      int rows=sc.nextInt();
      int cols=sc.nextInt();
      int m1[][]=new int [rows][cols];
int m2[][]=new int [rows][cols];
int sum[][]=new int [rows][cols]; 
System.out.print("Enter value of matrix m1");
      for (int i=0;i<rows;i++)
      {
        for (int j=0;j<cols;j++)
        {m1[i][j]=sc.nextInt(); 

        }
      }

      System.out.print("enter value of matrix m2");
      for (int i=0;i<rows;i++)
      {
        for (int j=0;j<cols;j++)
        {
            m2[i][j]=sc.nextInt();
            sum[i][j]=m1[i][j]+m2[i][j]; 
        }
        System.out.println(sum);
       
    }
      
    }


}
