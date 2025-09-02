 class matrix{
    public static int []result(int matrix[][],int target)
    { if(matrix==null ||matrix.length==0)
        {
            return null;
        }
        for(int i=0;i<matrix.length;i++)
        {
        int result[]=binary(matrix, i, target, matrix[i].length-1, target);
        if(result!=null) return result;
        }
        return null;

    }
 public static int [] binary(int matrix[][],int row,int cstart,int cend,int target)
 { while(cstart<=cend)
    {
        int mid=cstart+(cend-cstart)/2;
        if(matrix[row][mid]==target)
        {
            return new int[]{row,mid};
        }
        else if(matrix[row][mid]<target)
        { cstart=mid+1;

        }
        else
        {
            cend=mid-1;
        }
    }
    return new int[0];

 }
    public static void main(String[] args) {
        
    }
}