import java.util.ArrayList;
//time comple:-O(V+E)
public class articulation{
static  class Edge{
          int src;
          int dest;

        public Edge(int s,int d) {
            this.src=s;
            this.dest=d;
        }
          
    }
    public static void creategraph(ArrayList <Edge> graph[])
    { for(int i=0;i<graph.length;i++)
        {
            graph[i]=new ArrayList<Edge>();
            
        }
        graph[0].add(new Edge(0,1));
                graph[0].add(new Edge(0,2));

                        graph[0].add(new Edge(0,3));


        graph[1].add(new Edge(1, 0));
         graph[1].add(new Edge(1, 2));

           graph[2].add(new Edge(2, 0));
          graph[2].add(new Edge(2, 1));
           
           
            graph[3].add(new Edge(3, 0));
            graph[3].add(new Edge(3, 4));
            graph[4].add(new Edge(4, 3));
    }
    public static void dfs(ArrayList <Edge> graph[],int curr,int low[],int dis[],int time,int pare,boolean vis[],boolean ap[])
    {vis[curr]=true;
        int children=0;
        dis[curr]=low[curr]=++time;
        for(Edge e:graph[curr])
        { int neigh=e.dest;
            if(e.dest==pare){
                continue;
            }
            else if(vis[neigh])
            {
                low[curr]=Math.min(low[curr], dis[neigh]);
            }
            else{
                dfs(graph, neigh, low, dis, time, curr, vis, ap);
                low[curr]=Math.min(low[curr], low[neigh]);
                if(dis[curr]<=low[neigh] && pare!=1)
                { ap[curr]=true;

                }
                children++;
            }

        }
        if(pare!=-1 && children>1) ap[curr]=true;


    }
    public static void algo(ArrayList <Edge> graph[],int V)
    { int low[]=new int[V];
        int dis[]=new int[V];
        boolean vis[]=new boolean[V];
        boolean ap[]=new boolean[V];
        int time=0;
        for(int j=0;j<V;j++)
        {
            dfs(graph, j, low, dis, time, -1, vis, ap);
        }
for(int i=0;i<V;i++)
{
    if(ap[i])
    {
        System.out.println("articulation point is"+ i+" ");
    }
}

    }
    public static void main(String[] args) {
        int V=5;
          ArrayList <Edge> graph[]=new ArrayList[V];
          creategraph(graph);
          algo(graph, V);
          //print 2's neighobours

    }
}

