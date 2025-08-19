
public class problem {
    public static void main(String[] args) {
        int x = 100;
        int y = 70;
        int z = 160;

        int cost = 2 * x + 3 * y;
        int cost_1 = y + 2 * z;
        int cost_2 = z + 2 * y + x;

        int finalCost = Math.min(cost, Math.min(cost_1, cost_2));

        System.out.println(finalCost);
    }
}
