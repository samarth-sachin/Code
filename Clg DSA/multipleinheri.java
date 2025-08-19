import java.util.*;
class a{
    Scanner sc=new Scanner(System.in);
    int s,b;
    void add()
    {   System.out.println("Enter two nos to add");
         s=sc.nextInt();
         b=sc.nextInt();
    }
}

class b extends  a{
    void sub()
    {
        System.out.println(s-b);
    }
    
}
class c extends b{
    void display()
    { System.out.println(s+b);

    }
}
public class multipleinheri {
 public static void main(String[] args) {
    c cr=new c();
    cr.add();
    cr.sub();
    cr.display();
 }   
}
