public class reversearray{
    public static void main(String[] args) {
        
        int arr[]={4,2,5,1,8,10};
        int start=0;
       
        int end=arr.length-1;
        while(start<end){
        int temp=arr[start];
        arr[start]=arr[end];
        arr[end]=temp;
            start++;
            end--;
        }
        
        for(int i=0;i<arr.length;i++)
        {System.out.println(""+arr[i]);
            
        }
    }
}