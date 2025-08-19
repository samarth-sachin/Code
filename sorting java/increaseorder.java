public class increaseorder {
    public static boolean isarray(int  arr[],int ind)
    {if (ind==arr.length-1)
        {
return true;
        }
        if(arr[ind]<arr[ind+1])
        {isarray(arr, ind+1);}
        else
        {return false;

        }
        return isarray(arr, ind);
    }
    public static void main(String[] args) {
        int arr[]={2,7,1,8};
        System.out.println(isarray(arr, 0));
    }
}
