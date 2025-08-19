#include <iostream>
class A
{
    int a;
    void getdata()
    {std::cout<<"enter value of a";
    std::cin>>a;}
    void putdata()
    {
        std::cout<<"\na";
    }
void operator++(int)
{a=a+1;
}
};
int main()
{
    A aa;
    aa.getdata();
    std::cout<<"\noriginal vlaue=";
    aa.putdata();
    aa++;
    std::cout<<"\nnew value";
    aa.putdata();
    return 0;
}