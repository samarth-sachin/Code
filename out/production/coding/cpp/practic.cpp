#include <iostream>
using namespace std;
int fact(int x){
 if(x==1) return 1;
return x=x*fact(x-1);

   
}
int main()
{
cout<<fact(5);

}