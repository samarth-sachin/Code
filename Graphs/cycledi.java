import java.util.ArrayList;
public class cycledi {
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
        // graph[0].add(new Edge(0, 1));
        // graph[0].add(new Edge(0, 2));
        // graph[0].add(new Edge(0, 3));
        // graph[1].add(new Edge(1, 0));
        // graph[1].add(new Edge(1, 2));
        // graph[2].add(new Edge(2, 0));
        // graph[2].add(new Edge(2, 1));
        // graph[3].add(new Edge(3, 0));
        // graph[3].add(new Edge(3, 4));
        // graph[4].add(new Edge(4, 3));
        graph[0].add(new Edge(0, 2));
graph[1].add(new Edge(1, 0));
graph[2].add(new Edge(2, 3));
graph[3].add(new Edge(3, 0));
    }
    public static boolean  cycle( ArrayList <Edge> graph[],int curr,boolean vis[],boolean rec[])
    { vis[curr]=true;
        rec[curr]=true;
        for(Edge e:graph[curr]){
            if(rec[e.dest]){
                return true;

            }
            else if(!vis[e.dest])
            { if(cycle(graph, e.dest, vis, rec))
                {
return true;
                }
                

            }
            
        }
        rec[curr]=false;
        return false;
        
    }
    // public static boolean isCyclic(ArrayList<Edge>[] graph, boolean vis[]) {
       
    //     boolean rec[]=new boolean[graph.length];
    //     for (int i = 0; i < graph.length; i++) {
    //         if (!vis[i]) {
    //             if (cycle(graph, i, vis, rec)){
    //                 return true;
    //             }
    //         }
            
    //     } return false;
    // }
        

    
    public static void main(String[] args) {
        int V=5;
        ArrayList <Edge> graph[]=new ArrayList[V];
         boolean rec[]=new boolean[V];
        boolean vis[]=new boolean[V];
        add(graph);
        for(int i=0;i<graph.length;i++)
        { if(!vis[i]==false)
            {
                boolean ispresent=cycle(graph, 0, vis, rec);
                if(ispresent) {
                     System.out.println(ispresent);
                      break;
                     
                }

        }
        
        
    }
    }
}

