import java.util.*;
public class twodarray {
public static void main(String[]args)
{
    Scanner sc=new Scanner(System.in);
System.out.print("Enter value of rows:");
int rows=sc.nextInt();
System.out.print("Enter value of columns:");
int columns=sc.nextInt();
    int numbers [][]=new int [rows][columns];
    for (int i=0;i<rows;i++)
    {
        for (int j=0;j<columns;j++)
        {
            numbers [i][j]=sc.nextInt();
        }
    }for (int i=0;i<rows;i++)
    {
        for (int j=0;j<columns;j++)
        {
            System.out.print(numbers[i][j]+"");
        }
        System.out.println();
    }

}
}
