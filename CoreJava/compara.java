import java.util.*;
public class compara {



    static void check() {
        List<Student> l = new ArrayList<>();
        l.add(new Student(1, "sam"));
        l.add(new Student(2, "patil"));
        l.add(new Student(3, "cheetah"));

        Collections.sort(l); // Uses compareTo

        System.out.println(l); // Prints readable student info
    }

    public static void main(String[] args) {
        check();
    }
}

class Student implements Comparable<Student> {
    int roll;
    String name;

    public Student(int r, String s) {
        this.roll = r;
        this.name = s;
    }

    public int compareTo(Student other) {
        if (this.roll < other.roll) return -1;
        else if (this.roll > other.roll) return 1;
        else return 0;
    }

    public String toString() {
        return "Roll: " + roll + ", Name: " + name;
    }
}

