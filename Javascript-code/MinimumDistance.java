//Minimum Distance Hackerrank question solved in Java.


import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;



class Node {
    int i,j;
    int distance;
    
    Node(int i,int j, int distance) {
        this.i=i;
        this.j=j;
        this.distance=distance;
    }
}
class Result {

    /*
     * Complete the 'minimumDistance' function below.
     *
     * The function is expected to return an INTEGER.
     * The function accepts 2D_INTEGER_ARRAY area as parameter.
     */
------------------------------------------------------------------------

    public static int minimumDistance(List<List<Integer>> area) {
    // Write your code here
    int R = area.size();
    int C = area.get(0).size();
    int row[]={-1,0,1,0};
    int col[]={0,1,0,-1};
    
    if(area.get(0).get(0)==0)
    return -1;
    
    boolean[][]visited = new boolean[R][C];
    
    Queue<Node> queue= new LinkedList<Node>();
    queue.add(new Node(0,0,0));
    
    while(!queue.isEmpty()) {
        Node node = queue.poll();
        
        if(area.get(node.i).get(node.j) == 9)
         return node.distance;
         
        visited[node.i][node.j]=true;
        
        for(int x=0;x<4;x++) {
            int new_i = node.i + row[x];
            int new_j=node.j + col[x];
            
            if(new_i>=0 && new_i<R && new_j>=0 && new_j<C && !visited[new_i][new_j] && area.get(new_i).get(new_j)!=0) {
                queue.add(new Node(new_i,new_j,node.distance+1));
            }
        }
    }
    return -1;

    }

}
public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        int areaRows = Integer.parseInt(bufferedReader.readLine().trim());
        int areaColumns = Integer.parseInt(bufferedReader.readLine().trim());

        List<List<Integer>> area = new ArrayList<>();

        for (int i = 0; i < areaRows; i++) {
            String[] areaRowTempItems = bufferedReader.readLine().replaceAll("\\s+$", "").split(" ");

            List<Integer> areaRowItems = new ArrayList<>();

            for (int j = 0; j < areaColumns; j++) {
                int areaItem = Integer.parseInt(areaRowTempItems[j]);
                areaRowItems.add(areaItem);
            }

            area.add(areaRowItems);
        }

        int result = Result.minimumDistance(area);

        bufferedWriter.write(String.valueOf(result));
        bufferedWriter.newLine();

        bufferedReader.close();
        bufferedWriter.close();
    }
}