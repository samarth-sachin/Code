import java.util.ArrayList;
import java.util.PriorityQueue;
//time comple:O(eloge)
public class prism {
    static class Edge{
    int src;
    int dest;
    int weight;

        public Edge(int s,int d,int w) {
          this.src=s;
          this.dest=d;
          this.weight=w;
        }
    }
        public static void creategraph(ArrayList <Edge> graph[])
        { for(int i=0;i<graph.length;i++)
            {
                graph[i]=new ArrayList<Edge>();
            }
            graph[0].add(new Edge(0, 1, 10));
graph[0].add(new Edge(0, 2, 15));
graph[0].add(new Edge(0, 3, 30));
graph[1].add(new Edge(1, 0, 10));
graph[1].add(new Edge(1, 3, 40));
graph[2].add(new Edge(2, 0, 15));
graph[2].add(new Edge(2, 3, 50));
graph[3].add(new Edge(3, 1, 40));
graph[3].add(new Edge(3, 2, 50));
        }
         static class pair implements Comparable<pair>
        { int node; 
            int dist;

        public pair(int n,int d) {
this.node=n;
this.dist=d;
        }
        @Override
        public int compareTo(pair p2)
        {
            return this.dist-p2.dist;
        }
        }
        public static void comfort(ArrayList <Edge> graph[])
        {   boolean vis[]=new boolean[graph.length];
            PriorityQueue <pair> pq=new PriorityQueue<pair>();
            pq.add(new pair(0, 0));
            int cost=0;
            while(!pq.isEmpty())
            {
                pair cur=pq.remove();
                if(!vis[cur.node])
                { vis[cur.node]=true;
                    cost=cost+cur.dist;
                    for(Edge e:graph[cur.node])
                    {
                        if(!vis[e.dest])
                        {
                            pq.add(new pair(e.dest, e.weight));
                            
                        }
                    }

                }
            }
System.out.println(cost);


        }
    public static void main(String[] args) {
        int V=4;
        
        ArrayList <Edge> graph[]=new ArrayList[V];
        creategraph(graph);
        comfort(graph);
           
    }
}
