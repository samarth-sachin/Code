#include <iostream>
class A
{
int a,b;
public:
A ()
{a=10;
b=10;}
void putdata()
{
    std::cout<<"\n"<<a;
    std::cout<<"\n"<<b;
}
};
int main()
{
 A aa;
 aa.putdata();
}