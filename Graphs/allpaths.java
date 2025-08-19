import java.util.ArrayList;
//time comp:O(v^v)
public class allpaths {
    static class Edge {
        int source;
        int dest;
        public Edge(int s, int d) {
            this.source = s;
            this.dest = d;
        }
    }

    public static void add(ArrayList<Edge> graph[]) {
        for (int i = 0; i < graph.length; i++) {
            graph[i] = new ArrayList<>();
        }
        graph[0].add(new Edge(0,2));
        graph[1].add(new Edge(1,2));
        graph[1].add(new Edge(1,3));
        graph[2].add(new Edge(2,0));
        graph[2].add(new Edge(2,1));
        graph[2].add(new Edge(2,3));
        graph[3].add(new Edge(3,1));
        graph[3].add(new Edge(3,2));
    }

    public static void all(ArrayList<Edge> graph[], boolean vis[], int s, int target, String path) {
        if (s == target) {
            System.out.println(path);  // print complete path
            return;
        }

        vis[s] = true;  // mark this node visited before recursion
        for (Edge e : graph[s]) {
            if (!vis[e.dest]) {
                all(graph, vis, e.dest, target, path + "->" + e.dest); 
            }
        }
        vis[s] = false;  // backtrack
    }

    public static void main(String[] args) {
        int V = 4;
        ArrayList<Edge> graph[] = new ArrayList[V];
        add(graph);
        boolean vis[] = new boolean[V];

        // Start path from source node
        all(graph, vis, 0, 3, "0");  
    }
}
