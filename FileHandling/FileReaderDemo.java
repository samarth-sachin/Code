import java.io.FileReader;
import java.io.IOException;

public class FileReaderDemo {
    public static void main(String[] args) {
        try (FileReader fr = new FileReader("notes.txt")) {
            System.out.println("Reading file contents:");
            int letters;
            while ((letters = fr.read()) != -1) {
                System.out.print((char) letters);
            }
            System.out.println(); // for clean output
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}