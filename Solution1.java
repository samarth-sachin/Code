import java.util.Arrays;

class Solution {
    public static int carFleet(int target, int[] position, int[] speed) {
        if(position.length==1) return 1;
        int v[]=new int[speed.length];
        for(int i=0;i<speed.length;i++)
        {
            v[i]=position[i]+speed[i];
        }
        System.out.println(Arrays.toString(v));
        int fleet=0;
        for(int i:v)
        { int sum=i;
            if(sum-target==0) fleet++;
            sum=sum+i;


        }
        return fleet;

    }
    void main()
    { int a[]={10,8,0,5,3};
    int b[]={2,4,1,1,3};
    // System.out.println(carFleet(12, a, b));
    carFleet(12, a, b);

    }
}