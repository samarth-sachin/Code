public class pracs9 {
     public static int calfacto(int a)
     {if(a==0||a==1)
        {
            return 1;
        }
        int facto=calfacto(a-1);
        int fac=facto*a;
        return fac;
     }
     public static void main(String[] args) {
        int a=5;
        int ans=calfacto(a);
        System.out.println(ans);
     }
}
