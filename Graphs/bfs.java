import java.util.*;
public class bfs {
    static class Edge{
       int source;
       int dest;
       int weight;

        public Edge(int s,int d,int w) {
            this.source=s;
            this.dest=d;
            this.weight=w;
        }
        
    }
    public static void add(ArrayList <Edge> graph[]) //time complexit=O(V+E)
    { for(int i=0;i<graph.length;i++)
        {
            graph[i]=new ArrayList<Edge>();
        }
        graph[0].add(new Edge(0,2,2));

        graph[1].add(new Edge(1, 2,10));
         graph[1].add(new Edge(1, 3,0));

           graph[2].add(new Edge(2, 0,2));
          graph[2].add(new Edge(2, 1,10));
           graph[2].add(new Edge(2, 3,-1));
           
            graph[3].add(new Edge(3, 1,0));
            graph[3].add(new Edge(3, 2,-1));

    }
    public static void bfs1( ArrayList <Edge> graph[],int V,boolean vis[],int start)
    { Queue <Integer> q=new LinkedList <Integer>();
       
        q.add(start);
        while(!q.isEmpty())
        { int curr=q.remove();
            if(vis[curr]==false)
            {
                System.out.println(curr+" ");
                vis[curr]=true;
                for(int i=0;i<graph.length;i++)
                { Edge e=graph[curr].get(i);
                q.add(e.dest);

                }
            }
        }

    }
    public static void main(String[] args) {
        int V=4;
        ArrayList <Edge> graph[]=new ArrayList[V];
         boolean vis[]=new boolean[V];
         for(int i=0;i<V;i++)
         {
            if(vis[i]==false)
            { bfs1(graph, V,vis,0);

            }
         }
        add(graph);
        
    }
}
