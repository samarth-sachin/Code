import java.util.ArrayList;

public class dfs {
    // Edge class
    static class Edge {
        int source;
        int dest;
        int weight;

        public Edge(int source, int dest, int weight) {
            this.source = source;
            this.dest = dest;
            this.weight = weight;
        }
    }

    // Add edges to the graph
    public static void add(ArrayList<Edge>[] graph) {
        for (int i = 0; i < graph.length; i++) {
            graph[i] = new ArrayList<>();
        }
        // Sample graph (directed)
        graph[0].add(new Edge(0, 1, 1));
        graph[0].add(new Edge(0, 2, 1));
        graph[1].add(new Edge(1, 3, 1));
        graph[2].add(new Edge(2, 3, 1));
        // graph[3] has no outgoing edges
    }

    // DFS implementation
    public static void dfs1(ArrayList<Edge>[] graph, int curr, boolean[] vis) {
        if (vis[curr]) {
            return;
        }
        System.out.println(curr); // Print node as you visit
        vis[curr] = true;

        for (Edge e : graph[curr]) {
            if (!vis[e.dest]) {
                dfs1(graph, e.dest, vis);
            }
        }
    }

    public static void main(String[] args) {
        int V = 4;
        ArrayList<Edge>[] graph = new ArrayList[V];
        boolean[] vis = new boolean[V];

        add(graph);        // Fill the graph with edges
        dfs1(graph, 0, vis); // Start DFS from node 0
    }
}
