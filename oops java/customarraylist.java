import java.util.Arrays; // Import the Arrays class for toString method

public class customarraylist {
    private int[] data;
    private static final int DEFAULT_SIZE = 10;
    private int size = 0;

    public customarraylist() {
        this.data = new int[DEFAULT_SIZE];
    }

    public void add(int num) {
        if (isFull()) {
            resize();
        }
        data[size++] = num;
    }

    private boolean isFull() {
        return size == data.length; // size value is also known as index value 
    }

    private void resize() {
        int[] temp = new int[data.length * 2];
        for (int i = 0; i < data.length; i++) {
            temp[i] = data[i];
        }
        data = temp; // Correctly assign the new array to the data field
    }

    public int remove() {
        if (size > 0) {
            int removed = data[--size];
            return removed;
        } else {
            throw new IndexOutOfBoundsException("Cannot remove from an empty list.");
        }
    }

    public int get(int index) {
        if (index >= 0 && index < size) {
            return data[index];
        } else {
            throw new IndexOutOfBoundsException("Index: " + index + ", Size: " + size);
        }
    }

    public int size() {
        return size;
    }

    public void set(int index, int value) {
        if (index >= 0 && index < size) {
            data[index] = value;
        } else {
            throw new IndexOutOfBoundsException("Index: " + index + ", Size: " + size);
        }
    }

    @Override
    public String toString() {
        return "customlist " + Arrays.toString(Arrays.copyOf(data, size)) + ", size=" + size;
    }

    public static void main(String[] args) {
        customarraylist list = new customarraylist();
        list.add(45);
        list.add(65);
        System.out.println(list);

        list.set(1, 100);
        System.out.println(list);

        System.out.println("Element at index 1: " + list.get(1));
        
        list.remove();
        System.out.println(list);
        
        list.remove();
        System.out.println(list);
    }
}
