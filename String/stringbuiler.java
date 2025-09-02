import java.util.*;
public class stringbuiler {
    public static void main(String args[])
    {StringBuilder sb=new StringBuilder("Samarth");
    System.out.println(sb);
    //output can be simplified
    System.out.println(sb.charAt(0));
    //output can be changed in String builder
    sb.setCharAt(0, 'a');
    System.out.println(sb);
    //insert character
    sb.insert(1, 's');
    System.out.println(sb);
//delete a charactere
sb.delete(0, 1);
System.out.println(sb);


    }
}
