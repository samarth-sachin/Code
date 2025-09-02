public class Singleton {
    // Step 1: Private static instance
    private static Singleton instance;

    // Step 2: Private constructor to prevent instantiation
    private Singleton() {
        // Optional: initialization logic
    }

    // Step 3: Public static method to get the instance
    public static synchronized Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }

    // Example method
    public void showMessage() {
        System.out.println("Hello from Singleton!");
    }
}