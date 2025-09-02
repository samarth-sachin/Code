class finale{
    static void a()
    { 
        try{ 
            int v[]={1,2,3};
            int kop=v[5];
            System.out.println(kop);

        }
        catch(Exception e)
        { System.out.println("There is no one:"+e.getMessage());

        }
        finally{
         System.out.println("Always");
        }
    }
    public static void main(String[] args) {
        a();
    }
}