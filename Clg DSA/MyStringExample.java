 class str
   { static void k1(String s) {
        System.out.println(s);
    }
}
     class str1
    { public void k()
    { StringBuffer sb=new StringBuffer();
        sb.append("sam\n");
        sb.append("desh");
        System.out.println(sb);

    }
}
class str2{
    static void k2()
    {
        StringBuilder sb=new StringBuilder();
        sb.append("vit\n");
        sb.append("aiml");
        System.out.println(sb);
    }}
public class MyStringExample {
    public static void main(String[] args) {
        String s = "samarth";
      str p=new str();
      str1 p1=new str1();
      str2 p2=new str2();
      p.k1(s);
      p1.k();
      p2.k2();
        
    }
}
