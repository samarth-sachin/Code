public class practice {
public static void print15(int a)
{
    if (a==10)
    {
        return;
    }
    System.out.println(a);
    print15(a+1);
}    
public static void main(String[] args) {
int a=0;
    print15(a);
}
}
