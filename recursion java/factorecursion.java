import java.util.*;
public class factorecursion
{
    public static int calculatefacto(int a)
   {
    if (a==1||a==0)
    {
        return 1;
    }
    int facto=calculatefacto(a-1);
    int facton=a*calculatefacto(a-1);
    return facton;
}
public static void main(String[]args)
{int a=5;
    int ans=calculatefacto(a);
    System.out.println(ans);
}}