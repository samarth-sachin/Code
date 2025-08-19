import java.util.ArrayList;
import java.util.Collections;
public class arrsarkha {

 public static void main(String []args)
 {
  ArrayList<Integer>list=new ArrayList<>();
  //add elements
  list.add(5);
  list.add(2);
  list.add(3);
  System.out.print(list);
  //get element
  int element=list.get(0);
  System.out.println(element);
//add element in between
list.add(0,1);
System.out.println(list);
//set element
list.set(2, 4);
System.out.println(list);
//remove elements
list.remove(2);
System.out.println(list);
//size
int size=list.size();
System.out.println(size);
//sorting
Collections.sort(list);
System.out.println(list);
 }
}
