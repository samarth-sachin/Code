public class reverestring {
    public static void printre(String str,int ind)
    {if (ind==0)
        {
            System.out.println(str.charAt(ind));
            return ;
        }
        System.out.println(str.charAt(ind));
        printre(str, ind-1);
    }
    public static void main(String[] args) {
        String str="abcd";
printre(str, str.length()-1);    }
}
