public class staticpolymor{
    static int sum(int a,int b)
    {
        return a+b;
    }
    static int sum(int a,int b,int c)
    {
        return a+b+c;
    }
    public static void main(String[] args) {
        int jai=sum(4, 6);
        System.out.println(jai);
    }
}