#include <iostream>
using namespace std;
int main()
{
    int i,j,a,b,m1[10][10],m2[10][10],sum[10][10];
    cout<<"enter the size of matrix";
    cin>>a>>b;
    cout<<"enter the matrix m1";
    for (i=0;i<a;i++)
    {
        for(j=0;j<b;j++)
        {
            cin>>m1[i][j];
        }
 
   }
cout<<"enter value of matrix m2;";
for (i=0;i<a;i++)
{
    for (j=0;j<b;j++)
    {
        cin>>m2[i][j];
    }
}
cout <<"the additon will be";
for (i=0;i<a;i++)
{
    for (j=0;j<b;j++)
    {sum[i][j]=m1[i][j]+m2[i][j];
        cout<<"the additon"<<sum[i][j];
    }
}

}