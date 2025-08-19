#include <iostream>
class add
{int i,j;
public :
void  getdata()
{std::cout<<"jai maahrashtra";
std::cin>>i;
std::cout<<"enter another no";
std::cin>>j;}
void putdata()
{std::cout<<""<<i+j;}

};
int main()
{
 add aa;
    aa.getdata();
    aa.putdata();
    return 0;
}
