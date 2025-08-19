public class objectprint {
    int num;
    public objectprint(int num)
    {
        this.num=num;
    }
    @Override
    public String toString()
    {
       return "object print{"+num+"}";
    }
    public static void main(String[] args) {
        objectprint object=new objectprint(55);
        System.out.println(object);
    }
}
