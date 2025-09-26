import java.util.Arrays;
import java.util.List;

public class stream {
    void main()
    {
        List <Integer> list=Arrays.asList(8,6,4,3,7,1);
        // Stream <Integer> data=list.stream();
        // System.out.println(data.count());
    //   System.out.println(data.map(n->n*2));
    list.stream().filter(n-> n%2==1).sorted().forEach(n->System.out.println(n));

    }
}
