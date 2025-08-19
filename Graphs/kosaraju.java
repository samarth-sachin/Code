import java.lang.annotation.Target;
import java.util.ArrayList;
import java.util.Stack;
//time comple:O(E+V)
public class kosaraju {
    static class Edge{
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
           graph[0].add(new Edge(0, 2));
graph[0].add(new Edge(0, 3));
graph[1].add(new Edge(1, 0));
graph[2].add(new Edge(2, 1));
graph[3].add(new Edge(3, 4));

        }
        public static void dfs(ArrayList <Edge> graph[],int curr,boolean vis[])
        { vis[curr]=true;
            System.out.print(" "+curr);
            for(Edge e:graph[curr])
            { if(!vis[e.dest]) dfs(graph, e.dest, vis);}
        }
        public static void top(ArrayList <Edge> graph[],int curr,boolean vis[],Stack s)
        {vis[curr]=true;
            for(Edge e:graph[curr])
            {
            if(!vis[e.dest])
            { top(graph, e.dest,vis, s);

            }}
            s.push(curr);
        }
        public static void raju(ArrayList <Edge> graph[],int V)
        { //step 1
            boolean vis[]=new boolean[V];
        Stack <Integer> s=new Stack<>();
        for(int i=0;i<graph.length;i++)
        { if(!vis[i])  top(graph, i, vis, s);}
        ArrayList <Edge> trans[]=new ArrayList[V];
        //step 2
        for(int i=0;i<trans.length;i++)
        {    vis[i]=false;
            trans[i]=new ArrayList<Edge>();
        }
        for(int i=0;i<V;i++)
        { for(int j=0;j<graph[i].size();j++)
            {
            Edge e=graph[i].get(j);
            trans[e.dest].add(new Edge(e.dest, e.src));
            }
        }
        //step 3
        while(!s.isEmpty())
        { int curr=s.pop();
            if(!vis[curr])
            { dfs(trans,curr, vis);
                System.out.println();

                

            }

        }
        }
        public static void main(String[] args) {
            int V=5;
        
        ArrayList <Edge> graph[]=new ArrayList[V];
        
        creategraph(graph);
        raju(graph, V);
        }
}
