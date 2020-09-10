#include <stdio.h>

int f3(int n)
{
	if(n==0){
		return 4;
	}
	else{
		return f3(n-1)+2;
	}
}
int main()
{
	printf("%d", f3(5));
	return 0;
} 
