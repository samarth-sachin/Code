import java.util.*;
public class removeelement {
    public static void main(String[] args) {
     LinkedList<Integer>list=new LinkedList<>();
     Scanner sc=new Scanner(System.in);
     System.out.println("enter a 5 no in between 1 to 50");
    for(int i=0;i<5;i++)
    {
        int num=sc.nextInt();
        if(num>50||num<1)
        {
            System.out.println("entered invlaid no"+num);
            return;
        }
        list.add(num);
    }
    for(int i=0;i<list.size();i++)
    {
        if(list.get(i)>25)
        {
            System.out.println("the no greatear than 25 is="+list.get(i));
            list.remove(i);
            i--;
        }
    }
    Collections.sort(list);
    System.out.println("the remaining element will be="+list);
    
    }}