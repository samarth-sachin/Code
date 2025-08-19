public class linearsear {
    public static void main(String[] args) {
        String name="samarth";
        char temp='a';
        System.out.println(search(name,temp));
    }
    static boolean search(String str,char temp)
    {
        if(str.length()==0)
        {return false;

        }
        for (int i = 0; i <str.length(); i++)
        {
            if(temp==str.charAt(i));
            {
                return true;
            }
        }
        return false;
            
        }
    }
