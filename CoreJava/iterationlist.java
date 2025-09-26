import java.util.*;

public class iterationlist {
  
 
    public static void main(String[] args)
    {
       
        List<String> names = new LinkedList<>();
      
        names.add("Hi");
        names.add("Today");
        names.add("Rio");
        
        ListIterator<String> namesIterator
            = names.listIterator();

     
        while (namesIterator.hasNext()) {
            System.out.println(namesIterator.next());
        }

       
        for (String s : names) {
            System.out.println(s);
        }
    }
}