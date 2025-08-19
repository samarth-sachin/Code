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
    void display()
    { System.out.println(s+b);

    }
}

public class singleinheritance {
  public static void main(String[] args) {
    
    b br=new b();
    br.add();
    br.display();
  }   
}
