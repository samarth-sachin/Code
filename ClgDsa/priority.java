class A extends Thread {
    public void run() {
        System.out.println("hello");
    }
}

class B extends Thread {
    public void run() {
        System.out.println("hi");
    }
}

class priority {
    public static void main(String[] args) {
        Thread a = new A();
        Thread b = new B();

        System.out.println("Default priority of a: " + a.getPriority());
        System.out.println("Default priority of b: " + b.getPriority());

        
        b.setPriority(Thread.MAX_PRIORITY); 
        a.setPriority(Thread.MIN_PRIORITY); 

        System.out.println("New priority of a: " + a.getPriority());
        System.out.println("New priority of b: " + b.getPriority());

        a.start();
        b.start();
    }
}
