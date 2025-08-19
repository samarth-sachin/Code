public class twod { 
    public static int binary(int [][]matrix,int target)
    { int left=0;
        int right=(matrix.length*(matrix[0].length))-1;
        int m=matrix[0].length;
        while(left<=right){
            int mid=(left+right)/2;
            int row=mid/m;
            int col=mid%m;
            if(matrix[row][col]<target){
                left=mid+1;
            }else if(matrix[row][col]>target){
                right=mid-1;
            }else{
                return mid;
            }
        }
        return -1;
    }
    public static void main(String[] args) {
       int[][] matrix = {
            {1, 3, 5, 7},
            {10, 11, 16, 20},
            {23, 30, 34, 60}
        };
        int target=11;
    }
}
