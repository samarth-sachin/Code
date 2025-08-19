

public class Box {
    double h;
    double l;
    double w;

    // Default constructor with values -1
    Box() {
        this.h = -1;
        this.l = -1;
        this.w = -1;
    }

    // Constructor for a cube (all sides are equal)
    Box(double side) {
        this.h = side;
        this.l = side;
        this.w = side;
    }

    // Constructor with different height, length, and width
    Box(double h, double l, double w) {
        this.h = h;
        this.l = l;
        this.w = w;
    }

    // Constructor that copies the values from another Box object
    Box(Box box) {
        this.h = box.h;
        this.l = box.l;
        this.w = box.w;
    }

    // Method to display information about the box
    public void getInfo() {
        System.out.println("Running the box");
    }
}
