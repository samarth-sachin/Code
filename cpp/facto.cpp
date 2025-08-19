#include <iostream>
using namespace std;
int main()
{
    int n,factorial;
    cout<<"Enter the value of n";
    cin>>n;
    factorial=1;
for (int i=1;i<=n;i++)
factorial=i*factorial;
cout<<"the facto is"<<factorial;
return 0;}