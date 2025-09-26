import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class comp {
    class Solution{
   static void check()
    { Comparator <Integer>comparator=new Comparator<Integer>() {
       public int compare(Integer x,Integer y)
        {  if(x>y) return 1;
            else if(x<y) return -1;
            else return 0;
        }
    };
        List <Integer>l=new ArrayList<>();
        l.add(10);
        l.add(1);
        l.add(4);
        Collections.sort(l,comparator);
        System.out.println(l);
    }
    public static void main(String[] args) {
        check();
    }
}
}
