public class splitarraybinarysearch {
    public static void main(String[]args)
    {
    
    }
    static int splitarray(int nums[],int m)
    {
int start=0;
int end=0;
for(int i=0;i<nums.length;i++)
{
    start=Math.max(nums[i], start);
    end+=nums[i];
    while(start<end)
    {
int mid=start+(end-start)/2;
int sum=0;
int pieces=1;
for(int num:nums)
{
if(sum+num>mid){
    sum=num;
    pieces++;
}
else
{
    sum+=num;
}
}
if(pieces>m){
start=mid+1;
}
else{
    end=mid;
}

    }
}
//here end==sum because we have cut it down in that array and also mid also be the same
return end;
    }
}
