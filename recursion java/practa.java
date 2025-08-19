public class practa {
    public static void print(String str,int idx)
    {
    if(idx==0)
    {
System.out.println(str.charAt(idx));
return;
    }
    System.out.println(str.charAt(idx));
    print(str, idx-1);
    }
    public static void main(String[] args) {
    String str="abcdefghi";
    print(str, str.length()-1);

    }
}
