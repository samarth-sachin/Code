import java.util.ArrayList;

public class cycleun {
    static class Edge {
        int src;
        int dest;
        public Edge(int s, int d) {
            this.src = s;
            this.dest = d;
        }
    }

    public static void add(ArrayList<Edge> graph[]) {
        for (int i = 0; i < graph.length; i++) {
            graph[i] = new ArrayList<>();
        }
        graph[0].add(new Edge(0, 1));
        graph[0].add(new Edge(0, 2));
        graph[0].add(new Edge(0, 3));
        graph[1].add(new Edge(1, 0));
        graph[1].add(new Edge(1, 2));
        graph[2].add(new Edge(2, 0));
        graph[2].add(new Edge(2, 1));
        graph[3].add(new Edge(3, 0));
        graph[3].add(new Edge(3, 4));
        graph[4].add(new Edge(4, 3));
    }

    public static boolean undirect(ArrayList<Edge> graph[], boolean vis[], int curr, int parent) {
        vis[curr] = true;
        for (Edge e : graph[curr]) {
            if (!vis[e.dest]) {
                if (undirect(graph, vis, e.dest, curr)) {
                    return true;
                }
            } else if (e.dest != parent) {
                // If an already visited vertex is not the parent, it's a cycle
                return true;
            }
        }
        return false;
    }

    public static boolean isCyclic(ArrayList<Edge>[] graph, boolean vis[]) {
        for (int i = 0; i < graph.length; i++) {
            if (!vis[i]) {
                if (undirect(graph, vis, i, -1)) {
                    return true;
                }
            }
        }
        return false;
    }

    public static void main(String[] args) {
        int V = 5;
        ArrayList<Edge> graph[] = new ArrayList[V];
        boolean vis[] = new boolean[V];
        add(graph);

        System.out.println("Cycle present? " + isCyclic(graph, vis));
    }
}
