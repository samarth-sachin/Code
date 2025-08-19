
public class towerofhanoi {
  public static void towerofhanoi(int n,String src,String hel,String des)
  {if (n==1)
    {System.out.print("the disk transfer from"+n+"soure to"+src+"destination"+des);
return;
  }
  towerofhanoi(n, src, des, hel);
  System.out.print("the disk transfer from"+n+"soure to"+src+"destination"+des);
  towerofhanoi(n, hel, src, des);
  }
    
public static void main(String[] args) {
int n=3;
towerofhanoi(n, "S", "H","D");    
}
}
