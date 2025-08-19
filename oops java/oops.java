public class oops {

    public static void main(String[] args) {
        // Creating an array of 5 Student objects
        Student[] students = new Student[5];
        
        // Creating instances of Student and assigning values
        students[0] = new Student(13, "John", 85.5f);
        students[1] = new Student(14, "Alice", 92.0f);
        students[2] = new Student(15, "Bob", 78.3f);
        students[3] = new Student(16, "Charlie", 88.7f);
        students[4] = new Student(17, "David", 90.1f);
        
        // Accessing student details
        for (Student student : students) {
            System.out.println("Roll No: " + student.getRollno() + ", Name: " + student.getName() + ", Marks: " + student.getMarks());
        }
    }

    // Student class
    static class Student {
        int rollno;
        String name;
        float marks;

        // Constructor to initialize Student object
        public Student(int rollno, String name, float marks) {
            this.rollno = rollno;
            this.name = name;
            this.marks = marks;
        }

        // Getters
        public int getRollno() {
            return rollno;
        }

        public String getName() {
            return name;
        }

        public float getMarks() {
            return marks;
        }
    }
}
