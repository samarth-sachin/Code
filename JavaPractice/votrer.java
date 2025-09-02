import java.util.*;
public class votrer {
public static boolean voterid(int a)
{ 
  if (a>18){
  return true;}
  else 
  {return false;}
}
public static void main (String[]args)
{ Scanner sc=new Scanner(System.in);
    System.out.print("Enter the age :");
    int a=sc.nextInt();
    System.out.println(voterid(a));

}


}
    