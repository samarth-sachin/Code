public class permutation
{
    public static void print(String str,String permutation)
    {
        if (str.length()==0)
        {
            System.out.println(permutation);
            return;
        }
        for (int i=0;i<str.length();i++)
        {
char curr=str.charAt(i);
String newstring=str.substring(0, i)+str.substring(i+1);
System.out.println(permutation);
print(newstring, permutation+curr);
        }
    }
    public static void main(String[] args) {
        String str="123";
        print(str, "");
    }
}