#include <Stdio.h>

int f1(int n)
{
	if(n<=0){
		return 0;
	}
	else if( n<=2){
		return n;
	}
	else{
		return f1(n-3)+f1(n-2)+f1(n-1);
	}
}

int main()
{
	printf("result : %d \n", f1(4));
	return 0;
}

