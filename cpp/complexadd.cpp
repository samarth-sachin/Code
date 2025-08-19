#include <iostream>
class complex
{
    int i,j;
    public:
    void getdata()
 {std::cout<<"enter value of one complex no.=";
    std::cin>>i;
    std::cout<<"enter value of another complex no.";
    std::cin>>j;}
    void putdata()
    {std::cout<<"\n"<<i;
    std::cout<<"\n"<<j;}
    
    complex operator +(complex bb)
   { complex cc;
    cc.i=i+bb.i;
    cc.j=j+bb.j;
    return cc;
    }

};
int main()
{
complex aa,bb,cc;
aa.getdata();
bb.getdata();
cc=aa+bb;
aa.putdata();
bb.putdata();
cc.putdata();
return 0;
}