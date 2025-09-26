public class generics <T>{
   private T t;
   public void add(T t)
   {
    this.t=t;
   }

    public T getT() {
        return t;
    }
    public static void main(String[] args) {
        generics<String>a=new generics<>();
        generics<Integer>b=new generics<>();
        a.add("samarth");
        b.add(2);
        System.out.println(a.getT());
        System.out.println(b.getT());

    }
   
    
}
