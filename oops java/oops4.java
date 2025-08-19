public class oops4 {
   public class innerclass{
static class test{
    String name;
    public test(String name)
    {
        this.name=name;
    }

}
public static void main(String[] args) {
    test a=new test("samarth");
    test b=new test("bondre");
    System.out.println(a.name);
    System.out.println(b.name);
}
    }
}
