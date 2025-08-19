public class oops3
{
    public static class staticblock
    {
        static int a=4;
        static int b;


   static
   {a=b*5;
    System.out.println("im in codeblocks");

   }
   public static void main(String[] args) {
       staticblock obj=new staticblock();
       System.out.println(staticblock.a+""+staticblock.b);
       staticblock.b+=3;
       staticblock obj2=new staticblock();
       System.out.println(staticblock.a+""+staticblock.b);

   }
}
}