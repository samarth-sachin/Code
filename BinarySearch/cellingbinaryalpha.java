public class cellingbinaryalpha {
    public static void main(String []args)
    {
        char [] letters={'a','b','c','d'};
        char target='a';
        char ans=cellingalpha(letters, target);
    }
    public static char cellingalpha(char[]letters,char target)
    {int start=0;
        int end=letters.length-1;
        while(start<=end)
      {  int mid=start+(end-start)/2;
        if(letters[mid]<target)
            {
                end=mid-1;
            }
           else if(letters[mid]>target)
            {
                start=mid+1;
            }
            else
            {
                return letters[start%letters.length];
            }
        
        }
return letters[start];
    }
}
