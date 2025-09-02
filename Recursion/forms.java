public class forms {
    public static void form(String str,int idx,String newstring)
    {
        if (idx==str.length())
        {
            System.out.println(newstring);
            return;
        }
char curr=str.charAt(idx);
//to be
form(str, idx+1, newstring);
//not to be
form(str, idx+1, newstring);
System.out.println();
    }
    public static void main(String[] args) {
        String newstring="abc";
        form(newstring, 0, "");
        System.out.println();
    }
}
