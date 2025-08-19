import java.util.Scanner;
class samarth{
public static void main(String[]args)
{Scanner scanner=new Scanner(System.in);
    System.out.print("enter a no which do you have to make a table=");
    int i=scanner.nextInt();
    int j=1;
while(j<10)
{
    j=j+1;
    int table=i*j;
    System.out.println("table="+table);
}


    


}
}