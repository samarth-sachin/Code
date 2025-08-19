public class overloading1 {
      int sum()
    { int a=5;
        int b=10;
         return a+b;
    }
    int sum(int x,int y)
    {
        return x+y;
    }
  int sum(int c ,int e,int f)
    {
        return c+e+f;
    }

  public static void main(String[] args) {
    overloading1 so=new overloading1();
    int a=so.sum();
    int b=so.sum(4,9);
    int c=so.sum(5,8,9);
    System.out.println(a);
        System.out.println(b);
    System.out.println(c);


  }
}
