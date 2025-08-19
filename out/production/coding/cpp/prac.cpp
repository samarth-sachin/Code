#include <iostream>
using namespace std;
int main(){
    int n,x,y,z;
    cout<<"enter n: ";
    cin>>n;
    x=0;
    y=1;
    z=0;
    for( ;z<=n;z=x+y){
        cout<<z;
        x=y;
        y=z;
    }return 0;
}