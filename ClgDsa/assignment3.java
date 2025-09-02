import java.util.Scanner;
class assignment3{
   static  double triangle(int height,int base)
     { return 0.5*height*base;}
     static int square(int side)
     {return side*side;}
     static int rectangle(int length,int breadth)
     {return length*breadth;}
     static double  circle(int radius)
     {return 3.14*radius*radius;}
     public static void main(String[]args)
    { Scanner sc=new Scanner(System.in);
        System.out.println("Area of triangle");
        System.out.println("Area of square");
        System.out.println("Area of rectangle");
        System.out.println("Area of Circle");
        System.out.println("<--------------->");
        int n=sc.nextInt(); 
        switch (n) {
            case 1 :
             System.out.println("Enter value of height");
              int height=sc.nextInt();
              System.out.println("Enter the value of base");
               int base=sc.nextInt();
              double ans= triangle(height,base);
                System.out.println("Area of triangle is:"+ans);
                break;
                case 2:
                System.out.println("Enter value of side");
                int side=sc.nextInt();
                System.out.println("Area of square is"+square(side));
                break;
                case 3:
                System.out.println("Enter value of length");
                int length=sc.nextInt();
                System.out.println("Enter value of Breadth");
                int breadth=sc.nextInt();
                System.out.println("Area of rectangle is"+rectangle(length, breadth));
                break;
                case 4:
                System.out.println("Enter value of radius");
                int r=sc.nextInt();
                System.out.println("Area of circle is:"+circle(r));
            default:
                throw new AssertionError();
        }
       
    }
}