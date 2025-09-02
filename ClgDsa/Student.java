public class Student {
   
    static String university;
    int studentId;
    String name;

    static {
        university = "Global Institute";
    }

    {
        studentId = 0;
        name = "Unknown";
    }

    public Student() {
    }

    public Student(int studentId) {
        this.studentId = studentId;
    }

    public Student(int studentId, String name) {
        this.studentId = studentId;
        this.name = name;
    }

    static void showUniversity() {
        System.out.println("University: " + university);
    }

    void showDetails() {
        System.out.println("ID: " + studentId + ", Name: " + name);
    }

    public static void main(String[] args) {
        Student.showUniversity();

        Student s1 = new Student();
        Student s2 = new Student(101);
        Student s3 = new Student(102, "Aarav");

        s1.showDetails();
        s2.showDetails();
        s3.showDetails();
    }
}


