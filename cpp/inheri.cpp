#include <iostream>
class A
{
    
    public :
    int a;
    void getdata()
    {
        std::cout<<"Enter a no";
        std::cin>>a;
    }
    
};
class B:public A
{
    int b;
public :
void input()
{
std::cout<<"enter value of b";
std::cin>>b;
}
void show()

{
    std::cout<<"the additionn"<<a+b;
}

};
int main()
{
    B aa;
    aa.getdata();
    aa.input();
    aa.show();
    return 0;
}