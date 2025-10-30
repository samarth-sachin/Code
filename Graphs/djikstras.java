import java.util.*;
//time complexity:- O(e+elogv)
public class djikstras {
    static class Edge {
        int src;
        int dest;
        int weight;

        public Edge(int s, int d, int w) {
            this.src = s;
            this.dest = d;
            this.weight = w;
        }
    }

    static class Pair implements Comparable<Pair> {
        int node;
        int dist;

        public Pair(int n, int d) {
            this.node = n;
            this.dist = d;
        }

        @Override
        public int compareTo(Pair p2) {
            return this.dist - p2.dist;
        }
    }

    public static void add(ArrayList<Edge>[] graph) {
        for (int i = 0; i < graph.length; i++) {
            graph[i] = new ArrayList<>();
        }

        graph[0].add(new Edge(0, 1, 2));
        graph[0].add(new Edge(0, 2, 4));
        graph[1].add(new Edge(1, 3, 7));
        graph[1].add(new Edge(1, 2, 1));
        graph[2].add(new Edge(2, 4, 3));
        graph[3].add(new Edge(3, 5, 1));
        graph[4].add(new Edge(4, 3, 2));
        graph[4].add(new Edge(4, 5, 5));
    }

    public static void dj(ArrayList<Edge>[] graph, int src, int V) {
        PriorityQueue<Pair> q = new PriorityQueue<>();
        int dist[] = new int[V];
        boolean vis[] = new boolean[V];
        Arrays.fill(dist, Integer.MAX_VALUE);
        dist[src] = 0;
        q.add(new Pair(src, 0));
        while (!q.isEmpty()) {
            Pair curr = q.remove();
            if (!vis[curr.node]) {
                vis[curr.node] = true;

                for (Edge e : graph[curr.node]) {
                    int u = e.src;
                    int v = e.dest;
                    if (dist[u] + e.weight < dist[v]) {
                        dist[v] = dist[u] + e.weight;
                        q.add(new Pair(v, dist[v]));
                    }
                }
            }
        }

        // Print distances
        System.out.println("Shortest distances from source " + src + ":");
        for (int i = 0; i < V; i++) {
            System.out.println("Node " + i + " : " + dist[i]);
        }
    }

    public static void main(String[] args) {
        int V = 6;
        ArrayList<Edge> graph[] = new ArrayList[V];
        add(graph);
        dj(graph, 0, V);
    }
}
