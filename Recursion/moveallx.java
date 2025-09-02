public class moveallx {
public static void movex(String str,int idx,int count,String newstring)
{if(idx==str.length())
  {
    System.out.println(newstring);
  }
char curr=str.charAt(idx);
if(curr=='x')
{
  count++;
  movex(str, idx+1, count, newstring);
  
}
else
{newstring=newstring+curr;
  movex(str, idx+1, count, newstring);
}
}
public static void main(String[] args) {
  
  String newstring="abcxhuxx";
  movex(newstring, 0, 0, "");
}
}