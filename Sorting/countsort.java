import java.util.Arrays;
public class countsort {
    public static void count(int array[])
        {
            if(array==null||array.length<=1)
            {
                return;
            }
            int max=array[0];
            for(int num:array)
            {
                if(num>max)
                {
                    max=num;
                }
    
            }
            int countarray[]=new int[max+1];
            for(int num:array)
        {
    countarray[num]++;
        }
        int index=0;
        for(int i=0;i<=max;i++)
        {
            while(countarray[i]>0)
            {
                array[index]=i;
                index++;
                countarray[i]--;
            }
        }
    
        }
        public static void main(String[] args) {
            int array[]={6,4,1,9,3,4};
            count(array);
        System.out.println(Arrays.toString(array));
    }
}
