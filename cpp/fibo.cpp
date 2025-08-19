#include <iostream>
using namespace std;
int main()
{int a,b,c,n;
cout<<"enter vlaue of n";
cin>>n;
a=0;
b=1;
    for(int c=0;c<=n;c=a+b)
    {cout<<"\n"<<c;
    a=b;
    b=c;
    cout<<"fibonaci"
    }
}