public class chess
{
public boolean issafe(int row,int col,char[][]board)
{for (int j=0;j<board.length;j++)
    {
    //horizontal
    if(board[row][j]=='Q')
    {
        return false;
    }}
    for(int i=0;i<board.length;i++)
    {
        if(board[i][col]=='Q')
        {
            return false;
        }
    }
    //upper left
    int r=row;
    for(int c= col;c>=0&&r>=0;c--,r--)
    {
        if(board [r][c]='Q')
        {
            return false;
        }
    }
//upprer right
r=row;
for(int c=col;c<board.length&&r>=0;r--,c++)
{
    if(board[r][c]='Q')
    {
        return false;

    }
}
//lower left
r=row;
for(int c=col;c>=0&&r<board.length;r++,c--)
{
    if(board[r][c]='Q')
    {
        return false;
    }

}
//lower right
for(int c=col;c<board.length&&r<board.length;r--,c++)
{
    if(board[r][c]='Q')
    {
        return false;
    }
}
return true;
}


}
public static void saveboard(char[][board,list<list<String>>])all boards;
