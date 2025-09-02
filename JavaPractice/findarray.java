import java.util.*;
public class findarray {
  public static void main(String[]args)
  {
    Scanner sc=new Scanner(System.in);
    System.out.print("Enter the value of a column:");
    int column=sc.nextInt();
    System.out.print("Enter the value of a row:");
    int row =sc.nextInt();
    int numbers[][]=new int [row][column];
    //inputs for 2d array
for (int i=0;i<row;i++)
{
    for (int j=0;j<row;j++)
    {
        numbers[i][j]=sc.nextInt();

    }
}System.out.print("Enter a value to find coordinates");
int x=sc.nextInt();
for (int i=0;i<row;i++)
{
    for (int j=0;j<column;j++)
    {
        System.out.print(numbers[i][j]);

    }
} System.out.println();
}
}
