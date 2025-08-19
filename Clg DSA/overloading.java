 class overloading{
 static  int sum()
    { int a=5;
        int b=10;
         return a+b;
    }
   static int sum(int x,int y)
    {
        return x+y;
    }
   static int sum(int c ,int e,int f)
    {
        return c+e+f;
    }

  public static void main(String[] args) {
    int a=sum();
    int b=sum(4,9);
    int c=sum(5,8,9);
    System.out.println(a);
        System.out.println(b);
    System.out.println(c);


  }

 }