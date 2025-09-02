public class duplicateas {
    public static boolean[]map=new boolean[26];
    public static void duplicateas(String str,int idx,String newstring)
        {if (idx==str.length())
            {
                System.out.println(newstring);
                return ;
            }
            char curr=str.charAt(idx);
            if (map[curr-'a'])
            {
                duplicateas(str, idx+1, newstring);
            }
else
newstring+=curr;

duplicateas(str, idx+1, newstring);
    } 
public static void main(String[] args) {
    String newstring="abbccccdda";
    duplicateas(newstring, 0, "");
}    
}
