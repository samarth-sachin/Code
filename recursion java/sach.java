public class sach
{
    public static void print(String str,int idx)
    {
        if (idx==0)
        {
            System.out.println(str.charAt(idx));
            return;
        }
        System.out.println(str.charAt(idx));
        print(str, idx-1);
    }

public static void main(String[] args) {
    String str="abcdefghijklmnopqrstuvwxyz";
    print(str, str.length()-1);
}
}