import java.util.*;
class Solution{
    static class Node{
        Node left;
        Node right;
        int val;

        public Node(int val) {
             this.left=null;
             this.right=null;
             this.val=val;
        }
    }
private static Node root;
static void populate (int val)
{ Scanner sc=new Scanner(System.in);
    val=sc.nextInt();
    root=new Node(val);
    populate(val, root);

}
static void populate(int val ,Node root)
{ Scanner sc=new Scanner(System.in);
    System.out.println("Do you want to left");
 boolean left=sc.nextBoolean();
 if(left)
 { root.left=new Node(val);
    populate(val,root.left);
    
 }

}
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);

    }
}