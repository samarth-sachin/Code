import java.util.*;

public class tropo {
    static class Edge{
        int src;
        int dest;

        public Edge(int s,int d) {
            this.src=s;
            this.dest=d;

        }

    }
    public static void add(ArrayList <Edge> graph[])
    {
        for(int i=0;i<graph.length;i++)
        { graph[i]=new ArrayList<Edge>();
        }
       graph[2].add(new Edge(2, 3));
graph[3].add(new Edge(3, 1));
graph[4].add(new Edge(4, 0));
graph[4].add(new Edge(4, 1));
graph[5].add(new Edge(5, 0));
graph[5].add(new Edge(5, 2));

    }
    public static void sort(ArrayList <Edge> graph[],boolean vis[],int curr,Stack s)
    { vis[curr]=true;
        for(Edge e:graph[curr])
        { if(!vis[e.dest])
            {
                sort(graph, vis, e.dest, s);
            }
            

        }
        s.push(curr);
        
        
    }
    public static void main(String[] args) {
         int V=6;
        ArrayList <Edge> graph[]=new ArrayList[V];
         boolean vis[]=new boolean[V];
        Stack<Integer> s = new Stack<>();
        add(graph);
         for(int i=0;i<graph.length;i++)
         {
            if(!vis[i])
            {
                sort(graph, vis, i, s);
            }
         }
         while(!s.isEmpty())
         {
            System.out.print("->"+s.pop());
         }
    }
}
