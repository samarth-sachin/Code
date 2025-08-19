#include <iostream>
class A
{
public:
int a;
void input()
{
    std::cout<<"enter value of a";
    std::cin>>a;

}

};
class B:public A
{int b;
public:
void getdata()
{
    std::cout<<"enter value of b";
    std::cin>>b;
}
void putdata()
{
    std::cout<<"the additon will be"<<a+b;

}

};
int main()
{
 
 B aa;
 aa.input();
 aa.getdata();
 aa.putdata();
 return 0;

}