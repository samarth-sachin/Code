import java.util.ArrayList;

class GFG {
    static ArrayList<Integer> find(int arr[], int x) {
        ArrayList<Integer> l = new ArrayList<>();
        int start=-1,end=-1;
   
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == x) {
               start=i;
                break;
            }
        }
        
        for (int i = arr.length - 1; i >= 0; i--) {
            if (arr[i] == x) {
                end=i;
                break;
            }
        }
        l.add(start);
        l.add(end);
        return l;
    }

    public static void main(String[] args) {
        System.out.println(find(new int[]{1, 3, 5, 5, 5, 5, 67, 123, 125}, 5));
    }
}