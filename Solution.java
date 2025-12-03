import java.util.Arrays;

class Solution {
    public static int kthElement(int a[], int b[], int k) {
        // code here
        int v[]=new int[a.length+b.length];
        int s=0;
        for(int i=0;i<a.length;i++)
        { v[i]=a[i];

        }
        for(int i=0;i<b.length;i++)
        {
            v[i+a.length]=b[i];
        }
        Arrays.sort(v);
        return v[k-1];
    }
   
    void main()
    {
       kthElement(new int[]{1,2,3}, new int[]{4,5,6}, 4);
    }
}