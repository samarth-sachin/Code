
public class A {
    private int num;
   public String name;
   protected int []arr;
  public int getnum()
   {
   return num;
   }
 public  void setnum(int num)
   {
    this.num=num;
   }
   public A(int num,String name)
   {
    this.name=name;
    this.num=num;
    this.arr=new int [num];
   }

}
