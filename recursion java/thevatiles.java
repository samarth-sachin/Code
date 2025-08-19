public class thevatiles {
public static int placetiles(int n,int m)
{
    if(m==n)
    {
        return 2;
    }
    if(n<m)
{
    return 1;
}
//vertically
int placeverticall=placetiles(n-m, m);
//horizontally
int placehorizontal=placetiles(n-1, m);
return placehorizontal+placeverticall;
}
public static void main(String[] args) {
    int m=2;
    int n=4;
    System.out.println(placetiles(n, m));
}
}
