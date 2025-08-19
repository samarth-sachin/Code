public class bubblesort {
  public static void sorting(int arr[])
  {
    for(int i=0;i<arr.length;i++)
    {
        System.out.println(arr[i]+"");
    }
    System.out.println();
  }
  public static void main(String[] args) {
      int arr[]={5,2,6,9,2};
      for(int i=0;i<arr.length-1;i++)
      {
        for(int j=0;j<arr.length-i-1;j++)
        {
            if(arr[j]>arr[j+1])
            {
                int temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
      }
      sorting(arr);
  }
}
