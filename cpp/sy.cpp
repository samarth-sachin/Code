#include <iostream>
using namespace std;
int main()
{  int a,b,c;
    cout<<"Enter two nos\n";
    cin>>a;
    cin>>b;
    cout<<"1:Add\n";
    cout<<"2:Sub\n";
    cout<<"3:Multi\n";
    cout<<"4:Divide\n";
    cout<<"<----------->\n";
   cout<<"Enter a no\n";
  cin>>c;
  switch (c)
  {
  case 1:
  {int d=a+b;
  cout<<"addition is:\n"<<d;
    /* code */
    break;
  }
  case 2:
 { int e=a-b;
  cout<<"sub is \n"<<e;
  break;
 }
  case 3:
 { int f=a*b;
  cout<<"multi is\n"<<f;
  break;
 }
  case 4:
  {int g=a/b;
  cout<<"divide is:\n"<<g;
  break;
  }
  default:
    {break;}
  }
}
// i love "java"