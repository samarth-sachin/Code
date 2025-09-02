import java.util.*;

public class Consumer {
    static class produce1 {
        int quantity;
        String name;
        boolean available;

        public produce1() {
            this.quantity = 0;
            this.name = null;
            this.available = false;
        }
    }

    static class produce2 {
        int quantity1;
        String item;
        boolean isThere;

        public produce2() {
            this.quantity1 = 0;
            this.item = null;
            this.isThere = false;
        }
    }

    static class SharedResource {
        produce1 p1 = new produce1();
        produce2 p2 = new produce2();
        boolean consumed = true;

        public synchronized void produce(String producerName) {
            while (!consumed) {
                try {
                    wait();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }

            if (producerName.equals("Producer1")) {
                p1.name = "Brush";
                p1.quantity = new Random().nextInt(5) + 1;
                p1.available = true;
                System.out.println(producerName + " produced: " + p1.name + " x" + p1.quantity);
            } else {
                p2.item = "Paste";
                p2.quantity1 = new Random().nextInt(5) + 1;
                p2.isThere = true;
                System.out.println(producerName + " produced: " + p2.item + " x" + p2.quantity1);
            }

            consumed = false;
            notify();
        }

        public synchronized void consume() {
            while (consumed) {
                try {
                    wait();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }

            if (p1.available) {
                System.out.println("Consumer bought: " + p1.name + " x" + p1.quantity);
                p1.available = false;
            }

            if (p2.isThere) {
                System.out.println("Consumer bought: " + p2.item + " x" + p2.quantity1);
                p2.isThere = false;
            }

            consumed = true;
            notify();
        }
    }

    public static void main(String[] args) {
        SharedResource resource = new SharedResource();

        Thread producer1 = new Thread(() -> {
            for (int i = 0; i < 5; i++) {
                resource.produce("Producer1");
                try {
                    Thread.sleep(500);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        });

        Thread producer2 = new Thread(() -> {
            for (int i = 0; i < 5; i++) {
                resource.produce("Producer2");
                try {
                    Thread.sleep(700);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        });

        Thread consumer = new Thread(() -> {
            for (int i = 0; i < 10; i++) {
                resource.consume();
                try {
                    Thread.sleep(600);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        });

        producer1.start();
        producer2.start();
        consumer.start();
    }
}
